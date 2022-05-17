import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN_WIDTH} from '../../utility/constants';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.center]}>
        <Image
          style={[styles.splashLogo]}
          source={require('../../../assests/images/splash_logo.png')}
        />
        <Image
          style={[styles.outerImage]}
          resizeMode="contain"
          source={require('../../../assests/images/packarma_outer_logo.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashLogo: {
    position: 'absolute',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerImage: {width: SCREEN_WIDTH - 10},
  center: {justifyContent: 'center', alignItems: 'center'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
