import React, {useEffect, useRef} from 'react';
import {TouchableWithoutFeedback, Animated} from 'react-native';

import {Colors} from '../../utility/constants';

function RadioButton({
  size = 20,
  selected,
  style,
  onPress,
  innerSize = size - 9,
  innerStyle,
}) {
  const isSelected = useRef(new Animated.Value(selected ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(isSelected, {
      toValue: selected ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  // const onHandlePress = () =>
  //   Animated.spring(isSelected, {
  //     toValue: 0,
  //     useNativeDriver: true,
  //   }).start(() => onPress());

  const borderColor = isSelected.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(142, 142, 147)', 'rgb(47, 64, 101)'],
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress();
      }}>
      <Animated.View
        style={{
          padding: 9,
          borderWidth: 2,
          borderColor,
          borderRadius: size,
          width: size + 2,
          height: size + 2,
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
          zIndex: 1000,
        }}>
        <Animated.View
          style={{
            width: innerSize,
            height: innerSize,
            borderRadius: size / 2,
            backgroundColor: Colors.brownColor,
            transform: [{scale: isSelected}],
            ...innerStyle,
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(RadioButton);
