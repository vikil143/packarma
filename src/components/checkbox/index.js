import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Colors} from '../../utility/constants';
export default function CheckBox({
  selected,
  activeColor = Colors.darkBlue,
  inActiveColor = 'transparent',
  size = 20,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          borderWidth: selected ? 0 : 2,
          borderColor: Colors.lightGrey,
          backgroundColor: selected ? activeColor : inActiveColor,
          justifyContent: 'center',
          alignItems: 'center',
          width: size,
          height: size,
        }}>
        {!!selected && (
          <Image
            style={{
              width: size - 8,
              height: size - 8,
              resizeMode: 'contain',
              tintColor: Colors.white,
            }}
            source={require('../../../assests/icons/tick.png')}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
