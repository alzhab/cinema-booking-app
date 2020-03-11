import React from "react";
import { Flex, Text } from "atoms";
import { Mixins, Spacing } from "styles";
import { Image } from "react-native";
import Button from "./Button";

const Slide = ({ title, text, image, button }) => (
  <Flex layout="flex-end center" style={{ width: Mixins.WINDOW_WIDTH }}>
    <Flex
      style={{
        height: Mixins.WINDOW_HEIGHT * 0.4,
        width: Mixins.WINDOW_WIDTH * 0.9
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        source={image}
        style={{
          width: "80%",
          height: "80%"
        }}
        resizeMode="contain"
      />
    </Flex>

    <Text
      textTransform="uppercase"
      size={25}
      family="line"
      align="center"
      style={{ marginBottom: 25 }}
    >
      {title}
    </Text>

    {text && (
      <Text
        align="center"
        size={14}
        lineHeight={1.3}
        style={{
          paddingHorizontal: Spacing.WRAP,
          marginBottom: button ? 15 : 0
        }}
      >
        {text}
      </Text>
    )}

    {button && <Button button={button} />}
  </Flex>
);

export default Slide;
