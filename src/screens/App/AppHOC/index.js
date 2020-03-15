import { connect } from "react-redux";
import AppHOC from "./AppHOC";
import { compose } from "redux";

const mapStateToProps = state => {
  const { loading, loadingScreen } = state.appReducer;

  return {
    loading,
    loadingScreen
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), AppHOC);
