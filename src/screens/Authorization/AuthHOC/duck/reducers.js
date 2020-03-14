import AuthTypes from "./types";

const initialState = {
  user: null,
  isFirstRun: false,
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
    case AuthTypes.AUTH_SET_FIRSTRUN:
      return {
        ...state,
        isFirstRun: action.value
      };
    default:
      return state;
  }
};

export default reducer;
