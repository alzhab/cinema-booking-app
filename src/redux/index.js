import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { WelcomeReducer } from "screens/Authorization/Welcome/duck";
import { SignInReducer } from "screens/Authorization/SignIn/duck";
import { SignUpReducer } from "screens/Authorization/SignUp/duck";
import { ResetPasswordReducer } from "screens/Authorization/ResetPassword/duck";
import { AuthReducer } from "../screens/Authorization/AuthHOC/duck";

const rootReducer = combineReducers({
  welcome: WelcomeReducer,
  signIn: SignInReducer,
  signUp: SignUpReducer,
  resetPassword: ResetPasswordReducer,
  authReducer: AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
