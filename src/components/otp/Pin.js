import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import commonStyles from '../../utility/commonStyles';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';

const NO_OF_OTP = 4;

export default function Pins({pin, setPin}) {
  // const [pin, setPin] = useState<string>("");

  const handleChangePin = text => {
    console.log('handle Chnage pin', text, text.length, isNaN(Number(text)));

    if (isNaN(Number(text))) {
      return false;
    }

    if (text.length < 5) {
      console.log('In If staement!!!');
      setPin(text);
    }
  };

  return (
    <View style={[commonStyles.row, {justifyContent: 'space-around'}]}>
      {new Array(NO_OF_OTP).fill(0).map((_, ind) => {
        return (
          <View style={[styles.pin]} key={ind}>
            <Text style={[styles.pinColor]}>
              {ind < pin.length ? pin[ind] : ''}
            </Text>
          </View>
        );
      })}
      <TextInput
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: 0,
        }}
        keyboardType="numeric"
        value={pin}
        onChangeText={handleChangePin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pinColor: {
    color: Colors.black,
  },
  pin: {
    width: (SCREEN_WIDTH - 100) / 4,
    height: (SCREEN_WIDTH - 100) / 4,
    backgroundColor: Colors.white,
    // borderWidth: 1,
    // borderColor: Colors.inputBorderColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
