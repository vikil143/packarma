import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';
import Item from './Item';
import MyOrdersIcon from '../../svg/my-profile-icons/MyOrders';
import MySubscription from '../../svg/my-profile-icons/MySubscription';
import MapIcon from '../../svg/my-profile-icons/MapIcon';
import ChangePassword from '../../svg/my-profile-icons/ChangePassword';
import AboutUs from '../../svg/my-profile-icons/AboutUs';
import Help from '../../svg/my-profile-icons/Help';
import Terms from '../../svg/my-profile-icons/Terms';
import Privacy from '../../svg/my-profile-icons/Privacy';
import commonStyles from '../../utility/commonStyles';
import useLocalization from '../../hooks/useLocalization';

export default function MyProfile({navigation}) {
  const t = useLocalization();

  return (
    <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
      <BackHeader title={t('common.myProfile')} />
      <ScrollView>
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
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 28,
                fontFamily: typography.poppinsRegular,
              }}>
              RS
            </Text>
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
            <Text
              style={{
                fontSize: 14,
                fontFamily: typography.poppinsRegular,
                color: Colors.black,
              }}>
              Rakesh.s@gmail.com
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: typography.poppinsRegular,
                color: Colors.black,
              }}>
              +91 9876765432
            </Text>
          </View>
          <Text
            style={{
              color: Colors.redColor,
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
            }}>
            {/* Edit */}
            {t('common.edit')}
          </Text>
        </View>

        <View style={{padding: 10}}>
          <Item name="My Orders" icon={<MyOrdersIcon />} />
          <Item
            name="My Subscriptions"
            icon={<MySubscription />}
            onPress={() => {
              crashlytics().log('Go To The Subscription Screen');
              navigation.navigate('Subscription');
            }}
          />
          <Item name="My Addresses" icon={<MapIcon />} />
          <Item
            name="Change Password"
            icon={
              <Image
                style={{width: 25, height: 25}}
                resizeMode="contain"
                source={require('../../../assests/icons/lock.png')}
              />
            }
          />
          <View style={{width: '100%', height: 1, backgroundColor: '#ddd'}} />
          <Item name="About Us" icon={<AboutUs />} />
          <Item name="Help and Support" icon={<Help />} />
          <Item name="Terms and Conditions" icon={<Terms />} />
          <Item name="Privacy Policy" icon={<Privacy />} />
          <Spacing size={10} />
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.black,
              padding: 15,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: typography.poppinsRegular,
                fontSize: 16,
                color: Colors.black,
              }}>
              {t('common.logout')}
              {/* Logout */}
            </Text>
          </View>
          <Spacing size={10} />
          <View
            style={[commonStyles.rowAlignCenter, {justifyContent: 'center'}]}>
            <Image
              style={{
                tintColor: '#ddd',
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
              source={require('../../../assests/images/packarma_logo.png')}
            />
            <Spacing size={10} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: typography.poppinsRegular,
                color: '#707070',
              }}>
              PACKARMA
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
