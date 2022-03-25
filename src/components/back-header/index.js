import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Spacing from '../spacing';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function BackHeader({title}) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[styles.header]}>
        <View style={{flex: 1 / 45}}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image
              style={[{width: 30, height: 30}]}
              source={require('../../../assests/images/back_arrow.png')}
            />
          </TouchableWithoutFeedback>
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
        <View style={{flex: 1 / 45, backgroundColor: 'red'}} />
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
