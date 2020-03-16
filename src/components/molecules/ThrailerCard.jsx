import React from "react";
import { Flex } from "atoms";
import { Image, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { Mixins, Colors } from "styles";

const ThrailerCard = () => {
  return (
    <Flex
      style={{
        borderRadius: 5,
        width: Mixins.WINDOW_WIDTH * 0.33,
        height: (Mixins.WINDOW_WIDTH * 0.33) / 2,
        overflow: "hidden",
        position: "relative"
      }}
      layout="center center"
    >
      <Image
        source={require("assets/images/poster.jpg")}
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
      />
      <Icon
        type="Feather"
        name="play-circle"
        style={{ color: Colors.MAIN_TEXT }}
      />
      <Flex
        style={{
          position: "absolute",
          backgroundColor: "#000",
          opacity: 0.7,
          top: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      ></Flex>
    </Flex>
  );
};

export default ThrailerCard;
