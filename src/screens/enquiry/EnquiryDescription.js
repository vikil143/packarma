import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
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

export default function EnquiryDescription() {
  const [collapuse, setCollapuse] = useState(true);
  const [toolTipVisible, setTooltipVisible] = useState(false);
  const [nextTooltip, setNextTooltip] = useState(false);
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Enquiry Description'} />
      <View style={{flex: 1}}>
        <ScrollView>
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
                        <Text style={{flex: 1}}>
                          Water vapor transmission rate (WVTR) :{' '}
                          <Text>g/m2/24 hr</Text>
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
                        <Text style={{flex: 1}}>
                          Oxygen transmission rate (OTR) :{' '}
                          <Text>cc/m2/24 hr</Text>
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
                        <Text style={{flex: 1}}>
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
                        <Text>
                          Seal Initiation Temperature (SIT):{' '}
                          <Text>5N/24mm</Text>
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
                  Self Life :{' '}
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
                        <Text style={{flex: 1}}>
                          Water vapor transmission rate (WVTR) :{' '}
                          <Text>g/m2/24 hr</Text>
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
                        <Text style={{flex: 1}}>
                          Oxygen transmission rate (OTR) :{' '}
                          <Text>cc/m2/24 hr</Text>
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
                        <Text style={{flex: 1}}>
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
                        <Text>
                          Seal Initiation Temperature (SIT):{' '}
                          <Text>5N/24mm</Text>
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
                  Self Life :{' '}
                  <Text style={{fontFamily: typography.poppinsRegular}}>
                    180 Days
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
