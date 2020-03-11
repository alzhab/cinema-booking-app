import React from "react";
import { SafeAreaView } from "react-native";
import { Colors } from "styles";

const MyContainer = ({ bgColor = Colors.MAIN_BG, children, ...props }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bgColor,
        paddingTop: 30,
        ...props.style
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default MyContainer;
