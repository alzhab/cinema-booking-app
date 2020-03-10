import React from "react";
import { Image } from "react-native";
import { Flex, Text } from "atoms";
import { Mixins, Spacing } from "styles";

const Logo = () => (
  <Flex layout="center center">
    <Image
      source={require("assets/images/logo.png")}
      style={{
        width: Mixins.WINDOW_WIDTH * 0.3,
        height: Mixins.WINDOW_WIDTH * 0.3
      }}
    />
    <Text
      align="center"
      size={20}
      lineHeight={2}
      textTransform="uppercase"
      family="700"
      style={{ paddingHorizontal: Spacing.WRAP }}
    >
      movie{" "}
      <Text
        color="active"
        align="center"
        size={20}
        lineHeight={2}
        family="700"
        textTransform="uppercase"
        style={{ paddingHorizontal: Spacing.WRAP }}
      >
        booking
      </Text>{" "}
      app
    </Text>
  </Flex>
);

export default Logo;
