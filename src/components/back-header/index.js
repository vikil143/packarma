import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Spacing from '../spacing';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function BackHeader({title}) {
  return (
    <View>
      <View style={[styles.header]}>
        <View style={{flex: 1 / 3}}>
          <Image
            style={[{width: 30, height: 30}]}
            source={require('../../../assests/images/back_arrow.png')}
          />
        </View>
        <Spacing size={5} />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 18,
              color: Colors.black,
              textAlign: 'center',
            }}>
            {title}
            {/* Create Account */}
          </Text>
        </View>
        <View style={{flex: 1 / 3}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
