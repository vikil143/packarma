import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import SearchIcon from '../../../src/svg/search';
import {Colors} from '../../utility/constants';
import Spacing from '../spacing';
import typography from '../../utility/typography';

export default function Search({containerStyle, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            padding: 15,
            flexDirection: 'row',
            backgroundColor: Colors.white,
            borderRadius: 10,
          },
          containerStyle,
        ]}>
        <SearchIcon />
        <View style={{width: 1, height: '100%'}}></View>
        <Spacing size={8} />
        <View>
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 12,
              color: Colors.greyColor,
            }}>
            Search for Products
            {/* {placeholder} */}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
