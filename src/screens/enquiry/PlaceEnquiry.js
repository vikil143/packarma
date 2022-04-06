import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Picker from '../../components/picker';
import Label from '../../components/label';
import useLocalization from '../../hooks/useLocalization';

export default function PlaceEnquiry({navigation}) {
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Help Request'} />
      <View style={{flex: 1}}>
        <ScrollView style={{padding: 15}}>
          <View style={{}}>
            {/* <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Product Category*
          </Text> */}
            <Label required>Product Category</Label>
            <Spacing size={5} />
            <Picker
              data={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
              ]}
              placeHolder="Select Product Category"
            />
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Product</Label>
            <Spacing size={5} />
            <Picker
              containerStyle={{backgroundColor: '#ddd'}}
              data={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
              ]}
              placeHolder="Select Products"
            />
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Shelf Life</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
                placeHolder="Days"
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Product Weight</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
                placeHolder={'Kg'}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Storage conditions</Label>
            <Spacing size={5} />
            <View>
              {/* <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View>

              <Spacing /> */}
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
                placeHolder="Select storage conditions"
              />
            </View>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Machine</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Select Machine"
              />
            </View>
          </View>

          <Spacing size={10} />

          <View style={{}}>
            <Label required>Product form</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Select Machine"
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Packaging Type </Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Treatments</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Select Machine"
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Location</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
              />
            </View>
          </View>
          <Spacing size={10} />

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('EnquiryDescription')}>
            <View
              style={{
                backgroundColor: Colors.brownColor,
                padding: 15,
                paddingHorizontal: 30,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 16,
                  fontStyle: typography.poppinsRegular,
                }}>
                {t('common.proceed')}
                {/* Proceed */}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <Spacing size={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
