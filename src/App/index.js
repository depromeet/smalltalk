import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  Login,
  Register
} from './pages';
import './styles.scss';

function App() {
  return (
    
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;
