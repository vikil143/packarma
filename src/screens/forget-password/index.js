import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import WhiteTextBox from '../../components/white_text_box';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';
import useLocalization from '../../hooks/useLocalization';
import Label from '../../components/label';
import useToast from '../../hooks/useToast';

export default function ForgetPassword({navigation}) {
  const [phone, setPhone] = useState('');
  const t = useLocalization();
  const {showToast} = useToast();

  const goToVerify = () => {
    crashlytics().log('NAVIGATE TO VERIFY SCREEN....');
    navigation.navigate('Verify', {phone});
  };

  const onChangeNumber = (_, value) => setPhone(value);

  return (
    <View style={{flex: 1}}>
      <BackHeader title={t('login.forgotPassword')} />
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            fontSize: 14,
            color: Colors.black,
          }}>
          {t('login.forgetPasswordDescription')}
        </Text>
        <Spacing size={10} />
        <Label>{t('common.mobileNumber')}</Label>
        <WhiteTextBox
          prefix={
            <View style={{flexDirection: 'row'}}>
              <Spacing size={8} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                }}>
                +91
              </Text>
              <Spacing size={8} />
              <View
                style={{
                  backgroundColor: Colors.black,
                  height: 20,
                  width: 1,
                }}></View>
            </View>
          }
          name="phone"
          value={phone}
          onChangeText={onChangeNumber}
          placeholder={t('login.enterMobileNumber')}
        />
        <TakeSpace />

        <Button
          // onPress={() => {
          //   navigation.navigate('Verify');
          //   crashlytics().log('NAVIGATE TO VERIFY SCREEN....');
          // }}
          onPress={goToVerify}
          title={t('common.proceed')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
