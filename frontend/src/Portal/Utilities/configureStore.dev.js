/* eslint-disable global-require, no-underscore-dangle */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { reducer as form } from 'redux-form';
import { reducer as token } from '../Actions/token';
import { reducer as user } from '../Actions/user';
import { reducer as status } from '../Actions/status';

const history = createHashHistory();

const configureStore = (initialState) => {
  
  const reducerMap = {
    form,
    status,
    token,  
    user,
    router: connectRouter(history),
    ...initialState
  }

  const rootReducer = combineReducers(reducerMap);

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
  
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(persistedReducer, enhancer);
  persistStore(store);

  return store;
};

export default { configureStore, history };
