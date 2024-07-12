import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

import Home from './src/Home';
import Contact from './src/Contact';
import Cart from './src/Cart';
import Categories from './src/Categories';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home' // Use the string name of the route, not the component
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={focused ? '#40E0D0' : '#7e7e7e'}
              />
            );
          } else if (route.name === 'Contact') {
            iconName = 'account';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={focused ? '#40E0D0' : '#7e7e7e'}
              />
            );
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={focused ? '#40E0D0' : '#7e7e7e'}
              />
            );
          } else if (route.name === 'Categories') {
            return (
              <TouchableOpacity onPress={() => alert('Menu pressed')}>
                <FontAwesome5
                  name='bars'
                  size={24}
                  color={focused ? '#40E0D0' : '#7e7e7e'}
                />
              </TouchableOpacity>
            );
          }
        },
        tabBarActiveTintColor: '#40E0D0', // color Text active (Turquoise Blue)
        tabBarInactiveTintColor: '#7e7e7e', // color Text in-active
        tabBarShowLabel: false, // Hide the labels
        tabBarStyle: {
          display: 'flex',
        },
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Contact' component={Contact} />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='Categories' component={Categories} />
    </Tab.Navigator>
  );
};

export default BottomTab;
