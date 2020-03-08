import {
  connect
} from 'react-redux';
import SignUp from './SignUp';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUpContainer;