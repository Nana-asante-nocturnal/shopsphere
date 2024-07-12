import { View, Text } from "react-native";
import React from "react";

import { categories } from "./Database/categories";

function Details({ navigation, route }) {
  const { categories } = route.params;
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default Details;
