import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Localization from './Localization';

export default function RootContext({children}) {
  return <Localization>{children}</Localization>;
}

const styles = StyleSheet.create({});
