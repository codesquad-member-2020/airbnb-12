import { combineReducers } from 'redux';
import date from './date';
import guest from './guest';
import price from './price';

const rootReducer = combineReducers({
  date,
  guest,
  price
});

export default rootReducer;
