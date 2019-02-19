import reducer from '../reducers/reducer.js';

import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas.js';

const Saga = createSagaMiddleware();

// const token=localStorage.getItem('token');
// const name=localStorage.getItem('name');
// const email=localStorage.getItem('email')

const store =  createStore(reducer,applyMiddleware(Saga));
Saga.run(rootSaga);

export default store;
