import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TakeSpace() {
  return <View style={[styles.takeSpace]}></View>;
}

const styles = StyleSheet.create({
  takeSpace: {flex: 1},
});
