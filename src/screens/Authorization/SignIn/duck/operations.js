import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";
import { Mixins } from "styles";

const SignInFetch = userData => {
  return dispatch => {
    const formValid = Mixins.checkFormValid(userData);

    if (!formValid) {
      dispatch(AuthActions.AuthSetError("FIELDS NOT VALID"));
      return new Promise((resolve, reject) => {
        resolve("error");
      });
    }

    dispatch(AuthActions.AuthFetchStart());

    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        AuthApi.setUser(userData)
          .then(res => {
            dispatch(AuthActions.AuthFetchSuccess());
            resolve("done!");
          })
          .catch(err => {
            dispatch(AuthActions.AuthSetError("USER NOT FOUND"));
          });
      }, 3000);
    });

    return promise;
  };
};

const SignInOperations = {
  SignInFetch
};

export default SignInOperations;
