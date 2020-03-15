import { connect } from "react-redux";
import AppHOC from "./AppHOC";
import { compose } from "redux";

const mapStateToProps = state => {
  const { loadingScreens } = state.appReducer;

  return {
    loadingScreens
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), AppHOC);
