import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/views/App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { filterReducer } from "./reducers/filterReducer";

const store = createStore(filterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
