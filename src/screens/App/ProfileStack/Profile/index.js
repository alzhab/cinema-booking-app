import { connect } from "react-redux";
import Profile from "./Profile";
import { AppActions } from "../../AppHOC/duck";

const mapStateToProps = state => {
  const { showNotifications } = state.appReducer;
  return { showNotifications };
};

const mapDispatchToProps = dispatch => {
  return {
    setNotifications: value => dispatch(AppActions.AppSetNotifications(value)),
    logout: () => dispatch(AppActions.AppSetUser(null))
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
