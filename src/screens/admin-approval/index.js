import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';
import Button from '../../components/button';
import TakeSpace from '../../components/take_space';
import useLocalization from '../../hooks/useLocalization';

export default function AdminApproval() {
  const t = useLocalization();

  return (
    <View style={[styles.container]}>
      <Spacing size={30} />
      <View>
        <Image
          style={[styles.successImage]}
          source={require('../../../assests/images/success.png')}
        />
      </View>
      <Spacing />
      <Text style={[styles.adminApprovalText]}>
        {/* Your onboarding has been completed successfully */}
        {t('descriptions.adminApporval')}
      </Text>
      <TakeSpace />
      <View style={[styles.padding10]}>
        <Button
          title={t('common.login')}
          onPress={() => {
            crashlytics().log('NAVIGATE TO ADMIN APPROVAL SCREEN....');
            navigation.navigate('AdminApproval');
          }}></Button>
      </View>
      <Spacing size={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  padding10: {padding: 10},
  adminApprovalText: {
    textAlign: 'center',
    fontFamily: typography.poppinsRegular,
    fontSize: 18,
    color: Colors.black,
  },
  successImage: {
    width: SCREEN_WIDTH / 1.7,
    height: SCREEN_WIDTH / 1.7,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
});
