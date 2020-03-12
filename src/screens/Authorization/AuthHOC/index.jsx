import { compose } from "redux";
import { connect } from "react-redux";
import { AuthActions } from "./duck";
import AuthHOC from "./AuthHOC";

const mapStateToProps = (state, ownProps) => {
  const { error, loading } = state.authReducer;

  return {
    error,
    loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setError: err => {
      dispatch(AuthActions.AuthFetchError(err));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), AuthHOC);
