import SignInTypes from "./types";

function LoginStart(data) {
  return {
    type: SignInTypes.LOGIN_START
  };
}

function LoginError(error) {
  return {
    type: SignInTypes.LOGIN_ERROR,
    error
  };
}

function LoginSuccess(user) {
  return {
    type: SignInTypes.LOGIN_SUCCESS,
    user
  };
}

const SignInActions = {
  LoginStart,
  LoginError,
  LoginSuccess
};

export default SignInActions;
