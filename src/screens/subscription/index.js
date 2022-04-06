import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import typography from '../../utility/typography';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import Spacing from '../../components/spacing';
import commonStyles from '../../utility/commonStyles';
import useLocalization from '../../hooks/useLocalization';
import Rupee from '../../svg/Rupee';

export default function Subscription() {
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 15}}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../../assests/images/back_arrow.png')}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <Image
            style={{
              width: SCREEN_WIDTH / 2,
              height: ((SCREEN_WIDTH / 2) * 38) / 138,
            }}
            source={require('../../../assests/images/bg_four.png')}
          />
        </View>
        <Text
          style={{
            fontFamily: typography.poppinsMedium,
            fontSize: 30,
            color: Colors.black,
            flex: 1,
          }}>
          {/* Subscriptions */}
          {t('common.subscription')}
        </Text>
        <View>
          <Image
            style={{width: 30, height: 30}}
            resizeMode="contain"
            source={require('../../../assests/images/subscription_logo.png')}
          />
        </View>
        <Spacing size={5} />
      </View>
      <Spacing />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
        }}>
        <ScrollView>
          <Spacing size={10} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: Colors.black}}>1 Month</Text>
              <Spacing size={5} />
              <View
                style={{
                  width: 15,
                  borderRadius: 10,
                  height: 5,
                  backgroundColor: Colors.redColor,
                }}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: Colors.black}}>3 Months</Text>
              <Spacing size={5} />
              <View
                style={{
                  width: 15,
                  borderRadius: 10,
                  height: 5,
                  // backgroundColor: Colors.redColor,
                }}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: Colors.black}}>6 Months</Text>
              <Spacing size={5} />
              <View
                style={{
                  width: 15,
                  borderRadius: 10,
                  height: 5,
                  // backgroundColor: Colors.redColor,
                }}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{color: Colors.black}}>12 Months</Text>
              <Spacing size={5} />
              <View
                style={{
                  width: 15,
                  borderRadius: 10,
                  height: 5,
                  // backgroundColor: Colors.redColor,
                }}
              />
            </View>
          </View>
          <Spacing size={15} />
          <View style={{paddingHorizontal: 15}}>
            <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
            <Spacing size={15} />
            <View style={{alignSelf: 'center'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 20,
                  elevation: 5,
                  borderRadius: 20,
                  width: 250,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <Rupee />
                  <Spacing size={2} />
                  <Text
                    style={{
                      fontFamily: typography.poppinsMedium,
                      fontSize: 25,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    150
                  </Text>
                </View>
                <Spacing size={2} />
                <Text
                  style={{
                    fontFamily: typography.poppinsRegular,
                    fontSize: 12,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Starter Plan
                </Text>
              </View>
            </View>
            <Spacing size={15} />
            <View
              style={[commonStyles.rowAlignCenter, {justifyContent: 'center'}]}>
              <View
                style={{
                  width: 80,
                  height: 2,
                  backgroundColor: Colors.black,
                }}></View>
              <Spacing size={10} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 16,
                  color: Colors.black,
                }}>
                Benefits
              </Text>
              <Spacing size={10} />
              <View
                style={{
                  width: 60,
                  height: 2,
                  backgroundColor: Colors.black,
                }}></View>
              <Spacing size={10} />
              <View
                style={{
                  width: 10,
                  height: 2,
                  backgroundColor: Colors.redColor,
                }}></View>
            </View>
            <Spacing size={10} />
            <View style={[commonStyles.rowAlignCenter]}>
              <Image
                style={{width: 20, height: 14}}
                resizeMode="contain"
                source={require('../../../assests/icons/tick.png')}
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                  flex: 1,
                }}>
                Browse through the products and raise an enquiry for packaging
                solutions.
              </Text>
              <Spacing size={5} />
            </View>
            <Spacing size={10} />
            <View style={[commonStyles.rowAlignCenter]}>
              <Image
                style={{width: 20, height: 14}}
                resizeMode="contain"
                source={require('../../../assests/icons/tick.png')}
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                  flex: 1,
                }}>
                Packaging solution based on Conventional, Cost effective, and
                Sustainable structure.
              </Text>
              <Spacing size={5} />
            </View>
            <Spacing size={10} />
            <View style={[commonStyles.rowAlignCenter]}>
              <Image
                style={{width: 20, height: 14}}
                resizeMode="contain"
                source={require('../../../assests/icons/tick.png')}
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                  flex: 1,
                }}>
                Multiple vendor Quotations with Vendor details inducing location
                and price.
              </Text>
              <Spacing size={5} />
            </View>

            <Spacing size={10} />
            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                fontSize: 12,
                color: Colors.black,
                textAlign: 'center',
              }}>
              Terms and conditions Apply
            </Text>

            <Spacing size={10} />

            <View style={{paddingHorizontal: 10}}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: Colors.brownColor,
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 16,
                    fontFamily: typography.poppinsRegular,
                  }}>
                  Subscribe
                </Text>
              </View>
            </View>
            <Spacing size={10} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
