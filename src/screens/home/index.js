import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import PlaceIcon from '../../svg/PlaceIcon';
import QuationsIcon from '../../svg/QuationsIcon';
import QuestionMark from '../../svg/QuestionMark';
import UserIcon from '../../svg/user_icon';
import ViewAll from '../../svg/ViewAll';
import Search from '../../components/search/SearchOnTap';
import Spacing from '../../components/spacing';
import {
  getBannerData,
  getCategoryData,
  getProductData,
  getSubCategoryData,
  getTreamentData,
} from '../../reducers/homeData';
import useLocalization from '../../hooks/useLocalization';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import typography from '../../utility/typography';
import api from '../../utility/api';

const SLIDE_ITEM = SCREEN_WIDTH - 30;

function HomeScreen({navigation, dispatch, homeData}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCategoryItem, setActiveCategoryItem] = useState(0);

  const t = useLocalization();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log('#### getdata...');
    getBanner();
    getCategory();
    getTreament();
    getProduct();
    getSubCategory();
  };

  const getSubCategory = () => {
    const subCategoryFormData = {
      search: '',
      sub_category_id: '',
      page_no: '',
      limit: '',
      sub_category_name: '',
    };
    dispatch(getSubCategoryData({data: subCategoryFormData}));
  };

  const getTreament = () => {
    console.log('get Treament Data ...');
    const treamentFormData = {
      search: '',
      treatment_id: '',
      treatment_name: '',
    };

    dispatch(getTreamentData({data: treamentFormData}));
  };

  const getBanner = async () => {
    const bannerFormData = {
      search: '',
      banner_id: '',
      banner_title: '',
    };
    dispatch(getBannerData({data: bannerFormData}));
  };

  const getCategory = () => {
    const categoryFormData = {
      search: '',
      category_id: '',
      page_no: '',
      limit: '',
      category_name: '',
    };
    dispatch(getCategoryData({data: categoryFormData}));
  };

  const getProduct = () => {
    const productFromData = {
      search: '',
      product_id: '',
      page_no: '',
      limit: '',
      product_name: '',
    };

    dispatch(getProductData({data: productFromData}));
  };

  function _renderItem({item, index}) {
    return (
      <View style={{width: '100%', borderRadius: 10}}>
        <Image
          style={{width: SLIDE_ITEM, height: SLIDE_ITEM * (140 / 349)}}
          // source={require('../../../assests/images/carousal_grid.png')}
          source={{uri: item.banner_image}}
        />
      </View>
    );
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={homeData.bannerData.length}
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

  console.log('### render response', homeData.subCategoryData);
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Search
          containerStyle={{flex: 1}}
          onPress={() => navigation.navigate('SearchScreen')}
        />
        <Spacing size={10} />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('MyProfile')}>
          <UserIcon />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{padding: 10}}>
            <Carousel
              data={homeData.bannerData}
              renderItem={_renderItem}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH - 20}
              onSnapToItem={index => setActiveSlide(index)}
            />
          </View>
          <Spacing size={5} />
          {pagination()}
          <Spacing size={10} />
          <View style={{padding: 10}}>
            <ScrollView horizontal>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                {homeData.categoryData.map((item, ind) => {
                  return (
                    <TouchableWithoutFeedback key={`category_${ind}`}>
                      <View style={[{marginRight: 15}]}>
                        <Text
                          style={{
                            color: Colors.black,
                            fontFamily: typography.poppinsRegular,
                            fontSize: 12,
                          }}>
                          {/* {item.category_name} */}
                          Category
                        </Text>
                        <Spacing size={5} />

                        {ind === activeCategoryItem ? (
                          <View style={[{marginRight: 15}]}>
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
                            <Spacing size={5} />

                            {/* {activeItem === 0 ? (
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
                      )} */}
                          </View>
                        ) : (
                          <View style={[{marginRight: 15, width: '100%'}]}>
                            <View style={{alignItems: 'center'}}>
                              <View
                                style={{
                                  width: 20,
                                  height: 5,
                                  borderRadius: 8,
                                }}
                              />
                            </View>
                            <Spacing size={5} />
                          </View>
                        )}
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </ScrollView>
            {/*  */}
            <View>
              {/* <Spacing size={15} /> */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                {homeData.subCategoryData.map((item, index) => {
                  return (
                    <View style={{margin: 5}} key={`sub_${index}`}>
                      <Image
                        style={{
                          width: (SCREEN_WIDTH - 75) / 4,
                          height: (SCREEN_WIDTH - 75) / 4,
                        }}
                        // source={require('../../../assests/images/dairy.png')}
                        source={{uri: item.sub_category_image}}
                      />
                      <Spacing size={5} />
                      <Text
                        style={{
                          color: Colors.black,
                          fontSize: 12,
                          fontFamily: typography.poppinsRegular,
                          textAlign: 'center',
                        }}>
                        {/* Cat */}
                        {item.sub_category_name}
                      </Text>
                    </View>
                  );
                })}
                <View style={{marginLeft: 5}}>
                  <View
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#E4E4E4',
                    }}>
                    <ViewAll />
                  </View>
                  <Spacing size={5} />
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontFamily: typography.poppinsRegular,
                      textAlign: 'center',
                    }}>
                    View All
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                    }}
                    source={require('../../../assests/images/dairy.png')}
                  />
                  <Spacing size={5} />
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontFamily: typography.poppinsRegular,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                    }}
                    source={require('../../../assests/images/dairy.png')}
                  />
                  <Spacing size={5} />
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontFamily: typography.poppinsRegular,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View>
                <View>
                  <Image
                    style={{
                      width: (SCREEN_WIDTH - 75) / 4,
                      height: (SCREEN_WIDTH - 75) / 4,
                    }}
                    source={require('../../../assests/images/dairy.png')}
                  />
                  <Spacing size={5} />
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontFamily: typography.poppinsRegular,
                      textAlign: 'center',
                    }}>
                    Dairy
                  </Text>
                </View> */}
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
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                    fontSize: 12,
                  }}>
                  Place Enquiry
                </Text>
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
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                    fontSize: 12,
                  }}>
                  Get Quotations
                </Text>
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
                <Text
                  style={{
                    color: Colors.black,
                    fontFamily: typography.poppinsMedium,
                    fontSize: 12,
                  }}>
                  Place Order
                </Text>
              </View>
            </View>

            <Spacing size={10} />
          </View>

          <View
            tyle={{
              backgroundColor: Colors.white,
            }}>
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
                {/* Packaging Treatments */}
                {t('descriptions.packagingTreatments')}
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
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                backgroundColor: Colors.white,
                paddingBottom: 15,
              }}>
              {homeData.treamentData.map((item, ind) => {
                return (
                  <View style={{alignItems: 'center'}} key={`treament_${ind}`}>
                    <TouchableWithoutFeedback
                      onPress={() => navigation.navigate('Treatment')}>
                      <View>
                        <Image
                          style={{
                            width: (SCREEN_WIDTH - 60) / 3,
                            height: (SCREEN_WIDTH - 60) / 3,
                            borderRadius: 10,
                          }}
                          // source={require('../../../assests/images/glasses.png')}
                          source={{uri: item.packaging_treatment_image}}
                        />
                        <Spacing size={5} />
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: typography.poppinsRegular,
                            textAlign: 'center',
                            color: Colors.black,
                          }}>
                          {/* Aseptic Filling */}
                          {item.packaging_treatment_name}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                );
              })}
              {/* <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Treatment')}>
                  <View>
                    <Image
                      style={{
                        width: (SCREEN_WIDTH - 60) / 3,
                        height: (SCREEN_WIDTH - 60) / 3,
                        borderRadius: 10,
                      }}
                      source={require('../../../assests/images/glasses.png')}
                    />
                    <Spacing size={5} />

                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: typography.poppinsRegular,
                        textAlign: 'center',
                        color: Colors.black,
                      }}>
                      Gamma/E-beam Sterilisation
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Treatment')}>
                  <View>
                    <Image
                      style={{
                        width: (SCREEN_WIDTH - 60) / 3,
                        height: (SCREEN_WIDTH - 60) / 3,
                        borderRadius: 10,
                      }}
                      source={require('../../../assests/images/glasses.png')}
                    />
                    <Spacing size={5} />
                    <Text
                      style={{
                        fontSize: 14,
                        // flex: 1,
                        fontFamily: typography.poppinsRegular,
                        textAlign: 'center',
                        color: Colors.black,
                      }}>
                      Hot Filling
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View> */}
            </View>
          </View>

          <Spacing />
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              backgroundColor: '#EDEDED',
              paddingVertical: 25,
            }}>
            <View style={{...StyleSheet.absoluteFillObject}}>
              <Image
                style={{width: SCREEN_WIDTH, height: (SCREEN_WIDTH * 85) / 375}}
                resizeMode="contain"
                source={require('../../../assests/images/shaded_background.png')}
              />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 19,
                  color: Colors.black,
                }}>
                Need Support ?
              </Text>
              <Spacing size={2} />
              <Text style={{color: Colors.black}}>
                Fill out the form and we will connect with you.
              </Text>
            </View>
            <Spacing size={20} />
            <View style={{}}>
              <Image
                style={{width: 50, height: 50}}
                resizeMode="contain"
                source={require('../../../assests/images/new.png')}
              />
            </View>
            <Spacing size={2} />
          </View>

          <Spacing size={5} />

          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 21, height: 26, tintColor: '#707070'}}
              resizeMode="contain"
              source={require('../../../assests/images/packarma_logo.png')}
            />
            <Spacing size={5} />
            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                fontSize: 14,
                color: '#707070',
              }}>
              {t('common.appNameCaps')}
            </Text>
          </View>

          <Spacing />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = ({homeData, userLocalData}) => ({
  homeData,
  userLocalData,
});

export default connect(mapStateToProps)(HomeScreen);
