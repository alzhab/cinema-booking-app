import AuthTypes from "./types";

const initialState = {
  user: null,
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_LOADING_START:
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
    case AuthTypes.AUTH_SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default reducer;
