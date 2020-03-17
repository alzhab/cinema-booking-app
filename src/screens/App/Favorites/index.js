import { connect } from "react-redux";
import Favorites from "./Favorites";

const mapStateToProps = state => {
  const { movies } = state.moviesSearch;

  return { movies };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
