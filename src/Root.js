import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import store from './store';

const Root = () => {
 return (
//  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
//  </Provider>
 )
}

export default Root;