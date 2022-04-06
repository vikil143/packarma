import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import Button from '../../components/button';
import commonStyles from '../../utility/commonStyles';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import useLocalization from '../../hooks/useLocalization';

export default function Login({navigation}) {
  const t = useLocalization();

  return (
    <View style={[commonStyles.container, styles.container]}>
      <View style={{}}>
        <Text style={[styles.loginAccount]}>{t('login.loginInToAccount')}</Text>
      </View>
      <Spacing />
      <Text style={[styles.emailId]}>{t('common.emailId')}</Text>
      <Spacing size={2} />
      <WhiteTextBox />
      <Spacing />
      <Text style={[styles.password]}>{t('common.password')}</Text>
      <Spacing size={2} />
      <WhiteTextBox action="password" actionStyles={{tintColor: '#ddd'}} />
      <Spacing />
      <Button
        onPress={() => {
          crashlytics().log('On Click my orders');
          navigation.navigate('BottomTabs');
        }}
        title={t('common.login')}></Button>
      <Spacing size={5} />
      <Text
        style={[styles.forgetPassword]}
        onPress={() => {
          crashlytics().log('Navigate to Forgot Password....');
          navigation.navigate('ForgetPassword');
        }}>
        {/* Forgot Password? */}
        {t('login.forgetPassword')}
      </Text>
      <TakeSpace />
      <Text style={{textAlign: 'center', color: Colors.black}}>
        {/* Don’t have an Account?{' '} */}
        {t('login.dontHaveAccount')}
        <Text
          onPress={() => {
            crashlytics().log('Navigate to Register done...');
            // console.log('On Click Login', crash);
            navigation.navigate('Register');
          }}
          style={[styles.registerText]}>
          {/* Register */} {t('common.register')}
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
        <Text style={[styles.footerLogo]}>{t('common.appNameCaps')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerLogo: {
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
    color: Colors.black,
  },
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
