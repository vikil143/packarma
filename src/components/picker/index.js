import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Colors} from '../../utility/constants';

export default function PickerComp({
  selectedValue,
  onValueChange,
  data,
  containerStyle,
}) {
  return (
    <Picker
      style={[{backgroundColor: Colors.white}, containerStyle]}
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}>
      <Picker.Item label="None of below" value="" />
      {data.map((item, ind) => {
        return <Picker.Item label={item.label} value={item.value} />;
      })}
    </Picker>
  );
}

const styles = StyleSheet.create({});
