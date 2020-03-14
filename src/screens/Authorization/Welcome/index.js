import { connect } from "react-redux";
import Welcome from "./Welcome";
import { AuthActions } from "screens/Authorization/AuthHOC/duck";

const mapStateToProps = state => {
  const { infoList } = state.welcome;

  return { infoList };
};

const mapDispatchToProps = dispatch => {
  return {
    setFirstRun: val => dispatch(AuthActions.AuthSetFirstRun(val))
  };
};

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
