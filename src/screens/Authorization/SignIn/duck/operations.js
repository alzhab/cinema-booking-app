import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";

const SignInFetch = userData => {
  return dispatch => {
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
