// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar,StyleSheet,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './src/About';
import BottomTab from './BottomTab';
import Login from './src/Login';
import SignUp from './src/SignUp';
import ProdutInfo from './src/ProdutInfo';
import Electronics from './src/Category/Electronics';
import Fashion from './src/Category/Fashion';
import Food from './src/Category/Food';
import Sports from './src/Category/Sports';
import Accessories from './src/Category/Accessories';
import Arts from './src/Category/Arts';
import Others from './src/Category/Others';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <StatusBar/>
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="ProductInfo" component={ProdutInfo} />
        <Stack.Screen name="Electronics" component={Electronics} />
        <Stack.Screen name="Fashion" component={Fashion} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Accessories" component={Accessories} />
        <Stack.Screen name="Arts" component={Arts} />
        <Stack.Screen name="Others" component={Others} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  container :{
    flex :1,
    backgroundColor : '#ff0',
    paddingTop : Platform.OS === 'andriod' ? StatusBar.currentheight : 0,
  }
})

export default App;