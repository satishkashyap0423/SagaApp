import {all} from 'redux-saga/effects';
import loginScreenSaga from './loginScreenSaga';

function* rootSaga() {
 yield all([loginScreenSaga()]);
}
 
export default rootSaga;