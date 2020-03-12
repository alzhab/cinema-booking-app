import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";

const SignUpFetch = userData => {
  return dispatch => {
    AuthApi.setUser(userData);
    dispatch(AuthActions.AuthFetchStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(AuthActions.AuthFetchError("CANT CREATE USER"));
    }, 3000);
  };
};

const SignUpOperations = {
  SignUpFetch
};

export default SignUpOperations;
