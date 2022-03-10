import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function Product({name}) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: Colors.white,
        borderRadius: 8,
        margin: 5,
      }}>
      <Text
        style={{
          fontFamily: typography.poppinsRegular,
          fontSize: 14,
          color: Colors.black,
        }}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
