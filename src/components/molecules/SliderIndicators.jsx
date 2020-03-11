import React, { useEffect, useState } from "react";
import { Flex } from "atoms";
import { Animated } from "react-native";

const SliderIndicator = ({ isActive }) => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    if (isActive) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 350
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 350
      }).start();
    }
  }, [isActive]);

  const indicatorStyle = {
    transform: [
      {
        scale: animation
      }
    ],
    opacity: animation
  };

  return (
    <Flex
      layout="center center"
      style={{
        width: 18,
        height: 18,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: "#f8aa25",
        marginHorizontal: 13
      }}
    >
      {isActive && (
        <Animated.View
          style={{
            backgroundColor: "#f8aa25",
            width: "50%",
            height: "50%",
            ...indicatorStyle
          }}
        ></Animated.View>
      )}
    </Flex>
  );
};

const SliderIndicators = ({ active, data }) => (
  <Flex layout="center center" style={{ width: "100%" }} dir="row">
    {data.map((item, index) => (
      <SliderIndicator key={index} isActive={index === active} />
    ))}
  </Flex>
);

export default SliderIndicators;
