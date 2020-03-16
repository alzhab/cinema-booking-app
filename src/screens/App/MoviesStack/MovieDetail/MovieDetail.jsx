import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../../AppHOC";

const MovieDetail = () => {
  return (
    <View>
      <Text>MovieDetail</Text>
    </View>
  );
};

export default AppHOC(MovieDetail, { headerTitle: "Movie Detail" });
