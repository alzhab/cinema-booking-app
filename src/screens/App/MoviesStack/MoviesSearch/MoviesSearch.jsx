import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../../AppHOC";

const MoviesSearch = () => {
  return (
    <View>
      <Text>MoviesSearch</Text>
    </View>
  );
};

export default AppHOC(MoviesSearch, { headerTitle: "Movies Search" });
