import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'App/components/common/PrivateRoute';
import {
  // Home,
  // Login,
  // Register,
  // Mate,
  // MateList,
  // MateInfo,
  Schedule
} from './pages';
import './styles.scss';

function App() {
  return (
    <Fragment>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/user" component={Home} />
        <Route exact path="/mate" component={Mate} />
        <Route exact path="/mateList" component={MateList} />
        <Route exact path="/mateInfo" component={MateInfo} /> */}
        <Route path="/schedule" component={Schedule} /> 
      </Switch>
    </Fragment>
  );
}

export default App;
