import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { reducer as form } from 'redux-form';
import { reducer as token } from '../Actions/token';
import { reducer as user } from '../Actions/user';
import { reducer as status } from '../Actions/status';

const history = createHashHistory();

function configureStore(initialState) {

  const reducerMap = {
    form,
    status,
    token,  
    user,
    router: connectRouter(history),
    ...initialState
  }
  
  const rootReducer = combineReducers(reducerMap);
  const router = routerMiddleware(history);
  const enhancer = applyMiddleware(thunk, router);
  
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, enhancer);
  persistStore(store);

  return store;
}

export default { configureStore, history };
