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
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import typography from '../../utility/typography';
import VisitingCard from '../../svg/VisitingCards';

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
          {t('common.emailId')} *
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
          <Spacing />
          <View
            style={{
              borderRadius: 8,
              padding: 15,
              backgroundColor: '#E6E6E6',
              width: '100%',
              flex: 1,
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
              Back
            </Text>
          </View>
        </View>

        <Spacing />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <CheckBox />
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
            crashlytics().log('NAVIGATE TO VERIFY SCREEN...');
            navigation.navigate('Verify');
          }}
          title={t('common.proceed')}></Button>
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
