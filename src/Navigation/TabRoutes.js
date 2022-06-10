import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavigationStrings from '../Constants/NavigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../Constants/imagePath';


import {
  AVRecording,
  DeviceTracking,
  RingingLoud,
  Home,
  Menu
} from '../Screens';


const Tab = createBottomTabNavigator();



function TabRoutes() {

  return (

    <Tab.Navigator

      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarShowLabel: false,
        tabBarStyle: {

          backgroundColor: 'white',

        }
      }}
    >

      <Tab.Screen
        name={NavigationStrings.HOME} component={Home}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <Image
                style={{
                  tintColor: focused ? 'green' : 'black'
                }}
                source={imagePath.icHome} />
            )
          }
        }}
      />
      <Tab.Screen
        name={NavigationStrings.DEVICETRACKING} component={DeviceTracking}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <Image
                style={{
                  tintColor: focused ? 'green' : 'black'
                }}
                source={imagePath.icDeviceTracking} />
            )
          }
        }}
      />
      <Tab.Screen
        name={NavigationStrings.AVRECORDING} component={AVRecording}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <Image
                style={{
                  tintColor: focused ? 'green' : 'black'
                }}
                source={imagePath.icAVRecording} />
            )
          }
        }}
      />
      <Tab.Screen
        name={NavigationStrings.RINGINGLOUD} component={RingingLoud}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <Image
                style={{
                  tintColor: focused ? 'green' : 'black'
                }}
                source={imagePath.icRingingLoud} />
            )
          }
        }}
      />

      <Tab.Screen
        name={NavigationStrings.MENU} component={Menu}
        options={{
          tabBarIcon: ({ focused }) => {

            return (
              <Image
                style={{
                  tintColor: focused ? 'green' : 'black'
                }}
                source={imagePath.icMenu} />
            )
          }
        }}
      />


    </Tab.Navigator>



  );
};

export default TabRoutes;