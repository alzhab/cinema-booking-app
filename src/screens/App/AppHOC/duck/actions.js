import AppTypes from "./types";
import { AsyncStorage } from "react-native";

function AppSetUser(user) {
  if (user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  } else {
    AsyncStorage.removeItem("user");
  }

  return {
    type: AppTypes.APP_SET_USER,
    user
  };
}

function AppAddLoading(screen) {
  return {
    type: AppTypes.APP_ADDLOADING,
    screen
  };
}

function AppDeleteLoading(screen) {
  return {
    type: AppTypes.APP_DELETE_LOADING,
    screen
  };
}

function AppSetNotifications(value) {
  return {
    type: AppTypes.APP_SET_NOTIFICATIONS,
    value
  };
}

export default {
  AppSetUser,
  AppAddLoading,
  AppDeleteLoading,
  AppSetNotifications
};
