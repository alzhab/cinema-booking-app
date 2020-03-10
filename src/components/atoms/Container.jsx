import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Colors } from "styles";

const MyContainer = ({ bgColor = Colors.MAIN_BG, children, ...props }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor, ...props.style }}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default MyContainer;
