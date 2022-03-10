import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Spacing({size = 10}) {
  return <View style={{padding: size}} />;
}

const styles = StyleSheet.create({});
