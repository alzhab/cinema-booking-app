import SignInActions from "./actions";
import { AuthApi } from "api";

const LoginFetch = userData => {
  return dispatch => {
    AuthApi.setUser(userData);
    dispatch(SignInActions.LoginStart());

    setTimeout(() => {
      AuthApi.getUser().then(res => {
        console.log(res);
      });
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(SignInActions.LoginError("User Not Found"));
    }, 3000);
  };
};

const SignInOperations = {
  LoginFetch
};

export default SignInOperations;
