import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import typography from '../../utility/typography';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';

export default function TreatmentDetails() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <BackHeader title={'Treatments'} />
      <View style={{}}>
        <View style={{padding: 8, borderRadius: 20}}>
          <Image
            style={{
              width: SCREEN_WIDTH - 16,
              height: 250,
              borderRadius: 10,
            }}
            source={require('../../../assests/images/glasses.png')}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 16,
              color: Colors.black,
              paddingHorizontal: 15,
            }}>
            Aseptic Filling
          </Text>

          <Text
            style={{
              paddingHorizontal: 15,
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            We provide packaging solutions for all type of dried foods and
            dehydrated products like beans , Grains, dried vegetables, dried
            fruits , processed foods, dried fish and seafood etc.{' '}
          </Text>
          <Spacing size={5} />
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
              paddingHorizontal: 15,
            }}>
            Applicable Products
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
