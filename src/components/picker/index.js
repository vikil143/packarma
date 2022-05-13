import {StyleSheet, Text, View, Appearance} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Colors} from '../../utility/constants';

export default function PickerComp({
  selectedValue,
  onValueChange,
  data,
  containerStyle,
  placeHolder = 'None of below',
  name,
}) {
  const mode = Appearance.getColorScheme();
  return (
    <Picker
      style={[{backgroundColor: Colors.white}, containerStyle]}
      selectedValue={selectedValue}
      dropdownIconColor="#000"
      onValueChange={(itemValue, itemIndex) => onValueChange(itemValue, name)}>
      <Picker.Item
        label={placeHolder}
        value=""
        style={{color: mode === 'dark' ? '#fff' : '#707070'}}
      />
      {data.map((item, ind) => {
        return (
          <Picker.Item
            label={item.label}
            value={item.value}
            style={{color: mode === 'dark' ? '#fff' : '#707070'}}
          />
        );
      })}
    </Picker>
  );
}

const styles = StyleSheet.create({});
