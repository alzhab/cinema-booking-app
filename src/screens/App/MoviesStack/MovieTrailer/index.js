import { connect } from "react-redux";
import MovieTrailer from "./MovieTrailer";

const mapStateToProps = state => {
  const { movie, recomendations } = state.movieTrailer;

  return { movie, recomendations };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTrailer);
