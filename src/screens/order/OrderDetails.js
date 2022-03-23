import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useContext, useState} from 'react';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import BackHeader from '../../components/back-header';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import commonStyles from '../../utility/commonStyles';
import Spacing from '../../components/spacing';
import {LocalizationContext} from '../../context/Localization';
import UpArrow from '../../svg/UpArrow';
import DownArrow from '../../svg/DownArrow';
import Info from '../../svg/Info';
import useLocalization from '../../hooks/useLocalization';

export default function OrderDetails() {
  const t = useLocalization();
  const [collapusePD, setCollapusePD] = useState(false);
  const [collapusePS, setCollapusePS] = useState(false);
  const [collapuseVD, setCollapuseVD] = useState(false);
  const [collapuseBD, setCollapuseBD] = useState(false);
  const [collapuseA, setCollapuseA] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);

  return (
    <View style={{flex: 1}}>
      <BackHeader title={t('common.orderDetails')} />
      <BottomSheet show={bottomSheet} hide={() => setBottomSheet(false)}>
        <View
          style={[
            {
              backgroundColor: Colors.white,
              padding: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          ]}>
          <Spacing size={10} />
          <View>
            <Text
              style={[
                {
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: typography.poppinsMedium,
                  color: Colors.black,
                },
              ]}>
              Rate us
            </Text>
          </View>
          <Spacing size={10} />
          <View style={{alignSelf: 'center'}}>
            <Image
              style={{width: 250, height: 60}}
              resizeMode="contain"
              source={require('../../../assests/images/stars.png')}
            />
          </View>
          <Spacing size={10} />
          <View
            style={{
              backgroundColor: '#E4E4E4',
              padding: 10,
              borderRadius: 10,
              height: 150,
            }}>
            <Text style={{color: Colors.black}}>Write your feedback here…</Text>
          </View>
          <Spacing size={10} />

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: Colors.brownColor,
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff'}}>Send Feedback</Text>
            </View>
          </View>
        </View>
      </BottomSheet>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{padding: 15, backgroundColor: Colors.white}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#F4F4F4',
                  padding: 8,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                  }}>
                  #PAC000654
                </Text>
              </View>
              <View style={{flex: 1}} />
              <View style={[commonStyles.rowAlignCenter]}>
                <Image
                  style={{width: 12, height: 12}}
                  resizeMode="contain"
                  source={require('../../../assests/icons/rupee.png')}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsMedium,
                    color: Colors.black,
                  }}>
                  11600
                </Text>
              </View>
            </View>
            <Text style={{fontSize: 12, fontFamily: typography.poppinsRegular}}>
              {'  '}Order Placed On : 15-03-22 10:12 AM
            </Text>
            <View style={[commonStyles.rowAlignCenter]}>
              <Text
                style={{fontFamily: typography.poppinsRegular, fontSize: 14}}>
                {'  '}Payment :{' '}
              </Text>
              <Spacing />
              <View
                style={{
                  padding: 5,
                  backgroundColor: '#F4F4F4',
                  paddingHorizontal: 20,
                  borderRadius: 8,
                }}>
                <Text>{t('common.paid')}</Text>
              </View>
              <View style={[commonStyles.flexOne]} />
              <Text
                style={{fontFamily: typography.poppinsRegular, fontSize: 14}}>
                {'  '}Delivery :{' '}
              </Text>
              <Spacing />
              <View
                style={{
                  padding: 5,
                  backgroundColor: '#F4F4F4',
                  paddingHorizontal: 20,
                  borderRadius: 8,
                }}>
                <Text>Paid</Text>
              </View>
            </View>
          </View>
          <Spacing />
          {/* Collapuse View */}
          <TouchableWithoutFeedback
            onPress={() => setCollapusePD(!collapusePD)}>
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
              {collapusePD ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapusePD ? (
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
                  <Text>:</Text>
                </View>
                <Spacing size={5} />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
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
            onPress={() => setCollapusePS(!collapusePS)}>
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
                Packaging Solutions
              </Text>
              {collapusePD ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapusePS ? (
            <View style={{backgroundColor: Colors.white, padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Conventional structure
                  </Text>
                </View>
                <View style={[commonStyles.flexOne]} />
                <Info />
              </View>
              <Spacing size={10} />
              <View style={[commonStyles.rowAlignCenter]}>
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
              <Spacing />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: typography.poppinsMedium,
                  color: Colors.black,
                }}>
                Self Life :{' '}
                <Text
                  style={{fontSize: 14, fontFamily: typography.poppinsRegular}}>
                  30 Days
                </Text>
              </Text>
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

          <Spacing />

          {/* Collapuse View */}
          <TouchableWithoutFeedback onPress={() => setCollapuseA(!collapuseA)}>
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
                Address
              </Text>
              {collapuseA ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuseA ? (
            <View style={{backgroundColor: Colors.white, padding: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    Rakesh Shetty
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View
                  style={{
                    backgroundColor: '#ddd',
                    padding: 2,
                    paddingHorizontal: 10,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    Shipping
                  </Text>
                </View>
              </View>
              <Spacing size={5} />
              <View>
                <Text
                  style={{fontFamily: typography.poppinsRegular, fontSize: 14}}>
                  A 204, Gardenea Heights Kanakia Road, Santacruz - East,
                  Mumbai, Maharashtra -400055 Mob : +91 543672993
                </Text>
              </View>

              <Spacing size={5} />
              <View style={{flexDirection: 'row'}}>
                <View style={{}}>
                  <Text
                    style={{
                      fontFamily: typography.poppinsRegular,
                      fontSize: 14,
                      color: Colors.black,
                    }}>
                    XYX Company Pvt. Ltd.
                  </Text>
                </View>
                <View style={{flex: 1}} />
                <View
                  style={{
                    backgroundColor: '#ddd',
                    padding: 2,
                    paddingHorizontal: 10,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                    }}>
                    Billing
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{fontFamily: typography.poppinsRegular, fontSize: 14}}>
                  A 204, Gardenea Heights Kanakia Road, Santacruz - East,
                  Mumbai, Maharashtra -400055 Mob : +91 543672993
                </Text>
              </View>
            </View>
          ) : (
            <View></View>
          )}

          <Spacing />
          <View style={{padding: 10}}>
            <TouchableWithoutFeedback onPress={() => setBottomSheet(true)}>
              <View
                style={{
                  backgroundColor: Colors.brownColor,
                  padding: 8,
                  paddingHorizontal: 15,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: typography.poppinsRegular,
                    textAlign: 'center',
                  }}>
                  {t('common.cancelOrder')}
                  {/* Cancel Order */}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Spacing />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
