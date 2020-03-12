import SignInTypes from "./types";
import { AsyncStorage } from "react-native";
import { AuthApi } from "api";

const initialState = {
  loginFetchLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SignInTypes.LOGIN_START:
      return {
        ...state,
        loginFetchLoading: true,
        error: ""
      };
    case SignInTypes.LOGIN_ERROR:
      return {
        ...state,
        loginFetchLoading: false,
        error: action.error
      };
    case SignInTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginFetchLoading: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
