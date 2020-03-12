import AuthTypes from "./types";

function AuthFetchStart() {
  return {
    type: AuthTypes.AUTH_FETCH_START
  };
}

function AuthFetchError(error) {
  return {
    type: AuthTypes.AUTH_FETCH_ERROR,
    error
  };
}

function AuthFetchSuccess() {
  return {
    type: AuthTypes.AUTH_FETCH_SUCCESS
  };
}

const AuthActions = {
  AuthFetchStart,
  AuthFetchError,
  AuthFetchSuccess
};

export default AuthActions;
