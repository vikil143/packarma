import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';

export default function PlaceEnquiry() {
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Place Enquiry'} />
      <View style={{flex: 1, padding: 15}}>
        <View style={{}}>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Product Category*
          </Text>
          <Spacing size={10} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
