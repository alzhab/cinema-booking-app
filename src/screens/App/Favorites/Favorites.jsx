import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../AppHOC";

const Favorites = () => {
  return (
    <View>
      <Text>Favorites</Text>
    </View>
  );
};

export default AppHOC(Favorites);
