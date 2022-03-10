import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import Button from '../../components/button';
import commonStyles from '../../utility/commonStyles';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function Login({navigation}) {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <View style={{}}>
        <Text style={[styles.loginAccount]}>Login to your Account</Text>
      </View>
      <Spacing />
      <Text style={[styles.emailId]}>Email ID</Text>
      <Spacing size={2} />
      <WhiteTextBox />
      <Spacing />
      <Text style={[styles.password]}>Password</Text>
      <Spacing size={2} />
      <WhiteTextBox />
      <Spacing />
      <Button
        onPress={() => navigation.navigate('MyProfile')}
        title={'Login'}></Button>
      <Spacing size={5} />
      <Text
        style={[styles.forgetPassword]}
        onPress={() => navigation.navigate('ForgetPassword')}>
        Forgot Password?
      </Text>
      <TakeSpace />
      <Text style={{textAlign: 'center'}}>
        Don’t have an Account?{' '}
        <Text
          onPress={() => {
            console.log('On Click Login');
            navigation.navigate('Register');
          }}
          style={[styles.registerText]}>
          Register
        </Text>
      </Text>
      <Spacing size={5} />
      <View style={[styles.footer]}>
        <Image
          style={[styles.footerImage]}
          resizeMode="contain"
          source={require('../../../assests/images/packarma_logo.png')}
        />
        <Spacing size={5} />
        <Text style={[styles.footerLogo]}>PACKARMA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerLogo: {fontFamily: typography.poppinsRegular, fontSize: 14},
  footerImage: {tintColor: '#707070', width: 21, height: 26},
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {color: Colors.redColor},
  forgetPassword: {color: Colors.brownColor},
  password: {color: '#000', fontFamily: typography.poppinsRegular},
  emailId: {color: '#000', fontFamily: typography.poppinsRegular},
  container: {backgroundColor: '#F4F4F4', padding: 20},
  loginAccount: {
    fontFamily: typography.poppinsBold,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
