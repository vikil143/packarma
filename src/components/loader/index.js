import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';

export default function Loader({loading}) {
  return (
    <Modal visible={loading} transparent>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View
          style={[
            {
              backgroundColor: Colors.white,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            },
          ]}>
          <ActivityIndicator color={Colors.orangeColor} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
