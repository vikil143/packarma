import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';

export default function MyProfile() {
  return (
    <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <BackHeader title={'My Profile'} />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.brownColor,
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.white}}>RS</Text>
        </View>
        <Spacing size={10} />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: typography.poppinsSemiBold,
              color: Colors.black,
            }}>
            Rakesh Shetty
          </Text>
          <Text style={{fontSize: 14, fontFamily: typography.poppinsRegular}}>
            Rakesh.s@gmail.com
          </Text>
          <Text style={{fontSize: 14, fontFamily: typography.poppinsRegular}}>
            +91 9876765432
          </Text>
        </View>
        <Text
          style={{
            color: Colors.redColor,
            fontFamily: typography.poppinsRegular,
            fontSize: 14,
          }}>
          Edit
        </Text>
      </View>

      <View style={{}}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
