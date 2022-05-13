import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Spacing from '../../components/spacing';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import typography from '../../utility/typography';
import {Colors, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utility/constants';
import BackHeader from '../../components/back-header';
import Search from '../../components/search/SearchOnTap';
import HomeCare from '../../svg/HomeCare';

export default function Category({navigation}) {
  const [open, setOpen] = useState(false);
  const [treatmentSheet, setTreatMentSheet] = useState(false);
  const [treatmentDetails, setTreatmentDetails] = useState(false);

  return (
    <View style={{}}>
      <BottomSheet
        show={open}
        style={{
          height: SCREEN_HEIGHT / 1.8,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        }}
        hide={() => setOpen(false)}>
        <ScrollView>
          <View style={{padding: 20, paddingBottom: 10}}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{width: 60, height: 55}}
                source={require('../../../assests/images/products.png')}
              />
            </View>
            <Spacing size={10} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: typography.poppinsMedium,
                color: Colors.black,
                textAlign: 'center',
              }}>
              Dried & dehydrated food Products
            </Text>
            <Spacing size={2} />
            <Text style={{textAlign: 'center', color: Colors.black}}>Food</Text>
            <Spacing size={5} />
            <View
              style={{
                height: 1,
                backgroundColor: Colors.greyColor,
                width: '100%',
              }}
            />

            <Spacing size={5} />
            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                color: Colors.black,
              }}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans , Grains, dried vegetables, dried
              fruits , processed foods, dried fish and seafood etc
            </Text>
            <Spacing size={5} />
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontFamily: typography.poppinsMedium,
              }}>
              Packaging Treatments
            </Text>

            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                fontSize: 14,
                color: Colors.black,
              }}>
              Aseptic Filling, Gamma / E-beam Sterilisation, Deep freezing{' '}
            </Text>
            <Spacing size={5} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setOpen(false);
                  navigation.navigate('PlaceEnquiry');
                }}>
                <View
                  style={{
                    padding: 20,
                    paddingVertical: 10,
                    backgroundColor: '#663c2f',
                    borderRadius: 5,
                  }}>
                  <Text style={{color: Colors.white}}>Place enquiry</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>

      <View style={{padding: 10}}>
        <Search />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableWithoutFeedback>
            <View style={{padding: 20, paddingHorizontal: 30}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{backgroundColor: Colors.white, elevation: 5}}>
            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <HomeCare width={40} height={40} />
              {/* <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              /> */}
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>
          </View>
        </View>

        <Spacing size={10} />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: typography.poppinsMedium,
                color: Colors.black,
              }}>
              Products
            </Text>
            <Spacing />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      borderRadius: 5,
                    }}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: typography.poppinsRegular,
                      color: Colors.black,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View
                style={{
                  height: '40%',
                  width: 2,
                  backgroundColor: Colors.greyColor,
                }}
              />
              <Spacing size={10} />
              <View>
                <Image
                  style={{
                    width: (SCREEN_WIDTH - 75) / 4,
                    height: (SCREEN_WIDTH - 75) / 4,
                    borderRadius: 10,
                  }}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: typography.poppinsRegular,
                    color: Colors.black,
                    textAlign: 'center',
                  }}>
                  Beverages
                </Text>
              </View>
            </View>
            <Spacing size={80} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
