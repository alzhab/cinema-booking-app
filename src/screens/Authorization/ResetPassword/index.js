import {
  connect
} from 'react-redux';
import ResetPassword from './ResetPassword';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

export default ResetPasswordContainer;