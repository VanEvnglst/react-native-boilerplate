// import {combineReducers} from 'redux';
// // import { reducer as network } from 'react-native-offline';
// import { reducer as authentication } from './authentication-redux';
// import rootSaga from '../sagas';
// import configureStore from './create-store';


// export const mainReducer = combineReducers({
//   authentication,
// });

// export default () => {
//   const retainKeys = [];
//   const signOutAction = 'LOGOUT_USER';

//   const rootReducer = (state, action) => {
//     if (action.type === signOutAction) {
//       const newState = Object.assign({}, state);
//       // This deletes all the other keys
//       Object.keys(newState).forEach(key => {
//         if (!retainKeys.includes(key)) {
//           delete newState[key];
//         }
//       });
//       state = newState;
//     }
//     return mainReducer(state, action);
//   };
//   return configureStore(rootReducer, rootSaga);
// };

import { combineReducers } from 'redux';
// import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './authentication-redux';
// import { reducer as database } from './database-redux';
import rootSaga from '../sagas';

import configureStore from './create-store';

export const mainReducer = combineReducers({
  // network,
  authentication,
  // database,
});

export default () => {
  const retainKeys = [];
  const rootReducer = (state, action) => {
    return mainReducer(state, action);
  }
  return configureStore(rootReducer, rootSaga);
};