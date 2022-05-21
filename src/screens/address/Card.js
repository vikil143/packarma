import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';

export default function Card() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>MYPCOT INFOTECH PRIVATE LIMITED</Text>
      <Spacing size={5} />
      <Text style={{color: Colors.black}}>
        A 204, Gardenea Heights Kanakia Road, A… Mira Road - East Thane,
        Maharashtra - 401107 Mob : +91 543672993
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
  },
  container: {
    backgroundColor: Colors.white,
    padding: 10,
  },
});
