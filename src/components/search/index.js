import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';
import SearchIcon from '../../../src/svg/search';
import {Colors} from '../../utility/constants';
import Spacing from '../spacing';
import typography from '../../utility/typography';
import useLocalization from '../../hooks/useLocalization';
import commonStyle from '../../utility/commonStyles';

export default function Search({containerStyle, value, onChangeText}) {
  const t = useLocalization();

  return (
    <View style={[styles.container, containerStyle]}>
      <Spacing size={10} />
      <SearchIcon />
      <Spacing size={8} />
      <View style={[styles.line]}></View>
      <Spacing size={8} />
      <View style={[commonStyle.flexOne]}>
        <TextInput
          style={[styles.textinput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={t('titles.searchForProduct')}
          placeholderTextColor={Colors.greyColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {width: 1, height: '30%', backgroundColor: Colors.greyColor},
  textinput: {
    textAlign: 'left',
    fontSize: 14,
    color: Colors.black,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
});
