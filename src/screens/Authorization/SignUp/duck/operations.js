import { AuthApi } from "api";
import { AuthActions } from "../../AuthHOC/duck";
import { Mixins } from "styles";

const SignUpFetch = userData => {
  return dispatch => {
    const formValid = Mixins.checkFormValid(userData);

    if (!formValid) {
      dispatch(AuthActions.AuthSetError("FIELDS NOT VALID"));
      return;
    }

    dispatch(AuthActions.AuthFetchStart());

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
