import { combineReducers } from 'redux';

import auth from './main';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
