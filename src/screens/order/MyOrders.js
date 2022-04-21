import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import useLocalization from '../../hooks/useLocalization';
import commonStyles from '../../utility/commonStyles';
import Rupee from '../../svg/Rupee';

export default function MyOrders({navigation}) {
  const t = useLocalization();
  const [tabNumber, setTabNumber] = React.useState(0);

  return (
    <View style={{flex: 1}}>
      <BackHeader title={t('common.myOrders')} />
      <Spacing size={10} />
      <View style={{flex: 1}}>
        {/*  */}
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback onPress={() => setTabNumber(0)}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 14,
                  color: Colors.black,
                }}>
                Ongoing Orders
              </Text>
              <Spacing size={8} />
              {tabNumber == 0 && (
                <View
                  style={{
                    backgroundColor: Colors.brownColor,
                    width: '100%',
                    height: 2,
                  }}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setTabNumber(1)}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 14,
                  color: Colors.black,
                }}>
                Completed Orders
              </Text>
              <Spacing size={8} />

              {tabNumber == 1 && (
                <View
                  style={{
                    backgroundColor: Colors.brownColor,
                    width: '100%',
                    height: 2,
                  }}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
        {/*  */}
        <View style={{flex: 1}}>
          {tabNumber == 0 && (
            <View style={{flex: 1, padding: 10}}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('OrderDetails')}>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    padding: 10,
                  }}>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: typography.poppinsMedium,
                        color: Colors.black,
                      }}>
                      Dried & dehydrated food Products
                    </Text>
                    <Spacing size={5} />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{backgroundColor: '#F4F4F4', padding: 5}}>
                        <Text
                          style={{
                            fontFamily: typography.poppinsRegular,
                            fontSize: 12,
                            color: Colors.black,
                          }}>
                          #PAC000654
                        </Text>
                      </View>
                      <View style={{flex: 1}} />
                      <View style={[commonStyles.rowAlignCenter]}>
                        <Rupee />
                        <Spacing size={5} />
                        <Text
                          style={{
                            fontFamily: typography.poppinsMedium,
                            fontSize: 16,
                            color: Colors.black,
                          }}>
                          116000
                        </Text>
                      </View>
                    </View>
                    <Spacing size={5} />
                    <View
                      style={{
                        backgroundColor: '#ddd',
                        width: '100%',
                        height: 1,
                      }}
                    />

                    <View style={[commonStyles.rowAlignCenter, {padding: 15}]}>
                      <Image
                        style={{width: 30, height: 30}}
                        source={require('../../../assests/images/enquiry_icon.png')}
                      />
                      <Spacing />
                      <Text
                        style={{
                          fontFamily: typography.poppinsRegular,
                          fontSize: 14,
                          flex: 1,
                          color: '#4C4C4C',
                        }}>
                        15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL
                      </Text>
                    </View>

                    <Spacing size={5} />
                    <View style={[commonStyles.rowBetween]}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                          flex: 1,
                        }}>
                        Payment Status :{' '}
                        <Text style={{color: Colors.black}}>Paid</Text>
                      </Text>
                      <Spacing size={10} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                          flex: 1,
                          textAlign: 'right',
                        }}>
                        Delivery Status :{' '}
                        <Text style={{color: Colors.black}}>Pending</Text>
                      </Text>
                    </View>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontFamily: typography.poppinsRegular,
                        fontSize: 12,
                        color: Colors.black,
                      }}>
                      15-03-22 10:12 AM
                    </Text>
                  </View>
                  {/* <Spacing /> */}
                </View>
              </TouchableWithoutFeedback>

              <Spacing />
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('OrderDetails')}>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    padding: 10,
                  }}>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: typography.poppinsMedium,
                        color: Colors.black,
                      }}>
                      Dried & dehydrated food Products
                    </Text>
                    <Spacing size={5} />
                    <View style={{flexDirection: 'row'}}>
                      <View style={{backgroundColor: '#F4F4F4', padding: 5}}>
                        <Text
                          style={{
                            fontFamily: typography.poppinsRegular,
                            fontSize: 12,
                            color: Colors.black,
                          }}>
                          #PAC000654
                        </Text>
                      </View>
                      <View style={{flex: 1}} />
                      <View style={[commonStyles.rowAlignCenter]}>
                        <Rupee />
                        <Spacing size={3} />
                        <Text
                          style={{
                            fontFamily: typography.poppinsMedium,
                            fontSize: 16,
                            color: Colors.black,
                          }}>
                          116000
                        </Text>
                      </View>
                    </View>
                    <Spacing size={5} />
                    <View
                      style={{
                        backgroundColor: '#ddd',
                        width: '100%',
                        height: 1,
                      }}
                    />

                    <View style={[commonStyles.rowAlignCenter, {padding: 15}]}>
                      <Image
                        style={{width: 30, height: 30}}
                        source={require('../../../assests/images/enquiry_icon.png')}
                      />
                      <Spacing />
                      <Text
                        style={{
                          fontFamily: typography.poppinsRegular,
                          fontSize: 14,
                          flex: 1,
                          color: '#4C4C4C',
                        }}>
                        15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL
                      </Text>
                    </View>

                    <Spacing size={5} />
                    <View style={[commonStyles.rowBetween]}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                          flex: 1,
                        }}>
                        Payment Status :{' '}
                        <Text style={{color: Colors.black}}>Paid</Text>
                      </Text>
                      <Spacing size={10} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                          flex: 1,
                          textAlign: 'right',
                        }}>
                        Delivery Status :{' '}
                        <Text style={{color: Colors.black}}>Pending</Text>
                      </Text>
                    </View>
                    <Text
                      style={{
                        textAlign: 'right',
                        fontFamily: typography.poppinsRegular,
                        fontSize: 12,
                        color: Colors.black,
                      }}>
                      15-03-22 10:12 AM
                    </Text>
                  </View>
                  {/* <Spacing /> */}
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}

          {tabNumber == 1 && (
            <View style={{flex: 1}}>
              <Text>Tab 2</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
