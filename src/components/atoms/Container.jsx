import React from "react";
import { SafeAreaView } from "react-native";
import { Colors } from "styles";
import { Container } from "native-base";

const MyContainer = ({
  bgColor = Colors.MAIN_BG,
  children,
  fullHeight,
  ...props
}) => {
  const Content = fullHeight ? Container : SafeAreaView;

  return (
    <Content
      style={{
        flex: 1,
        backgroundColor: bgColor,
        paddingTop: 30,
        ...props.style
      }}
    >
      {children}
    </Content>
  );
};

export default MyContainer;
