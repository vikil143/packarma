import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';
import useLocalization from '../../hooks/useLocalization';
import commonStyles from '../../utility/commonStyles';

export default function Success({navigation, route}) {
  const message = route.params?.message;
  const t = useLocalization();

  return (
    <View style={[commonStyles.flexOne]}>
      <TakeSpace />
      <View style={[styles.justifyCenter]}>
        <Image
          style={[styles.successImage]}
          source={require('../../../assests/images/success.png')}
        />
      </View>
      <Spacing />
      <Text style={[styles.descriptionText]}>
        {message}
        {/* You have reset your password successfully */}
        {/* {t('descriptions.successDescription')} */}
      </Text>
      <TakeSpace />
      <View style={[styles.padding10]}>
        <Button
          title={t('common.login')}
          onPress={() => {
            crashlytics().log('NAVIGATE TO LOGIN SCREEN...');
            // navigation.navigate('BottomTabs');
            navigation.navigate('Login');
          }}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionText: {
    textAlign: 'center',
    fontFamily: typography.poppinsRegular,
    fontSize: 18,
    color: Colors.black,
    paddingHorizontal: 20,
  },
  successImage: {
    width: SCREEN_WIDTH / 1.7,
    height: SCREEN_WIDTH / 1.7,
    alignSelf: 'center',
  },
  justifyCenter: {justifyContent: 'center', alignItems: 'center'},
  padding10: {padding: 10},
});
