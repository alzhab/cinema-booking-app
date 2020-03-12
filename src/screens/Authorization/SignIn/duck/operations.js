import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";

const LoginFetch = userData => {
  return dispatch => {
    AuthApi.setUser(userData);
    dispatch(AuthActions.AuthFetchStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(AuthActions.AuthFetchError("USER NOT FOUND"));
    }, 3000);
  };
};

const SignInOperations = {
  LoginFetch
};

export default SignInOperations;
