import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

// import { AppStatusState } from './ducks/appStatus/types';
// import {queryKeyState} from "./ducks/queryKey/types";
// import { ConfigState } from './ducks/config/types';
// import { DeleteKeyState } from "./ducks/deleteKey/types";
// import {createKeyState} from "./ducks/createKey/types";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;