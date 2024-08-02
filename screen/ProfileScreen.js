import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from "../assets/Shopsphere.png";
import ProfileCard from "../components/ProfileCard";
import { LinearGradient } from 'expo-linear-gradient';
import OrderCard from "../components/OrderCard";
import AccountCard from "../components/AccountCard";
import {
  accountData,
  infoData,
  OrderData,
  WishListData,
} from "../data/ProfileData";

const ProfileScreen = ({ navigation }) => {
  useEffect(() =>
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Image
          source={require("../assets/Shopsphere.png")}
          style={{ height: 110, width: 190, marginLeft: 1, backgroundColor: "" }}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <MaterialIcons
            name="notifications-none"
            size={26}
            style={{ marginRight: 5 }}
          />
          <MaterialIcons name="search" size={26} />
        </View>
      ),
      headerStyle: {
        backgroundColor: "rgba(5, 250, 242,0.4)",
        borderBottomWidth: 0,
      },
    })
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={["rgba(5, 250, 242,0.4)", "#fff"]}>
        <View style={styles.titleCont}>
          <Text style={styles.titleText}>Hello There, Customer</Text>
          <MaterialIcons
            name="account-circle"
            color={"#b0b0b0"}
            size={40}
            style={{
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 50,
              backgroundColor: "white",
            }}
          />
        </View>
        <View style={styles.actionCont}>
          {infoData.map((data) => (
            <ProfileCard title={data.title} />
          ))}
        </View>
      </LinearGradient>
      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Orders</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {OrderData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Wishlist</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {WishListData.map((data) => (
            <OrderCard image={data.image} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.orderCont}>
        <Text style={styles.orderText}>Your Account</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {accountData.map((data) => (
            <AccountCard title={data.title} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  actionCont: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  orderCont: {
    marginTop: 15,
    borderBottomColor: "#b8baba",
    borderBottomWidth: 3,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  orderText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
});
