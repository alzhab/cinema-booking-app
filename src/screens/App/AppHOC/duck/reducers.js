import AppTypes from "./types";

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.APP_SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
