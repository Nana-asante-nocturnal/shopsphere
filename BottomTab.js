import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Icons

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
          } else if (route.name === 'Contact') {
            iconName = 'account';
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
          } else if (route.name === 'Categories') {
            iconName = 'dialpad';
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={focused ? '#f46e0b' : '#7e7e7e'}
            />
          );
        },
        tabBarActiveTintColor: '#f46e0b', // color Text active
        tabBarInactiveTintColor: '#7e7e7e', // color Text in-active
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold', // additional style
        },
        tabBarStyle: {
          display: 'flex',
        },
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Categories' component={Categories} />
      <Tab.Screen name='Contact' component={Contact} />
      <Tab.Screen name='Cart' component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomTab;
