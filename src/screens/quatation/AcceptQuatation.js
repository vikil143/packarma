import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import UpArrow from '../../svg/UpArrow';
import DownArrow from '../../svg/DownArrow';
import commonStyles from '../../utility/commonStyles';

export default function AcceptQuatation({navigation}) {
  const [collapuse, setCollapuse] = useState(false);
  const [collapuseVD, setCollapuseVD] = useState(false);
  const [collapuseBD, setCollapuseBD] = useState(false);
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Accept Quotation'} />
      <View style={{flex: 1}}>
        <ScrollView>
          <Spacing />
          {/* Collapuse View */}
          <TouchableWithoutFeedback onPress={() => setCollapuse(!collapuse)}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Colors.white,
                padding: 15,
                alignItems: 'center',
                elevation: 5,
              }}>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 16,
                  flex: 1,
                  paddingHorizontal: 10,
                  color: Colors.black,
                }}>
                Product Details
              </Text>
              {collapuse ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuse ? (
            <View style={{backgroundColor: Colors.white, padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Category
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    Food
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Product
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    Dried & dehydrated Products
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Product Wt.
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    200 Kg
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Self Life
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    180 Days
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Storage Conditions
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    Relative humidity
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Machine
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    German
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Product Form
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    Solid
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Packaging Type
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={{color: Colors.black}}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                    }}>
                    Primary
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Treatments
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    Gamma/E-beam Sterilisation
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Location
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    401107
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          <Spacing />

          {/* Collapuse View */}
          <TouchableWithoutFeedback
            onPress={() => setCollapuseVD(!collapuseVD)}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Colors.white,
                padding: 15,
                alignItems: 'center',
                elevation: 5,
              }}>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 16,
                  flex: 1,
                  paddingHorizontal: 10,
                  color: Colors.black,
                }}>
                Vendor Details
              </Text>
              {collapuseVD ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuseVD ? (
            <View style={{backgroundColor: Colors.white, padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Vendor
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    Packarma Private Limited
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Ship From
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    Mumbai, Maharashtra
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          <Spacing />

          {/* Collapuse View */}
          <TouchableWithoutFeedback
            onPress={() => setCollapuseBD(!collapuseBD)}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Colors.white,
                padding: 15,
                alignItems: 'center',
                elevation: 5,
              }}>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 16,
                  flex: 1,
                  paddingHorizontal: 10,
                  color: Colors.black,
                }}>
                Billing Details
              </Text>
              {collapuseBD ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuseBD ? (
            <View style={{backgroundColor: Colors.white, padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Quantity
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    102/Kg
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Rate
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    12000
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Taxes and Fee
                  </Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    12000
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          <View style={[commonStyles.flexOne]} />

          <TouchableWithoutFeedback
            onPress={() => {
              crashlytics().log('NAVIGATE TO SELECT ADDRESS SCRREN...');
              navigation.navigate('SelectAddress');
            }}>
            <View
              style={{
                backgroundColor: Colors.brownColor,
                padding: 12,
                paddingHorizontal: 20,
                margin: 10,
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  textAlign: 'center',
                  borderRadius: 10,
                  fontFamily: typography.poppinsRegular,
                  fontSize: 16,
                  borderRadius: 12,
                }}>
                Proceed to Checkout
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
