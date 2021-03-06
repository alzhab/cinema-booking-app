import { Dimensions, PixelRatio, Platform } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const isIOS = Platform.OS === "ios";
const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = size => size * PixelRatio.getFontScale();

function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, "margin");
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, "padding");
}

export function boxShadow(
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius
  };
}

export const checkEmailValid = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text);
};

export const checkFormValid = fields => {
  for (var key in fields) {
    if (fields[key] === null || fields[key] === "") return false;
  }
  return true;
};

export const checkConfirmPasswordValid = ({ password, confirmPassword }) => {
  if (password !== confirmPassword) {
    return false;
  }

  return true;
};

export const emptyArray = length => {
  var data = [];

  for (var i = 0; i < length; i++) {
    data.push(0);
  }

  return data;
};
