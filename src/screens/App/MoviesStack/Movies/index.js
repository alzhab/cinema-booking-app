import { connect } from "react-redux";
import Movies from "./Movies";

const mapStateToProps = state => {
  const { moviesList, thrailersList, newMoviesList } = state.moviesReducer;

  return { moviesList, thrailersList, newMoviesList };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
