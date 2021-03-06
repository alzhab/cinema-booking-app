import { AuthApi } from "api";
import { AuthActions } from "screens/Authorization/AuthHOC/duck";
import { Mixins } from "styles";
import { AppActions } from "screens/App/AppHOC/duck";

const SignInFetch = userData => {
  return dispatch => {
    const formValid = Mixins.checkFormValid(userData);
    const emailValid = Mixins.checkEmailValid(userData.email);

    if (!formValid) {
      dispatch(AuthActions.AuthSetError("FIELDS NOT VALID"));
      return new Promise((resolve, reject) => {
        resolve("error");
      });
    }

    if (!emailValid) {
      dispatch(AuthActions.AuthSetError("EMAIL NOT VALID"));
      return new Promise((resolve, reject) => {
        resolve("error");
      });
    }

    dispatch(AuthActions.AuthLoadingStart());

    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        dispatch(AuthActions.AuthLoadingStop());
        dispatch(AppActions.AppSetUser(userData));
        resolve("done");
      }, 3000);
    });

    return promise;
  };
};

const SignInOperations = {
  SignInFetch
};

export default SignInOperations;
