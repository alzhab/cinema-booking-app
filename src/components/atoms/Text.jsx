import React from "react";
import { Text } from "native-base";
import { Typography, Colors } from "styles";
import { Mixins } from "styles";

const MyText = ({
  family = "400",
  size = Typography.FONT_SIZE_REGULAR,
  align = "left",
  color = "main",
  lineHeight = 1,
  textTransform = "none",
  children,
  full,
  ...props
}) => {
  switch (color) {
    case "main":
      color = Colors.MAIN_TEXT;
      break;
    case "second":
      color = Colors.SECOND_TEXT;
      break;
    case "active":
      color = Colors.ACTIVE;
      break;
    case "second_active":
      color = Colors.SECOND_ACTIVE;
      break;
  }

  switch (family) {
    case "400":
      family = Typography.FONT_FAMILY_REGULAR;
      break;
    case "700":
      family = Typography.FONT_FAMILY_BOLD;
      break;
    case "line":
      family = Typography.FONT_FAMILY_LINE;
      break;
  }

  return (
    <Text
      style={{
        fontSize: Mixins.scaleFont(size),
        fontFamily: family,
        color,
        textAlign: align,
        lineHeight: size * lineHeight,
        textTransform,
        width: full ? "100%" : null,
        ...props.style
      }}
    >
      {children}
    </Text>
  );
};

export default MyText;
