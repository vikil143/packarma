import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PickerComp from '@react-native-picker/picker';

export default function Picker({selectedValue, onValueChange, data}) {
  return (
    <PickerComp
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
      {data.map((item, ind) => {
        return <PickerComp.Item label={item.label} value={item.value} />;
      })}
    </PickerComp>
  );
}

const styles = StyleSheet.create({});
