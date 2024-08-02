import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import CartScreen from '../screen/CartScreen';
import BudgetScreen from '../screen/ss'; // Import BudgetScreen
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductInfo from '../screen/ProductInfo';
import AddressScreen from '../screen/AddressScreen';
import Address from '../screen/Address';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
import SphereIcon from '../assets/Sphere.png'; // Adjust the path as necessary


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [user, setUser] = useState(null);
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { color: "#008E97" },
          tabBarStyle: { justifyContent: 'space-evenly' }, // Ensure spacing is even
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="BUDGET"
          component={BudgetScreen}
          options={{
            tabBarLabel: "Sphere",
            tabBarIcon: () => (
              <Image
                source={SphereIcon}
                style={{ width: 90, height: 90 }} // Much larger size
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const loggedInUser = await AsyncStorage.getItem("authToken");
        setUser(loggedInUser);
      } catch (error) {
        console.log(error);
      }
    };

    getLoggedInUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Main" : "Register"}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={BottomTabs} />
        <Stack.Screen options={{ headerShown: false }} name="ProductInfo" component={ProductInfo} />
        <Stack.Screen options={{ headerShown: false }} name="Address" component={AddressScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Add" component={Address} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
