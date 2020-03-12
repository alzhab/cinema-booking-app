import { connect } from "react-redux";
import SignIn from "./SignIn";
import { SignInOperations } from "./duck";

const mapStateToProps = state => {
  const { loginFetchLoading, error } = state.signIn;

  return { loginFetchLoading, error };
};

const mapDispatchToProps = dispatch => {
  return {
    loginFetch: user => dispatch(SignInOperations.LoginFetch(user))
  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
