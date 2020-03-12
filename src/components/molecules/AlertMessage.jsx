import React, { useEffect } from "react";
import { Text } from "atoms";
import { Animated, Easing } from "react-native";

const AlertMessage = ({ message, color, afterAlert, bgColor }) => {
  const animation = new Animated.Value(0);

  // Анимация появления сверху и уход через 3 секунды навверх
  useEffect(() => {
    Animated.spring(animation, {
      toValue: message ? 1 : 0,
      duration: 500,
      bounciness: 20,
      easing: Easing.in
    }).start();

    setTimeout(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        easing: Easing.in
      }).start(() => {
        afterAlert();
      });
    }, 3000);
  }, [message]);

  const animStyles = {
    bottom: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-40, 0],
      extrapolate: "clamp"
    })
  };

  return (
    <Animated.View
      style={{
        ...animStyles,
        left: 0,
        right: 0,
        position: "absolute",
        height: 40,
        backgroundColor: bgColor,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999
      }}
    >
      <Text color={color} align="center">
        {message}
      </Text>
    </Animated.View>
  );
};

export default AlertMessage;
