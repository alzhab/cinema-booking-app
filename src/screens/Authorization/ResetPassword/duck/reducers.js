import ResetPasswordTypes from "./types";

const initialState = {
  emailChecked: false,
  codeChecked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ResetPasswordTypes.SET_CHECKED_EMAIL:
      return {
        ...state,
        emailChecked: true
      };
    case ResetPasswordTypes.SET_CHECKED_CODE:
      return {
        ...state,
        codeChecked: true
      };
    case ResetPasswordTypes.RESET_CHECK:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
