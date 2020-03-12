import { connect } from "react-redux";
import SignUp from "./SignUp";
import { SignUpOperations } from "./duck";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    signUpFetch: user => {
      dispatch(SignUpOperations.SignUpFetch(user));
    }
  };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
