import { View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
//import { login } from '../api/firebase/auth';
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");
                if (token) {
                    navigation.replace("Main");
                }
            } catch (err) {
                console.log("error message", err);
            }
        };
        checkLoginStatus();
    }, []);

    const handleData = async () => {
        const user = {
            email: email,
            password: password,
        };
        
        if (user.email == '' || user.password == '') {
            Alert.alert("Please fill all the fields");
        } else {
            try {
                //Simulate successful login without actual network request
                const token = "dummyAuthToken";
                // const signin = login(email,password)
                // const token = signin.user?.uid
                await AsyncStorage.setItem("authToken", token);
                Alert.alert("Login Successfully");
                navigation.replace("Main");
            } catch (error) {
                Alert.alert("Login Error", "An error occurred during login");
                console.log(error);
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", marginTop: 50 }}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={require("../assets/Shopsphere.png")}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            marginTop: 12,
                            color: "#041E42",
                        }}
                    >
                        Login In to your Account
                    </Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30,
                    }}>
                        <MaterialIcons style={{ marginLeft: 8, color: "gray" }} name="email" size={24} color="black"></MaterialIcons>
                        <TextInput
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 16 : 16,
                                height: 20
                            }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder='Enter Your Email'
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        backgroundColor: "#D0D0D0",
                        paddingVertical: 5,
                        borderRadius: 5,
                        marginTop: 30,
                    }}>
                        <AntDesign
                            name="lock1"
                            size={24}
                            color="gray"
                            style={{ marginLeft: 8 }}
                        />
                        <TextInput
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: password ? 16 : 16,
                                height: 20
                            }}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder='Enter Your Password'
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                        Forgot Password
                    </Text>
                </View>
                <View style={{ marginTop: 50 }} />
                <Pressable
                    onPress={handleData}
                    style={{
                        width: 200,
                        backgroundColor: "#FEBE10",
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        Login
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Register")}
                    style={{ marginTop: 15 }}
                >
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                        Don't have an account? Sign Up
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LoginScreen;
