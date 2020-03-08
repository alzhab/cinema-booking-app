import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import { HomeReducer } from "screens/Home/duck";


const rootReducer = combineReducers({
  home: HomeReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store