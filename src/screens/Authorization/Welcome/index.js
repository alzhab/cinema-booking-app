import {
  connect
} from 'react-redux';
import Welcome from './Welcome';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

export default WelcomeContainer;