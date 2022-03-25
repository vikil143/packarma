import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import useLocalization from '../../hooks/useLocalization';

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
                      <View style={{}}>
                        <Text
                          style={{
                            fontFamily: typography.poppinsRegular,
                            fontSize: 16,
                            color: Colors.black,
                          }}>
                          116000
                        </Text>
                      </View>
                    </View>
                    <Spacing size={5} />
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                        }}>
                        Payment Status : <Text>Paid</Text>
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                        }}>
                        Delivery Status : <Text>Pending</Text>
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
                    <View style={{}}>
                      <Text
                        style={{
                          fontFamily: typography.poppinsRegular,
                          fontSize: 16,
                          color: Colors.black,
                        }}>
                        116000
                      </Text>
                    </View>
                  </View>
                  <Spacing size={5} />
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: typography.poppinsRegular,
                        color: Colors.black,
                      }}>
                      Payment Status : <Text>Paid</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: typography.poppinsRegular,
                        color: Colors.black,
                      }}>
                      Delivery Status : <Text>Pending</Text>
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
