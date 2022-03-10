import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import React from 'react';

export default function TreatmentModal({show, hide}) {
  return (
    <BottomSheet {...{show, hide}}>
      <View>
        <Text>TreatmentModal</Text>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});
