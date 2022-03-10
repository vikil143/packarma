import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import WhiteTextBox from '../../components/white_text_box';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';

export default function ForgetPassword({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Forgot Password'} />
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            fontSize: 14,
            color: Colors.black,
          }}>
          Enter the Mobile Number associated with your account and we’ll send
          you an OTP to verify your account.
        </Text>
        <Spacing size={10} />
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
          placeholder="Enter Mobile Number"
        />
        <TakeSpace />

        <Button
          onPress={() => navigation.navigate('Verify')}
          title={'Proceed'}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
