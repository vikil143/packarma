import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN_WIDTH} from '../../utility/constants';
import {getLocalData, getTokenData} from '../../utility/localStorage';
import {connect} from 'react-redux';
import {storeUserData} from '../../reducers/userLocalData';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(getData, 3000);
  }, []);

  const getData = async () => {
    const id = await getLocalData();
    const token = await getTokenData();
    storeUserData({userId: id, token});
    if (!!token) {
      navigation.navigate('BottomTabs');
    } else {
      navigation.navigate('Login');
    }
  };

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

const mapStateToProps = ({}) => ({});

export default connect()(SplashScreen);
