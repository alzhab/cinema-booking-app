import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";
import ResetPasswordActions from "./actions";

const CheckCode = ({ code, CheckEmail }) => {
  return dispatch => {
    dispatch(AuthActions.AuthFetchStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(AuthActions.AuthFetchSuccess());

      dispatch(ResetPasswordActions.setCodeChecked(true));
    }, 3000);
  };
};

const CheckEmail = email => {
  return dispatch => {
    dispatch(AuthActions.AuthFetchStart());

    setTimeout(() => {
      dispatch(ResetPasswordActions.setEmailChecked(true));
    }, 3000);
  };
};

const ChangePasswordFetch = ({ email, newPassword }) => {
  return dispatch => {
    dispatch(AuthActions.AuthFetchStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));

      dispatch(AuthActions.AuthFetchError("CANT CHANGE PASSWORD"));
    }, 3000);
  };
};

const SignInOperations = {
  ChangePasswordFetch,
  CheckCode,
  CheckEmail
};

export default SignInOperations;
