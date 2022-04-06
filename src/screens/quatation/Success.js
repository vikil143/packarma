import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import TakeSpace from '../../components/take_space';
import Button from '../../components/button';
import useLocalization from '../../hooks/useLocalization';

export default function Success({navigation}) {
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
      <TakeSpace />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
        {/* You have reset your password successfully */}
        {t('descriptions.successWhenAddedAddress')}
      </Text>

      <Text
        style={{
          color: Colors.black,
          fontFamily: typography.poppinsMedium,
          textAlign: 'center',
        }}>
        {t('common.orderId')} : #PAC000654
      </Text>

      <TakeSpace />
      <View style={{padding: 10}}>
        <Button
          title={t('common.myOrders')}
          onPress={() => {
            crashlytics().log('NAVIGATE TO LOGIN SCREEN...');
            // navigation.navigate('BottomTabs');
            navigation.navigate('MyOrders');
          }}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
