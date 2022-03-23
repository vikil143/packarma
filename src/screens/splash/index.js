import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN_WIDTH} from '../../utility/constants';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assests/images/splash_logo.png')}
        />
        <Image
          style={{width: SCREEN_WIDTH - 10}}
          resizeMode="contain"
          source={require('../../../assests/images/packarma_outer_logo.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
