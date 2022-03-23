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
import Spacing from '../../components/spacing';
import {MyEnquiry} from '../enquiry';
// import Enquiry from "../../screens"
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';

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
                      color: Colors.black,
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
                      color: Colors.black,
                    }}>
                    Category
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
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
                      color: Colors.black,
                    }}>
                    Order
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <Tab.Screen
        name="Enquiry"
        component={MyEnquiry}
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
                    source={require('../../../assests/icons/enquire.png')}
                  />
                  <Spacing size={2} />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: typography.poppinsRegular,
                      fontSize: 10,
                      color: Colors.black,
                    }}>
                    Enquiry
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
