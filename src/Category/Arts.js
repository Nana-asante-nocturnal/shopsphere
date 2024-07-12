import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { product } from "../Database/product";
  
  const artsProducts = product.filter(
    (product) => product.category === "Arts"
  );  
  
  const Arts = ({ navigation }) => { 
    return (
        <View>
            <View style={styles.container}>
      <Text style={styles.boldText}>Arts</Text>
    </View>
          <FlatList
            data={artsProducts}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate("ProductInfo", { product: item })
                }
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{item.name}</Text>
                <Text style={{ color: "#ff5454" }}>GH&#8373; {item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    };
  
  export default Arts; 
  
  const styles = StyleSheet.create({
    productCard: {
      margin: 15,
      alignItems: "center",
      marginBottom: 20,
    //   backgroundColor: "green",
    },
    productImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    productTitle: {
      marginTop: 10,
      textAlign: "center",
      fontWeight: "bold",
    },
    container: {
        marginTop: 10,
        textAlign: "center",
        left:"40%",
        position:"relative",
        fontWeight: "100%",
      },
  });
  