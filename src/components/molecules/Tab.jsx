import React, { useEffect, useState } from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Platform
} from "react-native";
import { Icon } from "native-base";
import { Colors } from "styles";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const Tab = ({ onPress, onLongPress, isFocused, icon, loading }) => {
  const [animation] = useState(new Animated.Value(isFocused ? 0 : 1));
  const [loadingAnimation] = useState(new Animated.Value(0));

  const translateYInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: Platform.OS === "ios" ? ["0%", "-30%"] : [0, -30]
  });

  const circleBackInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.SECOND_BG, Colors.ACTIVE]
  });

  const borderTopBottomInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10]
  });

  const borderLeftRightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30]
  });

  const rotateInterpolation = loadingAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"]
  });

  const startRotateAnimation = () => {
    if (loading) {
      Animated.loop(
        Animated.timing(loadingAnimation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.in
        }),
        { iterations: 1000 }
      ).start();
    }
  };

  const startFocusedAnimation = () => {
    Animated.timing(animation, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      easing: Easing.in
    }).start();
  };

  useEffect(() => {
    startFocusedAnimation();

    if (isFocused) {
      loadingAnimation.stopAnimation();
    } else {
      startRotateAnimation();
    }
  }, [isFocused]);

  useEffect(() => {
    startRotateAnimation();
  }, [loading]);

  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      accessibilityStates={isFocused ? ["selected"] : []}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Animated.View
        style={{
          position: "relative",
          paddingVertical: 20,
          justifyContent: "center",
          alignItems: "center",
          transform: [
            {
              translateY: translateYInterpolation
            }
          ]
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: -20,
            right: -20,
            bottom: 0,
            borderRadius: 50,
            zIndex: 2,
            opacity: animation,
            backgroundColor: circleBackInterpolation
          }}
        />

        <Animated.View
          style={{
            position: "absolute",
            top: borderTopBottomInterpolation,
            left: borderLeftRightInterpolation,
            right: borderLeftRightInterpolation,
            bottom: borderTopBottomInterpolation,
            borderRadius: 50,
            opacity: animation,
            backgroundColor: Colors.MAIN_BG
          }}
        />

        <AnimatedIcon
          type="MaterialIcons"
          name={loading && !isFocused ? "replay" : icon}
          style={{
            transform: !isFocused
              ? [
                  {
                    rotate: rotateInterpolation
                  }
                ]
              : [],
            position: "relative",
            zIndex: 3,
            fontSize: 25,
            color: isFocused ? Colors.MAIN_TEXT : Colors.SECOND_TEXT
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Tab;
