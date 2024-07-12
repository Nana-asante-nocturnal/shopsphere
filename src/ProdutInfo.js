import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { product } from "./Database/product";

const ProdutInfo = ({ navigation, route }) => {
  const { product } = route.params;
  return (
    <View>
      <TouchableOpacity key={product.id} style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={{ color: "#ff5454" }}>GH&#8373; {product.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProdutInfo;

const styles = StyleSheet.create({
  productCard: {
    marginRight: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  productTitle: {
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
