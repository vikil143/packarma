import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
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
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function Register({navigation}) {
  const [toolTipVisible, setTooltipVisible] = React.useState(false);
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
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
        <WhiteTextBox placeholder={t('login.enterYourName')} />

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
          placeholder={t('login.enterMobileNumber')}
        />
        <Spacing />
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            color: Colors.black,
            fontSize: 14,
          }}>
          {t('common.emailId')}
        </Text>
        <Spacing size={5} />
        <WhiteTextBox placeholder={t('login.enterEmailId')} />
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
        <WhiteTextBox action="password" actionStyles={{tintColor: '#ddd'}} />
        <Spacing />
        <View style={{flexDirection: 'row'}}>
          <View>
            <CheckBox />
          </View>
          <Spacing size={5} />
          <Text style={{flex: 1, color: Colors.black}}>
            {/* I agree to the Terms and conditions and Privacy Policy. */}
            {t('login.agreeTermsAndCondition')}
          </Text>
        </View>
        <Spacing />
        <TakeSpace />
        <Button
          onPress={() => {
            crashlytics().log('NAVIGATE TO VERIFY SCREEN...');
            navigation.navigate('Verify');
          }}
          title={t('common.procced')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
