import {put, putResolve, takeLatest} from 'redux-saga/effects';
import {userLogin} from 'api/login';
import { FetchInstance } from '../../Services/services';
 
function* loginUser({payload}) {
 try {
   const response = yield FetchInstance(payload);
   console.log('saga', response)
   yield put({type: 'LOGIN_SUCCESS', response});
   return putResolve("hi")
 } catch (error) {
   yield put({type: 'LOGIN_FAILURE', error: error.message});
 }
}
export default function* loginScreenSaga() {

 yield takeLatest('LOGIN_REQUEST', loginUser);
}