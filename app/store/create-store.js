import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
// import { createNetworkMiddleware, offlineActionCreators, checkInternetConnection } from 'react-native-offline'

import persistConfig from '../config/redux-persist-config';

export default (mainReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  //Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware({
    // onError: ErrorUtils.getGlobalHandler(),
  });
  // const networkMiddleware = createNetworkMiddleware();

  // middleware.push(networkMiddleware);
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  //Persist some keys in local and secure storage
  const rootReducer = persistReducer(persistConfig, mainReducer);

  let store = null;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    //add redux devtools extension if present
    store = createStore(
      rootReducer,
      compose(
        ...enhancers,
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    store = createStore(rootReducer, compose(...enhancers));
  }

  // const { connectionChange } = offilineActionCreators;
  const persistor = persistStore(store, null, () => {
    //After rehydration completes, we detect initial connection
    // checkInternetConnection().then(isConnected => {
    //   store.dispatch(connectionChange(isConnected));
    // });
  });

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};