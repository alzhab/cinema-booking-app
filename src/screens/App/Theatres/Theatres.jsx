import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../AppHOC";

const Theatres = () => {
  return (
    <View>
      <Text>Theatres</Text>
    </View>
  );
};

export default AppHOC(Theatres, "Theatres");
