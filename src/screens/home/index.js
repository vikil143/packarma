import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Search from '../../components/search';
import Spacing from '../../components/spacing';
import PlaceIcon from '../../svg/PlaceIcon';
import QuationsIcon from '../../svg/QuationsIcon';
import QuestionMark from '../../svg/QuestionMark';
import UserIcon from '../../svg/user_icon';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import typography from '../../utility/typography';

const SLIDE_ITEM = SCREEN_WIDTH - 30;

export default function HomeScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  function _renderItem({item, index}) {
    return (
      <View style={{width: '100%'}}>
        <Image
          style={{width: SLIDE_ITEM, height: SLIDE_ITEM * (140 / 349)}}
          source={require('../../../assests/images/carousal_grid.png')}
        />
      </View>
    );
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={[1, 2].length}
        activeDotIndex={activeSlide}
        containerStyle={{
          alignSelf: 'center',
          paddingVertical: 4,
          paddingHorizontal: 2,
          borderRadius: 4,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: -2,
          backgroundColor: Colors.orangeColor,
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgb(228, 228, 228)',
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Search containerStyle={{flex: 1}} />
        <Spacing size={10} />
        <UserIcon />
      </View>
      <ScrollView>
        <View style={{flex: 1, padding: 10}}>
          <View>
            <Carousel
              data={[1, 2]}
              renderItem={_renderItem}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH - 20}
              onSnapToItem={index => setActiveSlide(index)}
            />
          </View>
          <Spacing size={5} />
          {pagination()}
          <Spacing size={10} />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={[{}]}>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                  }}>
                  Food
                </Text>
                <Spacing size={5} />

                {activeItem === 0 ? (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                        backgroundColor: Colors.orangeColor,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                )}
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                  }}>
                  Home Care
                </Text>
                <Spacing size={5} />
                {activeItem === 1 ? (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                        backgroundColor: Colors.orangeColor,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                      }}
                    />
                  </View>
                )}
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                  }}>
                  Personal Care
                </Text>
                <Spacing size={5} />
                {activeItem === 2 ? (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                        backgroundColor: Colors.orangeColor,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                      }}
                    />
                  </View>
                )}
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                  }}>
                  Stationery
                </Text>
                <Spacing size={5} />
                {activeItem === 3 ? (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                        backgroundColor: Colors.orangeColor,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                ) : (
                  <View style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: 20,
                        height: 5,
                      }}
                    />
                  </View>
                )}
              </View>
            </View>
            {/*  */}
            <View>
              <Spacing size={15} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
              </View>

              <Spacing size={10} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
                <View>
                  <Image
                    style={{width: (SCREEN_WIDTH - 75) / 3}}
                    source={require('../../../assests/images/dairy.png')}
                  />
                </View>
              </View>
            </View>

            <Spacing size={10} />

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#D1D1D1',
                  flex: 1,
                  paddingVertical: 10,
                }}>
                <QuestionMark />
                <Spacing size={5} />
                <Text style={{}}>Place Enquiry</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#EDEDED',
                  flex: 1,
                  paddingVertical: 10,
                }}>
                <QuationsIcon />
                <Spacing size={5} />
                <Text style={{color: Colors.black}}>Get Quotations</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: '#D1D1D1',
                  flex: 1,
                  paddingVertical: 10,
                }}>
                <PlaceIcon />
                <Spacing size={5} />
                <Text style={{color: Colors.black}}>Place Order</Text>
              </View>
            </View>

            <Spacing size={10} />
          </View>

          <View
            style={{
              backgroundColor: Colors.white,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: typography.poppinsMedium,
                fontSize: 14,
                color: Colors.black,
              }}>
              Packaging Treatments
            </Text>
            <Text
              style={{
                color: '#EE3F27',
                fontFamily: typography.poppinsMedium,
                fontSize: 12,
              }}>
              More..
            </Text>
          </View>
          <View
            style={{padding: 10, flexDirection: 'row', alignItems: 'flex-end'}}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: typography.poppinsMedium,
                  color: Colors.black,
                }}>
                Need Support ?
              </Text>
              <Spacing size={2} />
              <Text style={{color: Colors.black}}>
                Fill out the form and we will connect with you.
              </Text>
            </View>
            <Spacing size={10} />
            <View style={{}}>
              <Image
                style={{width: 50, height: 50}}
                resizeMode="contain"
                source={require('../../../assests/images/new.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
