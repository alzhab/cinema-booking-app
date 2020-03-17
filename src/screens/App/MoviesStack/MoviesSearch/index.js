import { connect } from "react-redux";
import MoviesSearch from "./MoviesSearch";

const mapStateToProps = state => {
  const { movies } = state.moviesSearch;

  return { movies };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearch);
