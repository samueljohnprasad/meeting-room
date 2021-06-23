import { combineReducers } from "redux";
import inputReducer from './inputReducer'

const rootReducer =combineReducers({
   userForm: inputReducer,
});

export default rootReducer