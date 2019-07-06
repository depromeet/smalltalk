import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'App/store/modules'; 

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 
  if(process.env.NODE_ENV !== 'production'){
    if(module.hot){
      module.hot.accept('./modules',()=> {
        store.replaceReducer(rootReducer);
      })
    }
  }
  return store;
}

export default configureStore;