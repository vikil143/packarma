import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackHeader from '../../components/back-header';
import Button from '../../components/button';
import Spacing from '../../components/spacing';
import TakeSpace from '../../components/take_space';
import WhiteTextBox from '../../components/white_text_box';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';

export default function SetPassword({navigation}) {
  return (
    <View style={[styles.container]}>
      <BackHeader title={'Set Password'} />
      <View style={{flex: 1, padding: 18}}>
        <View>
          <Text
            style={{
              fontFamily: typography.poppinsSemiBold,
              fontSize: 14,
              color: Colors.black,
            }}>
            New Password
          </Text>
          <Spacing size={5} />
          <WhiteTextBox action="password" actionStyles={{tintColor: '#ddd'}} />
        </View>
        <Spacing size={15} />
        <View>
          <Text
            style={{
              fontFamily: typography.poppinsSemiBold,
              fontSize: 14,
              color: Colors.black,
            }}>
            Confirm Password
          </Text>
          <Spacing size={5} />
          <WhiteTextBox action="password" actionStyles={{tintColor: '#ddd'}} />
        </View>

        <TakeSpace />

        <View style={{padding: 10}}>
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
              color: Colors.black,
            }}>
            Password Policy :
          </Text>
          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{fontSize: 12, color: Colors.black}}>
              Length of the password should be atleast 8 character.
            </Text>
          </View>

          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain atleast 1 Capital letter and 1 small
              letter.
            </Text>
          </View>
          <Spacing size={5} />
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain a special character.
            </Text>
          </View>
          <Spacing size={5} />

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: Colors.black,
                borderRadius: 8 / 2,
              }}
            />
            <Spacing size={5} />
            <Text style={{color: Colors.black, fontSize: 12}}>
              Password should contain a number.
            </Text>
          </View>
          <Spacing size={5} />
        </View>

        <Button
          title={'Reset'}
          onPress={() => navigation.navigate('Success')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
