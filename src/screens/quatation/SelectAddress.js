import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import Label from '../../components/label';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';

export default function SelectAddress({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Select address'} />
      <View style={{flex: 1, padding: 10}}>
        <Label required>Shipping Address</Label>
        <Spacing size={5} />
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.black,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100}}
            resizeMode="contain"
            source={require('../../../assests/images/map_image.png')}
          />
          <Spacing />
          <Text
            style={{
              fontSize: 14,
              fontFamily: typography.poppinsRegular,
              color: Colors.black,
            }}>
            Select/Add Billing Address
          </Text>
        </View>

        <Spacing />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: Colors.redColor,
              borderRadius: 5,
            }}
          />

          <Spacing size={5} />

          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 12,
              color: Colors.black,
            }}>
            Billing Address is same as shipping address.
          </Text>
        </View>
        <Spacing />
        <Label required>Billing Address</Label>
        <Spacing size={5} />
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: Colors.black,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 100, height: 100}}
            resizeMode="contain"
            source={require('../../../assests/images/map_image.png')}
          />
          <Spacing />
          <Text
            style={{
              fontSize: 14,
              fontFamily: typography.poppinsRegular,
              color: Colors.black,
            }}>
            Select/Add Billing Address
          </Text>
        </View>

        <View style={{flex: 1}} />

        <TouchableWithoutFeedback
          onPress={() => {
            crashlytics().log('NAVIGATE TO SUCCESS SCREEN...');
            navigation.navigate('Success');
          }}>
          <View
            style={{
              backgroundColor: Colors.brownColor,
              padding: 15,
              borderRadius: 8,
            }}>
            <Text style={{color: Colors.white, textAlign: 'center'}}>
              Proceed to Pay
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
