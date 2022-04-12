import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import Search from '../../components/search';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import BottomSheet from '../../components/bottomsheet/BottomSheet';

export default function SearchScreen() {
  const [search, setSearch] = React.useState(false);

  return (
    <View style={[styles.container]}>
      <BottomSheet
        show={search}
        hide={() => setSearch(false)}
        style={{
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        }}>
        <View style={{padding: 10, backgroundColor: Colors.white}}>
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
              <Text style={{textAlign: 'center', color: Colors.black}}>
                Food
              </Text>
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
        </View>
      </BottomSheet>
      <BackHeader title={'Product'} />
      <View style={{flex: 1, padding: 15}}>
        <Search />
        <Spacing size={5} />
        <TouchableWithoutFeedback onPress={() => setSearch(true)}>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: 15,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                fontSize: 14,
                color: Colors.black,
              }}>
              Milk
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Spacing size={5} />
        <View
          style={{backgroundColor: Colors.white, padding: 15, borderRadius: 5}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Cheese
          </Text>
        </View>
        <Spacing size={5} />
        <View
          style={{backgroundColor: Colors.white, padding: 15, borderRadius: 5}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Yogurt
          </Text>
        </View>
        <Spacing size={5} />
        <View
          style={{backgroundColor: Colors.white, padding: 15, borderRadius: 5}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Butter
          </Text>
        </View>
        <Spacing size={5} />
        <View
          style={{backgroundColor: Colors.white, padding: 15, borderRadius: 5}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Frozen Desserts
          </Text>
        </View>
        <Spacing size={5} />
        <View
          style={{backgroundColor: Colors.white, padding: 15, borderRadius: 5}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Whey, Milk Powder{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  container: {
    flex: 1,
  },
});
