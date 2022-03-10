import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';

export default function Success({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Spacing size={30} />
      <View>
        <Image
          style={[
            {
              width: SCREEN_WIDTH / 1.7,
              height: SCREEN_WIDTH / 1.7,
              alignSelf: 'center',
            },
          ]}
          source={require('../../../assests/images/success.png')}
        />
      </View>
      <Spacing />
      <Text
        style={{
          textAlign: 'center',
          fontFamily: typography.poppinsRegular,
          fontSize: 18,
          color: Colors.black,
          paddingHorizontal: 20,
        }}>
        You have reset your password successfully
      </Text>
      <TakeSpace />
      <View style={{padding: 10}}>
        <Button
          title={'Login'}
          onPress={() => navigation.navigate('BottomTabs')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
