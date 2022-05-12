import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import Button from '../../components/button';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import useLocalization from '../../hooks/useLocalization';
import {Colors, SUCCESS} from '../../utility/constants';
import typography from '../../utility/typography';
import useToast from '../../hooks/useToast';
import api from '../../utility/api';
import Loader from '../../components/loader';

export default function SetPassword({navigation, route}) {
  const t = useLocalization();
  const {showToast} = useToast();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const phone = route.params?.phone;
  const pin = route.params?.pin;

  const handleValidate = () => {
    if (newPassword.trim() === '') {
      setErrorMessage('New password is required!!');
      return false;
    }

    if (confirmPassword.trim() === '') {
      setErrorMessage('Confirm password is required!!');
      return false;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New Password and Confirm Password should match');
      return false;
    }

    return true;
  };

  const onSubmit = async () => {
    const validate = handleValidate();

    if (validate) {
      setLoader(true);
      try {
        const formData = {
          phone: phone,
          workflow: 'fpwd',
          otp_code: pin,
          new_password: newPassword,
          confirm_password: confirmPassword,
        };
        const response = await api({
          url: 'customerapi/forgot_password_api',
          data: formData,
        });

        console.log('response data ', response.data);
        if (response.data.success === SUCCESS) {
          setLoader(false);
          crashlytics().log('NAVIGATE TO SUCCESS....');
          navigation.navigate('Success', {
            message: t('descriptions.successDescription'),
          });
        } else {
          setErrorMessage(response.data.message);
          setLoader(false);
        }
      } catch (error) {
        console.log('Error ', error);

        setLoader(false);
      }
    }
  };

  const onChangeNewPassword = (_, value) => setNewPassword(value);
  const onChangeConfirmPassword = (_, value) => setConfirmPassword(value);

  return (
    <View style={[styles.container]}>
      <BackHeader title={t('common.setPassword')} />
      <Loader loading={loader} />
      <View style={{flex: 1, padding: 18}}>
        <View>
          <Text
            style={{
              fontFamily: typography.poppinsSemiBold,
              fontSize: 14,
              color: Colors.black,
            }}>
            {/* New Password */}
            {t('common.newPassword')}
          </Text>
          <Spacing size={5} />
          <WhiteTextBox
            value={newPassword}
            onChangeText={onChangeNewPassword}
            action="password"
            actionStyles={{tintColor: '#ddd'}}
          />
        </View>
        <Spacing size={15} />
        <View>
          <Text
            style={{
              fontFamily: typography.poppinsSemiBold,
              fontSize: 14,
              color: Colors.black,
            }}>
            {t('common.confirmPassword')}
          </Text>
          <Spacing size={5} />
          <WhiteTextBox
            value={confirmPassword}
            onChangeText={onChangeConfirmPassword}
            action="password"
            actionStyles={{tintColor: '#ddd'}}
          />
        </View>
        <Spacing size={5} />
        {!!errorMessage && (
          <View
            style={{padding: 15, backgroundColor: '#FFE3E0', borderRadius: 8}}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                fontFamily: typography.poppinsMedium,
              }}>
              {errorMessage}
              {/* New Password and Confirm Password should match */}
            </Text>
          </View>
        )}

        <TakeSpace />

        <View style={{padding: 10}}>
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
              color: Colors.black,
            }}>
            Password Policy :
          </Text>
          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{fontSize: 12, color: Colors.black}}>
              Length of the password should be atleast 8 character.
            </Text>
          </View>

          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain atleast 1 Capital letter and 1 small
              letter.
            </Text>
          </View>
          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain a special character.
            </Text>
          </View>
          <Spacing size={5} />

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain a number.
            </Text>
          </View>
          <Spacing size={5} />
        </View>

        <Button title={t('common.reset')} onPress={onSubmit}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
