import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import commonStyles from '../../utility/commonStyles';
import SideArrow from '../../svg/SideArrow';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';

export default function Item({name, icon, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[{padding: 10, margin: 10}, commonStyles.rowAlignCenter]}>
        <View style={{marginRight: 10}}>{icon}</View>
        <View style={[commonStyles.rowAlignCenter, commonStyles.flexOne]}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: typography.poppinsRegular,
                color: Colors.black,
              }}>
              {name}
            </Text>
          </View>
          <View style={{}}>
            <SideArrow />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
