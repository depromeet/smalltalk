import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'App/components/common/PrivateRoute';
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
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/user" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
