import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeTop}></View>
      <View>
        <View style={styles.title}>
          <Text style={styles.active}>Login</Text>
          <Text
            style={styles.inactive}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </View>
        <TextInput placeholder='Username or Email' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} />
      </View>
      <Text
        style={styles.login}
        onPress={() => navigation.navigate('BottomTab')}>
        Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orangeTop: {
    height: '30%',
    backgroundColor: '#EBA928',
    width: '100%',
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
  },
  title: {
    margin: 20,
    marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  active: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    paddingHorizontal: 12,
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
  },
  inactive: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 'auto',
    backgroundColor: '#e8e8e8',
    padding: 10,
    width: '80%',
    borderRadius: 20,
    marginVertical: 20,
  },
  login: {
    position: 'relative',
    bottom: -100,
    marginHorizontal: 'auto',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
});

export default Login;
