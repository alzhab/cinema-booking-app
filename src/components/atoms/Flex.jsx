import React from "react";
import { View, Text } from "react-native";

const Flex = ({
  dir = "column",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  layout = `${justifyContent} ${alignItems}`,
  children,
  ...props
}) => {
  layout = layout.split(" ");

  return (
    <View
      style={{
        flexDirection: dir,
        justifyContent: layout[0],
        alignItems: layout[1],
        ...props.style
      }}
    >
      {children}
    </View>
  );
};

export default Flex;
