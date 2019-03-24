import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/configure-store-dev";
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
