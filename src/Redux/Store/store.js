import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {combinedReducers} from '../Reducers/index';
import rootSaga from '../Sagas/index';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combinedReducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store