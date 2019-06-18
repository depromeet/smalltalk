import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  Login,
  Mate,
  MateList
} from './pages';
import './styles.scss';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mate" component={Mate} />
        <Route exact path="/mateList" component={MateList} />
      </Switch>
    </Fragment>
  );
}

export default App;
