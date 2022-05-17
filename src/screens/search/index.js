import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import Search from '../../components/search';
import {Colors, SUCCESS} from '../../utility/constants';
import typography from '../../utility/typography';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import api from '../../utility/api';
import useLocalization from '../../hooks/useLocalization';

export default function SearchScreen() {
  const [sheet, setSheet] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState({});
  const t = useLocalization();

  const onSearchCategory = () => {};

  const onSearchValue = async text => {
    setSearchValue(text);
    setTimeout(async () => {
      try {
        const productFormData = {
          search: searchValue,
          product_id: '',
          page_no: '',
          limit: '',
          product_name: '',
        };

        const response = await api({
          url: 'products/listing',
          data: productFormData,
        });

        console.log('### response data', response.data.data);
        if (response.data.success === SUCCESS) {
          setSearchData(response.data.data.result);
        }
      } catch (error) {
        console.log('Error ', error);
      }
    }, 2000);
  };

  console.log('#### render search', data);
  return (
    <View style={[styles.container]}>
      <BottomSheet
        show={sheet}
        hide={() => setSheet(false)}
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
                  // source={require('../../../assests/images/products.png')}
                  source={{uri: data.product_image}}
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
                {/* Dried & dehydrated food Products */}
                {data?.product_name}
              </Text>
              <Spacing size={2} />
              <Text style={{textAlign: 'center', color: Colors.black}}>
                {data?.category?.category_name},{' '}
                {data?.sub_category?.sub_category_name}
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
                {data?.product_description}
                {/* We provide packaging solutions for all type of dried foods and
                dehydrated products like beans , Grains, dried vegetables, dried
                fruits , processed foods, dried fish and seafood etc */}
              </Text>
              <Spacing size={5} />
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  fontFamily: typography.poppinsMedium,
                }}>
                {t('titles.packagingTreatment')}
              </Text>

              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                }}>
                {/* Aseptic Filling, Gamma / E-beam Sterilisation, Deep freezing{' '} */}
                {data.packaging_treatment_data}
              </Text>
              <Spacing size={5} />
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setOpen(false);
                    crashlytics().log('Go To Place Enquiry Screen');
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
        <Search value={searchValue} onChangeText={onSearchValue} />
        <Spacing size={5} />
        <FlatList
          data={searchData}
          keyExtractor={(_, ind) => ind.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  setSheet(true);
                  setData(item);
                }}>
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
                    {item.product_name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
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
