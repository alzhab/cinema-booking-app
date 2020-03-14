import AuthTypes from "./types";
import { AsyncStorage } from "react-native";

function AuthLoadingStart() {
  return {
    type: AuthTypes.AUTH_LOADING_START
  };
}

function AuthSetError(error) {
  return {
    type: AuthTypes.AUTH_FETCH_ERROR,
    error
  };
}

function AuthLoadingStop() {
  return {
    type: AuthTypes.AUTH_FETCH_SUCCESS
  };
}

function AuthSetUser(user) {
  if (user) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }

  return {
    type: AuthTypes.AUTH_SET_USER,
    user
  };
}

function AuthSetFirstRun(value) {
  // Создаем поле в AsyncStorage если значение setFirstRun == false
  if (!value) {
    AsyncStorage.setItem("isNotFirstRun", "true");
  }

  return {
    type: AuthTypes.AUTH_SET_FIRSTRUN,
    value
  };
}

const AuthActions = {
  AuthLoadingStart,
  AuthSetError,
  AuthLoadingStop,
  AuthSetUser,
  AuthSetFirstRun
};

export default AuthActions;
