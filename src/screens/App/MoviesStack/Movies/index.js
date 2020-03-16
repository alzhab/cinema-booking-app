import { connect } from "react-redux";
import Movies from "./Movies";

const mapStateToProps = state => {
  const { moviesList, thrailersList } = state.moviesReducer;

  return { moviesList, thrailersList };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
