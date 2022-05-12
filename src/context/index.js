import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Localization from './Localization';
import Toast from './Toast';

export default function RootContext({children}) {
  return (
    <Localization>
      <Toast>{children}</Toast>
    </Localization>
  );
}

const styles = StyleSheet.create({});
