import { combineReducers } from "redux";
import inputReducer from './inputReducer'
import loginReducer from './LoginReducer'

const rootReducer =combineReducers({
   userForm: inputReducer,
    user:loginReducer
});

export default rootReducer