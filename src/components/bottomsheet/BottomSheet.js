import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Modal from 'react-native-modal';

import {Colors} from '../../utility/constants';

function BottomSheet({show, hide, children, style, containerStyles}) {
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={hide}
      onBackdropPress={hide}
      backdropColor={'rgba(0,0,0,0.5)'}
      animationInTiming={500}
      animationOutTiming={500}
      backdropOpacity={0.5}
      style={[
        {
          margin: 0,
          justifyContent: 'flex-end',
        },
        containerStyles,
      ]}>
      <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={[
            {
              backgroundColor: Colors.white,
              borderTopStartRadius: 32,
              borderTopEndRadius: 32,
              elevation: 10,
              ...style,
            },
          ]}>
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
export default React.memo(BottomSheet);
