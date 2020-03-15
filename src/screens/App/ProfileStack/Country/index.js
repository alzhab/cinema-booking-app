import { connect } from "react-redux";
import Country from "./Country";

const mapStateToProps = state => {
  const { countriesList } = state.countryReducer;

  return { countriesList };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const CountryContainer = connect(mapStateToProps, mapDispatchToProps)(Country);

export default CountryContainer;
