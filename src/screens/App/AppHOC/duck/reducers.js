import AppTypes from "./types";

const initialState = {
  loading: true,
  loadingScreen: "Profile",
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.APP_SET_USER:
      return {
        ...state,
        user: action.user
      };
    case AppTypes.APP_SET_LOADING:
      return {
        ...state,
        loadingScreen: action.screen,
        loading: action.value
      };
    default:
      return state;
  }
};

export default reducer;
