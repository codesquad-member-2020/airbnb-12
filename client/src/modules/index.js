import { combineReducers } from 'redux';
import date from './date';
import guest from './guest';
import price from './price';
import form from './form';

const rootReducer = combineReducers({
  date,
  guest,
  price,
  form,
});

export default rootReducer;
