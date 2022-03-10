import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SearchIcon from '../../../src/svg/search';
import {Colors} from '../../utility/constants';
import Spacing from '../spacing';
import typography from '../../utility/typography';

export default function Search({containerStyle}) {
  return (
    <View
      style={[
        {
          padding: 15,
          flexDirection: 'row',
          backgroundColor: Colors.white,
          borderRadius: 10,
        },
        containerStyle,
      ]}>
      <SearchIcon />
      <View style={{width: 1, height: '100%'}}></View>
      <Spacing size={8} />
      <View>
        <Text
          style={{
            fontFamily: typography.poppinsRegular,
            fontSize: 12,
            color: Colors.black,
          }}>
          Search for product
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
