import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Flex } from "atoms";
import { Spacing } from "styles";
import { useNavigation } from "@react-navigation/native";

const Button = ({ button, gradientStyle, full, children, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: full ? 0 : Spacing.WRAP,
        width: "100%",
        ...props.style
      }}
      onPress={async () => {
        button.onPress();
      }}
    >
      <LinearGradient
        start={[0.0, 1.0]}
        end={[1.0, 0.0]}
        colors={["#fd5c48", "#9a38e7"]}
        style={{
          padding: 15,
          width: "100%",
          borderRadius: 28,
          ...gradientStyle
        }}
      >
        <Flex layout="center center">
          {button.title ? (
            <Text
              align="center"
              textTransform="capitalize"
              size={25}
              family="700"
            >
              {button.title}
            </Text>
          ) : (
            children
          )}
        </Flex>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
