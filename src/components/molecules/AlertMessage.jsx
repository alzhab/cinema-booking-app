import React, { useEffect } from "react";
import { Text } from "atoms";
import { Animated, Easing } from "react-native";

const AlertMessage = ({ message, color, bgColor }) => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: message ? 1 : 0,
      duration: 500,
      easing: Easing.in
    }).start();
  }, [message]);

  return (
    <Animated.View
      style={{
        marginTop: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-30, 0]
        }),
        top: 0,
        left: 0,
        right: 0,
        position: "absolute",
        height: 30,
        backgroundColor: bgColor,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text color={color} align="center">
        {message}
      </Text>
    </Animated.View>
  );
};

export default AlertMessage;
