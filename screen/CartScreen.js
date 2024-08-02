import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      header: () => (
        <View style={styles.headerContainer}>
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" color={"gray"} size={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search ShopSphere.gh"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.micContainer}>
            <MaterialIcons name="mic-none" size={26} />
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DeliveryAddressCard />
      <View style={styles.subCont}>
        <Text style={styles.titleText}>Subtotal</Text>
        <Text style={styles.priceText}>₵948.00</Text>
      </View>
      <View style={styles.deliveryCont}>
        <View style={styles.deliveryIconCont}>
          <MaterialIcons name='verified' color={"teal"} size={20} style={styles.iconStyle} />
        </View>
        <View style={styles.deliveryTextCont}>
          <Text style={styles.deliveryText}>
            Your order is eligible for FREE delivery. Select this option at Checkout
          </Text>
        </View>
      </View>
      <View style={styles.buyBtn}>
        <Pressable style={styles.btnCont}>
          <Text style={styles.btnText}>Proceed to buy (3 items)</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "rgba(5, 250, 242, 0.4)",
    flexDirection: "row",
    width: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b8baba",
    margin: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    borderRadius: 5,
    height: 40,
  },
  searchInput: {
    outline: "none",
    width: "92%",
    height: "90%",
    borderWidth: 0,
    paddingLeft: 10,
    backgroundColor: "white",
    paddingBottom: 2,
  },
  micContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "10%",
  },
  subCont: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
  deliveryCont: {
    padding: 10,
    flexDirection: "row",
  },
  deliveryIconCont: {
    width: "10%",
  },
  deliveryTextCont: {
    width: "90%",
  },
  iconStyle: {
    backgroundColor: "white",
  },
  deliveryText: {
    color: "teal",
  },
  buyBtn: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  btnCont: {
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gold",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  btnText: {
    fontWeight: "600",
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 10,
  },
});
