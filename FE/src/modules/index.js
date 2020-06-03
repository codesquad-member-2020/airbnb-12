import { combineReducers } from 'redux';
import date from './date';
import guest from './guest';

const rootReducer = combineReducers({
  date,
  guest,
});

export default rootReducer;
