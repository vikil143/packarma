import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import useLocalization from '../../hooks/useLocalization';
import {Colors} from '../../utility/constants';
import Spacing from '../spacing';

function EmptyComp({extraBottomSpace = false}) {
  const t = useLocalization();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 80, height: 60}}
        source={require('../../../assests/icons/no_records.png')}
        resizeMode="contain"
      />
      <Spacing size={10} />
      <Text style={{color: Colors.black}}>
        {t('common.noRecordAvailable')}{' '}
      </Text>
      {extraBottomSpace && <Spacing size={20} />}
    </View>
  );
}

export default React.memo(EmptyComp);
