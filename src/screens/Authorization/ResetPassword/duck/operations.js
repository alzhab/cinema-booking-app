import { AuthActions } from "../../AuthHOC/duck";
import ResetPasswordActions from "./actions";
import { Mixins } from "styles";

const CheckCode = ({ code, CheckEmail }) => {
  return dispatch => {
    const formIsValid = Mixins.checkFormValid({ code });

    if (!formIsValid) {
      dispatch(AuthActions.AuthSetError("Code cant be empty"));
      return;
    }

    dispatch(AuthActions.AuthLoadingStart());

    setTimeout(() => {
      dispatch(AuthActions.AuthLoadingStop());
      dispatch(ResetPasswordActions.setCodeChecked(true));
    }, 3000);
  };
};

const CheckEmail = email => {
  return dispatch => {
    const emailValid = Mixins.checkEmailValid(email);

    if (!emailValid) {
      dispatch(AuthActions.AuthSetError("EMAIL NOT VALID"));
      return;
    }

    dispatch(AuthActions.AuthLoadingStart());

    setTimeout(() => {
      dispatch(AuthActions.AuthLoadingStop());
      dispatch(ResetPasswordActions.setEmailChecked(true));
    }, 3000);
  };
};

const ChangePasswordFetch = ({ email, password, confirmPassword }) => {
  return dispatch => {
    const confirmPasswordValid = Mixins.checkConfirmPasswordValid({
      password,
      confirmPassword
    });

    if (!confirmPasswordValid) {
      dispatch(AuthActions.AuthSetError("PASSWORD NOT EQUAL"));
      return;
    }

    dispatch(AuthActions.AuthLoadingStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(AuthActions.AuthSetError("CANT CHANGE PASSWORD"));
    }, 3000);
  };
};

const SignInOperations = {
  ChangePasswordFetch,
  CheckCode,
  CheckEmail
};

export default SignInOperations;
