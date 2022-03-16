import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function Label({children, required}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: typography.poppinsRegular,
          color: Colors.black,
        }}>
        {children} {required && <Text style={{color: Colors.redColor}}>*</Text>}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
