import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'App/components/common/PrivateRoute';
import {
  Home,
  Login,
  Register,
  Mate,
  MateList,
<<<<<<< HEAD
  Bigdata
=======
  MateInfo
>>>>>>> 15fad810eb597766677cdfe700664d391fcb5ed9
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
        <Route exact path="/mate" component={Mate} />
        <Route exact path="/mateList" component={MateList} />
<<<<<<< HEAD
        <Route exact path="/bigdata" component={Bigdata} />
=======
        <Route exact path="/mateInfo" component={MateInfo} />
>>>>>>> 15fad810eb597766677cdfe700664d391fcb5ed9
      </Switch>
    </Fragment>
  );
}

export default App;
