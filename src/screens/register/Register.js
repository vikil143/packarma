import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import crashlytics from '@react-native-firebase/crashlytics';
import Tooltip from 'react-native-walkthrough-tooltip';
import BackHeader from '../../components/back-header';
import Button from '../../components/button';
import CheckBox from '../../components/checkbox';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import useLocalization from '../../hooks/useLocalization';
import Info from '../../svg/Info';
import commonStyles from '../../utility/commonStyles';
import {Colors, SCREEN_WIDTH, SUCCESS} from '../../utility/constants';
import typography from '../../utility/typography';
import VisitingCard from '../../svg/VisitingCards';
import api from '../../utility/api';

var axios = require('axios');

export default function Register({navigation}) {
  const [toolTipVisible, setTooltipVisible] = React.useState(false);
  const [forntImage, setForntImage] = React.useState(null);
  const [backImage, setBackImage] = React.useState(null);
  const [data, setData] = React.useState({
    name: '',
    phone_country_id: '1',
    phone: '',
    email: '',
    password: '',
  });
  const t = useLocalization();

  const takeForntPhoto = async () => {
    const image = await launchImageLibrary({
      mediaType: 'photo',
      width: (SCREEN_WIDTH - 40) / 2,
      height: 100,
    });

    setForntImage(image.assets[0].uri);
  };

  const takeBackPhoto = async () => {
    const image = await launchImageLibrary({
      mediaType: 'photo',
      width: (SCREEN_WIDTH - 40) / 2,
      height: 100,
    });

    setBackImage(image.assets[0].uri);
  };

  const goToVerify = async () => {
    try {
      // const formData = new FormData();

      const formData = {
        name: data.name,
        email: data.email,
        phone_country_id: data.phone_country_id,
        phone: data.phone,
        password: data.password,
        visiting_card_front: {
          name: 'selfie.jpg',
          type: 'image/jpg',
          uri: forntImage,
        },
        visiting_card_back: {
          name: 'selfie2.jpg',
          type: 'image/jpg',
          uri: backImage,
        },
      };

      // formData.append('name', data.name);
      // formData.append('email', data.email);
      // formData.append('phone_country_id', data.phone_country_id);
      // formData.append('phone', data.phone);
      // formData.append('email', data.email);
      // formData.append('password', data.password);
      // formData.append('visiting_card_front', {
      //   name: 'selfie.jpg',
      //   type: 'image/jpg',
      //   uri: forntImage,
      // });

      // formData.append('visiting_card_back', {
      //   name: 'selfie.jpg',
      //   type: 'image/jpg',
      //   uri: backImage,
      // });

      const response = await api({
        url: 'register_api',
        data: formData,
      });

      if (response.data.success == SUCCESS) {
        crashlytics().log('NAVIGATE TO VERIFY SCREEN...');
        navigation.navigate('Verify', {phone: data.phone, fromRegister: true});
      }

      console.log('response api ', response.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const onChangeEnterName = (name, value) =>
    setData({...data, [name]: String(value)});

  const onChangeEnterMobileNumber = (name, value) =>
    setData({...data, [name]: String(value)});

  const onChangeEmail = (name, value) =>
    setData({...data, [name]: String(value)});

  const onChangePassword = (name, value) =>
    setData({...data, [name]: String(value)});

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <BackHeader title={t('login.createAccount')} />
      {/* <View style={[styles.header]}>
        <View style={{flex: 1 / 2}}>
          <Image
            style={[{width: 30, height: 30}]}
            source={require('../../../assests/images/back_arrow.png')}
          />
        </View>
        <Spacing size={5} />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 18,
              color: Colors.black,
            }}>
            Create Account
          </Text>
        </View>
        <View style={{flex: 1 / 2}} />
      </View> */}
      <View style={{flex: 1, padding: 18}}>
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            color: Colors.black,
            fontSize: 14,
          }}>
          {/* Name* */}
          {t('common.name')}*
        </Text>
        <Spacing size={5} />
        <WhiteTextBox
          value={data.value}
          onChangeText={onChangeEnterName}
          name={'name'}
          placeholder={t('login.enterYourName')}
        />

        <Spacing />
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            color: Colors.black,
            fontSize: 14,
          }}>
          {t('common.mobileNumber')}*
        </Text>
        <Spacing size={5} />
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
          value={data.phone}
          onChangeText={onChangeEnterMobileNumber}
          placeholder={t('login.enterMobileNumber')}
        />
        <Spacing />
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            color: Colors.black,
            fontSize: 14,
          }}>
          {t('common.emailId')} *
        </Text>
        <Spacing size={5} />
        <WhiteTextBox
          name="email"
          value={data.email}
          onChangeText={onChangeEmail}
          placeholder={t('login.enterEmailId')}
        />
        <Spacing />
        <View style={[commonStyles.rowAlignCenter]}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              color: Colors.black,
              fontSize: 14,
            }}>
            {t('common.password')} *
          </Text>
          <Spacing size={2} />
          <View>
            <Tooltip
              isVisible={toolTipVisible}
              contentStyle={{padding: 0, backgroundColor: Colors.yellowColor}}
              onClose={() => setTooltipVisible(false)}
              content={
                <View
                  style={{backgroundColor: Colors.yellowColor, padding: 10}}>
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
                    <Text
                      style={{
                        color: Colors.black,
                      }}>
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
                    <Text style={{color: Colors.black}}>
                      Password should contain atleast 1 Capital letter and 1
                      small letter.
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
                    <Text style={{color: Colors.black}}>
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
                    <Text style={{color: Colors.black}}>
                      Password should contain a number.
                    </Text>
                  </View>
                  <Spacing size={5} />
                </View>
              }
              placement="top">
              <TouchableWithoutFeedback onPress={() => setTooltipVisible(true)}>
                <Info />
              </TouchableWithoutFeedback>
            </Tooltip>
          </View>
          {/* <Image
            style={{tintColor: Colors.yellowColor}}
            source={require('../../../assests/icons/info.png')}
          /> */}
        </View>
        <Spacing size={5} />
        <WhiteTextBox
          action="password"
          name="password"
          value={data.password}
          onChangeText={onChangePassword}
          actionStyles={{tintColor: '#ddd'}}
        />
        <Spacing />

        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            color: Colors.black,
            fontSize: 14,
          }}>
          {t('common.uploadVisitingCard')}
        </Text>
        <Spacing size={5} />
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback onPress={takeForntPhoto}>
            {!forntImage ? (
              <View
                style={{
                  borderRadius: 8,
                  padding: 15,
                  backgroundColor: '#E6E6E6',
                  // flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: (SCREEN_WIDTH - 40) / 2,
                  height: 100,
                  // borderWidth: 1,
                  // borderColor: '#707070',
                }}>
                <VisitingCard width={36} height={31} />
                <Spacing />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: typography.poppinsRegular,
                    color: '#707070',
                  }}>
                  Front
                </Text>
              </View>
            ) : (
              <Image
                style={{
                  width: (SCREEN_WIDTH - 40) / 2,
                  height: 100,
                }}
                source={{uri: forntImage}}
              />
            )}
          </TouchableWithoutFeedback>
          <Spacing />
          <TouchableWithoutFeedback onPress={takeBackPhoto}>
            {!backImage ? (
              <View
                style={{
                  borderRadius: 8,
                  padding: 15,
                  backgroundColor: '#E6E6E6',
                  // flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: (SCREEN_WIDTH - 40) / 2,
                  height: 100,
                  // borderWidth: 1,
                  // borderColor: '#707070',
                }}>
                <VisitingCard width={36} height={31} />
                <Spacing />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: typography.poppinsRegular,
                    color: '#707070',
                  }}>
                  Front
                </Text>
              </View>
            ) : (
              <Image
                style={{
                  width: (SCREEN_WIDTH - 40) / 2,
                  height: 100,
                }}
                source={{uri: backImage}}
              />
            )}
          </TouchableWithoutFeedback>
        </View>

        <Spacing />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <CheckBox onPress={() => {}} />
          </View>
          <Spacing size={5} />
          <Text style={{flex: 1, color: Colors.black, fontSize: 12}}>
            I agree to the{' '}
            <Text style={{color: '#663C2F'}}> Terms and conditions</Text> and{' '}
            <Text style={{color: '#663C2F'}}>Privacy Policy.</Text>
            {/* {t('login.agreeTermsAndCondition')} */}
          </Text>
        </View>
        <Spacing />
        <TakeSpace />
        <Button
          onPress={() => {
            goToVerify();
          }}
          title={t('common.proceed')}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
