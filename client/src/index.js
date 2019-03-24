import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import store from "./store/configure-store-dev";
import App from 'Views';
import * as serviceWorker from './serviceWorker';
import 'Assets/styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
