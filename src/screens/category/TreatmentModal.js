import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import React from 'react';
import {Colors} from '../../utility/constants';

export default function TreatmentModal({show, hide}) {
  return (
    <BottomSheet {...{show, hide}}>
      <View>
        <Text style={{color: Colors.black}}>TreatmentModal</Text>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});
