import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
export const combinedReducers = combineReducers({
    loginReducer:loginReducer
});
   