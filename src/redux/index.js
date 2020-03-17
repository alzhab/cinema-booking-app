import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { WelcomeReducer } from "screens/Authorization/Welcome/duck";
import { SignInReducer } from "screens/Authorization/SignIn/duck";
import { SignUpReducer } from "screens/Authorization/SignUp/duck";
import { ResetPasswordReducer } from "screens/Authorization/ResetPassword/duck";
import { AuthReducer } from "screens/Authorization/AuthHOC/duck";
import { AppReducer } from "screens/App/AppHOC/duck";
import { LanguageReducer } from "screens/App/ProfileStack/Language/duck";
import { CountryReducer } from "screens/App/ProfileStack/Country/duck";
import { MoviesReducer } from "screens/App/MoviesStack/Movies/duck";
import { MoviesSearchReducer } from "screens/App/MoviesStack/MoviesSearch/duck";
import { MovieTrailerReducer } from "screens/App/MoviesStack/MovieTrailer/duck";
import { NotificationsReducer } from "screens/App/Notifications/duck";

const rootReducer = combineReducers({
  welcome: WelcomeReducer,
  signIn: SignInReducer,
  signUp: SignUpReducer,
  resetPassword: ResetPasswordReducer,
  authReducer: AuthReducer,
  appReducer: AppReducer,
  langReducer: LanguageReducer,
  countryReducer: CountryReducer,
  moviesReducer: MoviesReducer,
  moviesSearch: MoviesSearchReducer,
  movieTrailer: MovieTrailerReducer,
  notifications: NotificationsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
