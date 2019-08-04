import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux';
import CapsReducers from './reducers/CapsReducers'
import App from './App'
import * as serviceWorker from './serviceWorker';


const store = configureStore({ reducer: CapsReducers })

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

