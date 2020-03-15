import AppTypes from "./types";
import { AsyncStorage } from "react-native";

function AppSetUser(user) {
  if (user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }

  return {
    type: AppTypes.APP_SET_USER,
    user
  };
}

function AppSetLoading(value, screen) {
  return {
    type: AppTypes.APP_SET_LOADING,
    screen: screen,
    value: value
  };
}

export default { AppSetUser, AppSetLoading };
