import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../../AppHOC";

const MovieTrailer = () => {
  return (
    <View>
      <Text>MovieTrailer</Text>
    </View>
  );
};

export default AppHOC(MovieTrailer, { headerTitle: "MovieTrailer" });
