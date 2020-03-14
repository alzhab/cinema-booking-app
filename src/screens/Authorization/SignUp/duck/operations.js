import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";
import { Mixins } from "styles";

const SignUpFetch = userData => {
  return dispatch => {
    const formValid = Mixins.checkFormValid(userData);
    const emailValid = Mixins.checkEmailValid(userData.email);
    const confirmPasswordValid = Mixins.checkConfirmPasswordValid(userData);

    if (!formValid) {
      dispatch(AuthActions.AuthSetError("FIELDS NOT VALID"));
      return;
    }

    if (!emailValid) {
      dispatch(AuthActions.AuthSetError("EMAIL NOT VALID"));
      return new Promise((resolve, reject) => {
        resolve("error");
      });
    }

    if (!confirmPasswordValid) {
      dispatch(AuthActions.AuthSetError("PASSWORD NOT EQUAL"));
      return;
    }

    dispatch(AuthActions.AuthLoadingStart());

    setTimeout(() => {
      // dispatch(SignInActions.LoginSuccess(userData));
      dispatch(AuthActions.AuthSetError("CAN'T CREATE USER"));
    }, 3000);
  };
};

const SignUpOperations = {
  SignUpFetch
};

export default SignUpOperations;
