import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../AppHOC";

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

export default AppHOC(Notifications, { headerTitle: "Notifications" });
