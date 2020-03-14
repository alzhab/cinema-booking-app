import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Platform
} from "react-native";
import { Icon } from "native-base";
import { Colors } from "styles";

const Tab = ({ onPress, onLongPress, isFocused, icon }) => {
  const [animation] = useState(new Animated.Value(isFocused ? 0 : 1));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      easing: Easing.in
    }).start();
  }, [isFocused]);

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

  return (
    <TouchableOpacity
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

        <Icon
          type="MaterialIcons"
          name={icon}
          style={{
            position: "relative",
            zIndex: 3,
            fontSize: 25,
            color: isFocused ? Colors.MAIN_TEXT : Colors.SECOND_TEXT
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Tab;
