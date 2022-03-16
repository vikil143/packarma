import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Pins from '../../components/otp/Pin';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';
import useLocalization from '../../hooks/useLocalization';

export default function Verify({navigation}) {
  const t = useLocalization();

  return (
    <View style={[styles.container]}>
      <BackHeader title={t('common.verify')} />
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
          <Pins pin={4} />
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
            <Text style={{color: Colors.black}}> {t('common.resend')}</Text>
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
        <Button
          title={t('common.verify')}
          onPress={() => navigation.navigate('SetPassword')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
