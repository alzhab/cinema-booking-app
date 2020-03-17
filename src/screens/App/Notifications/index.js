import { connect } from "react-redux";
import Notifications from "./Notifications";

const mapStateToProps = state => {
  const { movies } = state.notifications;
  return { movies };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
