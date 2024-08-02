import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const OrderCard = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 120,
          width: 180,
          borderColor: "#b8baba",
          borderWidth: 1,
          borderRadius: 10,
          resizeMode: "contain",
          backgroundColor: "white",
        }}
        source={{
          uri:image,
        }}
      />
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginBottom: 10,
  },
});
