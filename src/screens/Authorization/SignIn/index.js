import {
  connect
} from 'react-redux';
import SignIn from './SignIn';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;