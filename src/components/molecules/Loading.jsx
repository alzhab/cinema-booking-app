import React, { useEffect } from "react";
import { Spinner } from "native-base";
import { Colors } from "styles";
import Animated from "react-native-reanimated";
import { Easing } from "react-native";

const Loading = () => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      easing: Easing.in,
      duration: 500
    }).start();
  }, []);

  const loadingStyle = {
    opacity: animation
  };

  return (
    <Animated.View
      layout="center center"
      style={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        flex: 1,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        ...loadingStyle
      }}
    >
      <Spinner color={Colors.ACTIVE} style={{ transform: [{ scale: 1 }] }} />
    </Animated.View>
  );
};

export default Loading;
