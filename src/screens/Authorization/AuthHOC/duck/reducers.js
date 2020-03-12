import AuthTypes from "./types";

const initialState = {
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_FETCH_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case AuthTypes.AUTH_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case AuthTypes.AUTH_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
