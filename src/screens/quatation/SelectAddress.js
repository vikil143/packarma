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
import {SCREEN_WIDTH} from '../../utility/constants';
import WhiteTextBox from '../../components/white_text_box';

export default function SelectAddress({navigation}) {
  const [bothAddress, setBothAddress] = React.useState(false);

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
            borderColor: Colors.greyColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'dotted',
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback
            onPress={() => setBothAddress(!bothAddress)}>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: Colors.redColor,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {bothAddress && (
                <Image
                  style={{width: 10, height: 10, tintColor: Colors.white}}
                  source={require('../../../assests/icons/tick.png')}
                />
              )}
            </View>
          </TouchableWithoutFeedback>

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
        {!bothAddress ? (
          <>
            <Label required>Billing Address</Label>
            <Spacing size={5} />
            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.greyColor,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'dotted',
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
              <Spacing size={10} />
            </View>
          </>
        ) : (
          <>
            <Text
              style={{
                fontFamily: typography.poppinsMedium,
                fontSize: 14,
                color: Colors.black,
              }}>
              GSTIN
            </Text>
            <Spacing size={5} />
            <View>
              <WhiteTextBox placeholderCustText="Enter GST Number" value="" />
            </View>
          </>
        )}
        <View style={{flex: 1}} />

        <TouchableWithoutFeedback
          onPress={() => {
            crashlytics().log('NAVIGATE TO SUCCESS SCREEN...');
            navigation.navigate('SuccessFromAddress');
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
