import { connect } from "react-redux";
import SignIn from "./SignIn";
import { SignInOperations, SignInActions } from "./duck";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginFetch: user => dispatch(SignInOperations.LoginFetch(user))
  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
