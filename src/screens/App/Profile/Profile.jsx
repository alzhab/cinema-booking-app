import React from "react";
import { View, Text } from "react-native";
import AppHOC from "../AppHOC";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default AppHOC(Profile, "Profile");
