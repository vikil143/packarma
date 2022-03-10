import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import Category from '../category';
import QuationsIcon from '../../svg/QuationsIcon';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{header: () => null}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: props => {
            return (
              <TouchableWithoutFeedback {...props}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Image
                    style={{width: 26, height: 26}}
                    resizeMode="contain"
                    source={require('../../../assests/icons/home_icon.png')}
                  />
                  <Spacing size={2} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: typography.poppinsRegular,
                      fontSize: 10,
                    }}>
                    Home
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarButton: props => {
            return (
              <TouchableWithoutFeedback {...props}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Image
                    style={{width: 25, height: 25}}
                    resizeMode="contain"
                    source={require('../../../assests/icons/figrid.png')}
                  />
                  <Spacing size={2} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: typography.poppinsRegular,
                      fontSize: 10,
                    }}>
                    Category
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
