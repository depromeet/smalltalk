import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './App/store/modules'; 

const store = createStore(rootReducer); 
console.log(store.getState());

const Root = () => {
 return (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
 )
}

export default Root;