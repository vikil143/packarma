import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import Modal from 'react-native-modal';
import Spacing from '../../components/spacing';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import typography from '../../utility/typography';
import {Colors, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utility/constants';
import BackHeader from '../../components/back-header';
import Search from '../../components/search/SearchOnTap';
import HomeCare from '../../svg/HomeCare';
import commonStyles from '../../utility/commonStyles';

export default function Category({navigation}) {
  const [open, setOpen] = useState(false);
  const [treatmentSheet, setTreatMentSheet] = useState(false);
  const [treatmentDetails, setTreatmentDetails] = useState(false);

  return (
    <View style={{}}>
      <BottomSheet
        show={open}
        style={styles.bottomSheetContainer}
        hide={() => setOpen(false)}>
        <ScrollView>
          <View style={[styles.sheetContainer]}>
            <View style={[commonStyles.alignCenter]}>
              <Image
                style={{width: 60, height: 55}}
                source={require('../../../assests/images/products.png')}
              />
            </View>
            <Spacing size={10} />
            <Text style={[styles.title]}>Dried & dehydrated food Products</Text>
            <Spacing size={2} />
            <Text style={[styles.foodText]}>Food</Text>
            <Spacing size={5} />
            <View style={[styles.line]} />

            <Spacing size={5} />
            <Text style={[styles.packageTitle]}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans , Grains, dried vegetables, dried
              fruits , processed foods, dried fish and seafood etc
            </Text>
            <Spacing size={5} />
            <Text style={[styles.packageTreatment]}>Packaging Treatments</Text>

            <Text style={[styles.aspectText]}>
              Aseptic Filling, Gamma / E-beam Sterilisation, Deep freezing{' '}
            </Text>
            <Spacing size={5} />
            <View style={styles.rowJustifyCenter}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setOpen(false);
                  crashlytics().log('Go To Placenenquiry');
                  navigation.navigate('PlaceEnquiry');
                }}>
                <View style={[styles.placeButton]}>
                  <Text style={[styles.whiteColor]}>Place enquiry</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>

      <View style={[styles.padding10]}>
        <Search />
      </View>
      <View style={[commonStyles.row]}>
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
            <Text style={[styles.productTitle]}>Products</Text>
            <Spacing />
            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.dairyText]}>Beverages</Text>
              </View>
            </View>
            <Spacing />

            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.dairyText]}>Beverages</Text>
              </View>
            </View>
            <Spacing />
            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.dairyText]}>Beverages</Text>
              </View>
            </View>
            <Spacing />

            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.dairyText]}>Beverages</Text>
              </View>
            </View>
            <Spacing />

            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.dairyText]}>Beverages</Text>
              </View>
            </View>
            <Spacing />

            <View style={[styles.rowSpaceCenter]}>
              <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                <View>
                  <Image
                    style={[styles.dairyImage]}
                    source={require('../../../assests/images/friuts.png')}
                  />
                  <Spacing size={3} />
                  <Text style={[styles.dairyText]}>Dairy</Text>
                </View>
              </TouchableWithoutFeedback>

              <Spacing size={10} />
              <View style={[styles.line45Per]} />
              <Spacing size={10} />
              <View>
                <Image
                  style={[styles.dairyImage]}
                  source={require('../../../assests/images/dairy.png')}
                />

                <Spacing size={3} />
                <Text style={[styles.beveragesText]}>Beverages</Text>
              </View>
            </View>
            <Spacing size={80} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowSpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontFamily: typography.poppinsMedium,
    color: Colors.black,
  },
  dairyText: {
    fontSize: 14,
    fontFamily: typography.poppinsRegular,
    color: Colors.black,
    textAlign: 'center',
  },
  line45Per: {
    height: '40%',
    width: 2,
    backgroundColor: Colors.greyColor,
  },
  beveragesText: {
    fontSize: 14,
    fontFamily: typography.poppinsRegular,
    color: Colors.black,
    textAlign: 'center',
  },
  dairyImage: {
    width: (SCREEN_WIDTH - 75) / 4,
    height: (SCREEN_WIDTH - 75) / 4,
    borderRadius: 10,
  },
  padding10: {padding: 10},
  placeButton: {
    padding: 20,
    paddingVertical: 10,
    backgroundColor: '#663c2f',
    borderRadius: 5,
  },
  rowJustifyCenter: {flexDirection: 'row', justifyContent: 'center'},
  aspectText: {
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
    color: Colors.black,
  },
  whiteColor: {color: Colors.white},
  packageTreatment: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: typography.poppinsMedium,
  },
  packageTitle: {
    fontFamily: typography.poppinsRegular,
    color: Colors.black,
  },
  line: {
    height: 1,
    backgroundColor: Colors.greyColor,
    width: '100%',
  },
  foodText: {textAlign: 'center', color: Colors.black},
  title: {
    fontSize: 16,
    fontFamily: typography.poppinsMedium,
    color: Colors.black,
    textAlign: 'center',
  },
  sheetContainer: {padding: 20, paddingBottom: 10},
  bottomSheetContainer: {
    height: SCREEN_HEIGHT / 1.8,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
});
