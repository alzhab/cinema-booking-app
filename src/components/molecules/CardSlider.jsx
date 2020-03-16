import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Easing, Animated } from "react-native";
import { Flex, Text } from "atoms";
import { Colors, Mixins } from "styles";

const CardSlider = ({ data, isActive }) => {
  const [animation, setAnimation] = useState(
    new Animated.Value(isActive ? 0 : 1)
  );

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive ? 1 : 0,
      duration: 350,
      easing: Easing.in
    }).start();
  }, [isActive]);

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Mixins.WINDOW_HEIGHT * 0.35, Mixins.WINDOW_HEIGHT * 0.45]
  });

  return (
    <Flex style={{ width: Mixins.WINDOW_WIDTH * 0.65 }}>
      <Animated.View
        style={{
          borderRadius: 30,
          height: heightInterpolation,
          width: "100%",
          overflow: "hidden",
          marginBottom: 20
        }}
      >
        <Image
          style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
          source={data.image}
        />
      </Animated.View>

      <Animated.View style={{ opacity: animation }}>
        <Flex dir="row" alignItems="center" style={{ marginBottom: 15 }}>
          <Text
            family="700"
            size={14}
            lineHeight={1.1}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 13,
              borderRadius: 6,
              borderColor: Colors.MAIN_TEXT,
              borderWidth: 1.5,
              marginRight: 10
            }}
          >
            IMDb
          </Text>
          <Text family="700" size={14}>
            {data.rating}
          </Text>
        </Flex>

        <Text family="700" size={18} maxLines={1} style={{ marginBottom: 13 }}>
          {data.title}
        </Text>

        <Text size={14} textTransform="capitalize">
          {data.tags.join(", ")}
        </Text>
      </Animated.View>
    </Flex>
  );
};

export default CardSlider;
