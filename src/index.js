import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store'

let newStore = store();

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>
    , document.getElementById('root'));
  registerServiceWorker();
