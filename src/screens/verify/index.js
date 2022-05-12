import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors, SUCCESS} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Pins from '../../components/otp/Pin';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';
import useLocalization from '../../hooks/useLocalization';
import api from '../../utility/api';
import Loader from '../../components/loader';

export default function Verify({navigation, route}) {
  const t = useLocalization();
  const [pin, setPin] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  // const [] = navigation.getParam("")
  const phone = route.params?.phone;
  const fromRegister = route.params?.fromRegister;
  const onSubmit = async () => {
    // crashlytics().log('NAVIGATE TO SET PASSWORD....');
    // navigation.navigate('SetPassword');

    setLoader(true);
    try {
      const formData = {
        phone: phone,
        workflow: 'register',
        otp_code: pin,
      };

      const response = await api({
        url: 'customerapi/verify_otp',
        data: formData,
      });

      console.log('Response Data', response.data);
      if (response.data.success === SUCCESS) {
        if (fromRegister) {
          setLoader(false);
          crashlytics().log('NAVIGATE TO SUCCESS....');
          navigation.navigate('Success', {
            message: t('descriptions.successDescriptionRegister'),
          });
        } else {
          setLoader(false);
          crashlytics().log('NAVIGATE TO SET PASSWORD....');
          navigation.navigate('SetPassword', {phone, pin});
        }
      } else {
        setLoader(false);
        console.log('Error thought api ', response.data);
      }
    } catch (error) {
      setLoader(false);
      console.log('Error ', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const formData = {
        phone,
        workflow: 'register',
      };

      const response = await api({
        url: 'customerapi/request_otp',
        data: formData,
      });

      console.log('Verify API Data', response.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  console.log('#### Verify Render ', phone);
  return (
    <View style={[styles.container]}>
      <BackHeader title={t('descriptions.verifyMobileNumber')} />
      <Loader loading={loader} />
      <View style={{flex: 1, padding: 15}}>
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            fontSize: 14,
            color: Colors.black,
          }}>
          {/* We have sent an OTP to the registered mobile Number +91 78XXXXXX45. */}
          {t('login.wehaveSentOTP')}
        </Text>
        <Spacing />
        <View style={{}}>
          <Pins pin={pin} setPin={setPin} />
          <Spacing />
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
              textAlign: 'center',
            }}>
            {/* Didn’t receive OTP?{' '} */}
            {t('login.didntReceiveOTP')}
            <Text style={{color: '#52392F'}}> {t('common.resend')}</Text>
          </Text>
          <Spacing size={2} />
          <Text
            style={{
              color: Colors.brownColor,
              textAlign: 'center',
              fontFamily: typography.poppinsRegular,
              fontSize: 12,
            }}>
            {/* Request OTP again in 25s */}
            {t('login.requestOTPagain')}
          </Text>
        </View>
        <TakeSpace />
        <Button title={t('common.verify')} onPress={onSubmit}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
