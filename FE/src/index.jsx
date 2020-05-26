import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/views/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { filterReducer } from './reducers/filterReducer';
import rootReducer from './modules';

const store = createStore(rootReducer);
// const store = createStore(filterReducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
