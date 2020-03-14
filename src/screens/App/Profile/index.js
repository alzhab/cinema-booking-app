import { connect } from "react-redux";
import SignIn from "./Profile";
import { SignInOperations, SignInActions } from "./duck";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    SignInFetch: user => dispatch(SignInOperations.SignInFetch(user))
  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
