// In App.js in a new project
import { categories } from "./Database/product";

import * as React from "react";
import { View, Text } from "react-native";

function About({ navigation, route }) {
  const { categories } = route.params;
  return (
    <View>
      <Text>{categories.name}</Text>
    </View>
  );
}

export default About;
