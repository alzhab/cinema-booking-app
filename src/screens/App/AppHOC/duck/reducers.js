import AppTypes from "./types";

const initialState = {
  loadingScreens: [],
  showNotifications: false,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.APP_SET_USER:
      return {
        ...state,
        user: action.user
      };
    case AppTypes.APP_ADD_LOADING:
      return {
        ...state,
        loadingScreens: state.loadingScreens.push(action.screen)
      };
    case AppTypes.APP_DELETE_LOADING:
      return {
        ...state,
        loadingScreens: state.loadingScreens.filter(
          screen => screen !== action.screen
        )
      };
    case AppTypes.APP_SET_NOTIFICATIONS:
      return {
        ...state,
        showNotifications: action.value
      };
    default:
      return state;
  }
};

export default reducer;
