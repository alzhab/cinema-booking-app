import React, { useState, useEffect } from "react";
import { Text } from "atoms";
import { Colors } from "styles";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SelectButton = ({
  active,
  childrens,
  mainText,
  secondText,
  mainTextStyle,
  secondTextStyle,
  disabledBg = Colors.SECOND_BG,
  onPress,
  ...props
}) => {
  const gradientFirstColor = active ? "#fd5c48" : disabledBg;
  const gradientSecondColor = active ? "#9a38e7" : disabledBg;

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={[0.1, 0]}
        end={[0.9, 0.0]}
        colors={[gradientFirstColor, gradientSecondColor]}
        style={{
          paddingVertical: 17,
          paddingHorizontal: 12,
          borderRadius: 15,
          ...props.style
        }}
      >
        <Text
          textTransform="uppercase"
          align="center"
          family="700"
          size={18}
          style={mainTextStyle}
        >
          {mainText}
        </Text>
        {secondText && (
          <Text
            align="center"
            textTransform="uppercase"
            size={10}
            lineHeight={1.2}
            style={secondTextStyle}
          >
            {secondText}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SelectButton;
