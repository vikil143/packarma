import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Loader from '../../components/loader';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import Button from '../../components/button';
import {storeUserData} from '../../reducers/userLocalData';
import crashlytics from '@react-native-firebase/crashlytics';
import commonStyles from '../../utility/commonStyles';
import {Colors, SUCCESS} from '../../utility/constants';
import typography from '../../utility/typography';
import useLocalization from '../../hooks/useLocalization';
import useToast from '../../hooks/useToast';
import {ToastContext} from '../../context/Toast';
import api from '../../utility/api';

function Login({navigation, dispatch}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const t = useLocalization();
  const {showToast} = useToast(ToastContext);

  const onChangeEmailText = (_, value) => setEmail(value);

  const onChangePasswordText = (_, value) => setPassword(value);

  const handleValidate = () => {
    if (email.trim() === '') {
      showToast('Email field is required!!', 3000, Colors.danger);
      return false;
    }

    if (password.trim() === '') {
      showToast('Password field is required!!', 3000, Colors.danger);
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    const validate = handleValidate();
    if (validate) {
      setLoader(true);
      const formData = {
        email,
        password,
      };

      try {
        const response = await api({
          url: 'login_api',
          data: formData,
        });

        console.log('response data', response.data);
        if (response.data.success === SUCCESS) {
          dispatch(storeUserData({token: response.data.data.remember_token}));
          setLoader(false);
          crashlytics().log('GO TO DASHBOARD....');
          navigation.replace('BottomTabs');
        } else {
          showToast(response.data.message, 2000, Colors.danger);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        console.log('Error ', error);
      }
    }
  };

  return (
    <View style={[commonStyles.container, styles.container]}>
      <Loader loading={loader} />
      <View style={{}}>
        <Text style={[styles.loginAccount]}>{t('login.loginInToAccount')}</Text>
      </View>
      <Spacing />
      <Text style={[styles.emailId]}>{t('common.emailId')}</Text>
      <Spacing size={2} />
      <WhiteTextBox
        value={email}
        name="email"
        onChangeText={onChangeEmailText}
      />
      <Spacing />
      <Text style={[styles.password]}>{t('common.password')}</Text>
      <Spacing size={2} />
      <WhiteTextBox
        value={password}
        name="password"
        onChangeText={onChangePasswordText}
        action="password"
        actionStyles={{tintColor: '#ddd'}}
      />
      <Spacing />
      <Button
        onPress={() => {
          onSubmit();
          // crashlytics().log('On Click my orders');
          // navigation.navigate('BottomTabs');
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

export default connect()(Login);
