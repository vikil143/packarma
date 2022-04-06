import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';

function EnquireCard({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
            }}>
            Dried & dehydrated food Products
          </Text>
          <View style={{flex: 1}} />
          <View style={{}}>
            <Image
              style={{width: 20, height: 25}}
              resizeMode="contain"
              source={require('../../../assests/icons/my_order.png')}
            />

            <View
              style={{
                width: 15,
                height: 15,
                backgroundColor: '#B83332',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: -5,
                left: -5,
              }}>
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 10,
                  color: Colors.white,
                }}>
                3
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: typography.poppinsRegular,
              fontSize: 12,
            }}>
            Food
          </Text>
          <Text
            style={{
              color: Colors.black,
              fontFamily: typography.poppinsRegular,
              fontSize: 12,
            }}>
            15-03-22 10:12 AM
          </Text>
        </View>
        <View
          style={{width: '100%', height: 2, backgroundColor: Colors.greyColor}}
        />

        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text
            style={{
              color: Colors.black,
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
            }}>
            Product Wt. <Text>200 Kg</Text>
          </Text>
          <View style={{flex: 1}} />
          <Text
            style={{
              color: Colors.black,
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
            }}>
            Shelf Life : <Text>180 Days</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function MyEnquiry({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Help Requests'} />
      <View style={{flex: 1, padding: 15, paddingBottom: 0}}>
        <EnquireCard
          onPress={() => {
            navigation.navigate('EnquiryDescription');
          }}
        />
        <Spacing />
        <EnquireCard
          onPress={() => {
            navigation.navigate('EnquiryDescription');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
