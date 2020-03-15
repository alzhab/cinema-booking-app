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

function AppAddLoading(screen) {
  return {
    type: AppTypes.APP_ADDLOADING,
    screen: screen
  };
}

function AppDeleteLoading(screen) {
  return {
    type: AppTypes.APP_DELETE_LOADING,
    screen: screen
  };
}

export default { AppSetUser, AppAddLoading, AppDeleteLoading };
