import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
import Login from '../login';
import Register from '../register';
import Verify from '../verify';
import AdminApproval from '../admin-approval';
import ForgetPassword from '../forget-password';
import SetPassword from '../set-password';
import Success from '../success';
import SuccessFromAddress from '../quatation/Success';
import Subscription from '../subscription';
import Product from '../product';
import {PlaceEnquiry, EnquiryDescription} from '../enquiry';
import {OrderDetails, MyOrder} from '../order';
import MyProfile from '../my-profile';
import MyOrders from '../order/MyOrders';
import {AcceptQuatation} from '../quatation';
import SelectAddress from '../quatation/SelectAddress';
import SplashScreen from '../splash';
import {Treatment, TreatmentDetails} from '../treatment';
import SearchScreen from '../search';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerMode: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="AdminApproval" component={AdminApproval} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="PlaceEnquiry" component={PlaceEnquiry} />
        <Stack.Screen
          name="EnquiryDescription"
          component={EnquiryDescription}
        />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="AcceptQuataion" component={AcceptQuatation} />
        <Stack.Screen name="SelectAddress" component={SelectAddress} />
        <Stack.Screen
          name="SuccessFromAddress"
          component={SuccessFromAddress}
        />
        <Stack.Screen name="Treatment" component={Treatment} />
        <Stack.Screen name="TreatmentDetails" component={TreatmentDetails} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        {/* <Stack.Screen name="Success" component={Success} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
