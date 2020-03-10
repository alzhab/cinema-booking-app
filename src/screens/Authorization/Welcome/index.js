import { connect } from "react-redux";
import Welcome from "./Welcome";

const mapStateToProps = state => {
  const { infoList } = state.welcome;

  return { infoList };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
