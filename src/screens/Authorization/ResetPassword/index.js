import { connect } from "react-redux";
import ResetPassword from "./ResetPassword";
import { ResetPasswordOperations, ResetPasswordActions } from "./duck";

const mapStateToProps = state => {
  const { emailChecked, codeChecked } = state.resetPassword;
  return { emailChecked, codeChecked };
};

const mapDispatchToProps = dispatch => {
  return {
    resetCheck: () => dispatch(ResetPasswordActions.resetCheck()),
    checkEmail: email => dispatch(ResetPasswordOperations.CheckEmail(email)),
    checkCode: userData =>
      dispatch(ResetPasswordOperations.CheckCode(userData)),
    changePassword: userData =>
      dispatch(ResetPasswordOperations.ChangePasswordFetch(userData))
  };
};

const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);

export default ResetPasswordContainer;
