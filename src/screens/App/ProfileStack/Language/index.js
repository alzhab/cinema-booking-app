import { connect } from "react-redux";
import Language from "./Language";

const mapStateToProps = state => {
  const { languagesList } = state.langReducer;

  return { languagesList };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const LanguageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);

export default LanguageContainer;
