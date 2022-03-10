import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function Button({
  onPress,
  title,
  textColor = Colors.white,
  containerStyles,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, containerStyles]}>
        <Text
          style={{
            color: textColor,
            fontFamily: typography.poppinsRegular,
            fontSize: 14,
          }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.brownColor,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 12,
  },
});
