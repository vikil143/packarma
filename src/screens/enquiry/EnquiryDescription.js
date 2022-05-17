import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import useLocalization from '../../hooks/useLocalization';
import BackHeader from '../../components/back-header';
import DownArrow from '../../svg/DownArrow';
import UpArrow from '../../svg/UpArrow';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';
import Info from '../../svg/Info';
import Tooltip from 'react-native-walkthrough-tooltip';
import commonStyles from '../../utility/commonStyles';
import EnquiryIcon from '../../svg/EnquiryIcon';

export default function EnquiryDescription({navigation}) {
  const [collapuse, setCollapuse] = useState(true);
  const [toolTipVisible, setTooltipVisible] = useState(false);
  const [nextTooltip, setNextTooltip] = useState(false);
  const [collapusePS, setCollapusePS] = useState(false);
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
      <BackHeader title={t('common.requestDescription')} />
      <View style={{flex: 1}}>
        <ScrollView>
          {/* Collapuse View */}
          <TouchableWithoutFeedback onPress={() => setCollapuse(!collapuse)}>
            <View style={[styles.cardContainer]}>
              <Text style={[styles.cardText]}>Product Details</Text>
              {collapuse ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuse ? (
            <View style={[styles.collapuseContainer]}>
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
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
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
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
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
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
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
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
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
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
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
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
                    Shelf Life
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
                    401107
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <View style={{padding: 20}}>
            <Text
              style={{
                fontFamily: typography.poppinsMedium,
                fontSize: 16,
                color: Colors.black,
              }}>
              Packaging Solutions
            </Text>
            <Spacing size={5} />
            <View
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: Colors.white,
                elevation: 5,
              }}>
              <View style={[commonStyles.row]}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsMedium,
                    color: Colors.black,
                    flex: 1,
                  }}>
                  Conventional structure
                </Text>

                <Tooltip
                  isVisible={toolTipVisible}
                  contentStyle={{
                    padding: 0,
                    backgroundColor: Colors.yellowColor,
                  }}
                  onClose={() => setTooltipVisible(false)}
                  content={
                    <View
                      style={{
                        backgroundColor: Colors.yellowColor,
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: typography.poppinsMedium,
                          fontSize: 14,
                          color: Colors.black,
                        }}>
                        Properties :
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Water vapor transmission rate (WVTR) :{' '}
                          <Text style={{color: Colors.black}}>g/m2/24 hr</Text>
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Oxygen transmission rate (OTR) :{' '}
                          <Text style={{color: Colors.black}}>cc/m2/24 hr</Text>
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Coefficient of friction (COF) :0.00-1.00
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
                          Seal Initiation Temperature (SIT):{' '}
                          <Text style={{color: Colors.black}}>5N/24mm</Text>
                        </Text>
                      </View>
                      <Spacing size={5} />
                    </View>
                  }
                  placement="top">
                  <TouchableWithoutFeedback
                    onPress={() => setTooltipVisible(true)}>
                    <Info />
                  </TouchableWithoutFeedback>
                </Tooltip>
              </View>

              <Spacing size={5} />
              <View style={{flexDirection: 'row'}}>
                <View>
                  <View>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../assests/images/enquiry_icon.png')}
                    />
                  </View>
                </View>
                <Spacing size={10} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    flex: 1,
                  }}>
                  15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL
                </Text>
              </View>

              <Spacing size={5} />
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsMedium,
                    color: Colors.black,
                  }}>
                  Shelf Life :{' '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    180 Days
                  </Text>
                </Text>
              </View>
            </View>

            <Spacing size={10} />

            <View
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: Colors.white,
                elevation: 5,
              }}>
              <View style={[commonStyles.row]}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsMedium,
                    color: Colors.black,
                    flex: 1,
                  }}>
                  Conventional structure
                </Text>

                <Tooltip
                  isVisible={nextTooltip}
                  contentStyle={{
                    padding: 0,
                    backgroundColor: Colors.yellowColor,
                  }}
                  onClose={() => setNextTooltip(false)}
                  content={
                    <View
                      style={{
                        backgroundColor: Colors.yellowColor,
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: typography.poppinsMedium,
                          fontSize: 14,
                        }}>
                        Properties :
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Water vapor transmission rate (WVTR) :{' '}
                          <Text style={{color: Colors.black}}>g/m2/24 hr</Text>
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Oxygen transmission rate (OTR) :{' '}
                          <Text style={{color: Colors.black}}>cc/m2/24 hr</Text>
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
                        <Text style={{flex: 1, color: Colors.black}}>
                          Coefficient of friction (COF) :0.00-1.00
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
                          Seal Initiation Temperature (SIT):{' '}
                          <Text style={{color: Colors.black}}>5N/24mm</Text>
                        </Text>
                      </View>
                      <Spacing size={5} />
                    </View>
                  }
                  placement="top">
                  <TouchableWithoutFeedback
                    onPress={() => setNextTooltip(true)}>
                    <Info />
                  </TouchableWithoutFeedback>
                </Tooltip>
              </View>

              <Spacing size={5} />
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../assests/images/enquiry_icon.png')}
                  />
                </View>
                <Spacing size={10} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    flex: 1,
                  }}>
                  15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL
                </Text>
              </View>

              <Spacing size={5} />
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsMedium,
                    color: Colors.black,
                  }}>
                  Shelf Life :{' '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    180 Days
                  </Text>
                </Text>
              </View>
            </View>

            <Spacing size={10} />

            <Text
              style={{
                fontFamily: typography.poppinsMedium,
                fontSize: 16,
                color: Colors.black,
              }}>
              Quotations {'('}3{')'}
            </Text>
            <Spacing size={5} />

            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 10,
              }}>
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Vendor {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    Packarma Private Limited
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Ship From {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    Mumbai, Maharashtra
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Rate/kg {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    102
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#ddd',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AcceptQuataion')}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: Colors.black}}>Accept</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{width: 2, height: '100%', backgroundColor: '#ddd'}}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: Colors.black}}>Reject</Text>
                </View>
              </View>
            </View>

            <Spacing size={10} />

            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 10,
              }}>
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Vendor {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    Packarma Private Limited
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Ship From {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    Mumbai, Maharashtra
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: typography.poppinsMedium,
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  Rate/kg {'   '} :{'   '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    102
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#ddd',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('AcceptQuataion')}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: Colors.black}}>Accept</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{width: 2, height: '100%', backgroundColor: '#ddd'}}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: Colors.black}}>Reject</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryView: {flex: 0.65},
  collapuseContainer: {backgroundColor: Colors.white, padding: 15},
  cardText: {
    fontFamily: typography.poppinsMedium,
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 10,
    color: Colors.black,
  },
  blackColor: {color: Colors.black},
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },
});
