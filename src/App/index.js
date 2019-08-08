import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'App/components/common/PrivateRoute';
import {
  Home,
  Login,
  Register,
  Mate,
  MateList,
  MateInfo,
  Schedule,
  Bigdata,
  Schedule2,
  Mypage
} from './pages';
import './styles.scss';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/mypage' component={Mypage}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/user" component={Home} />
        <Route exact path="/mate" component={Mate} />
        <PrivateRoute exact path="/mateList" component={MateList} />
        <PrivateRoute exact path="/bigdata" component={Bigdata} />
        <PrivateRoute exact path="/mateInfo/:id" component={MateInfo} />
        <PrivateRoute exact path="/schedule" component={Schedule} />
        <PrivateRoute path="/schedule1" component={Schedule2} /> 
      </Switch>
    </Fragment>
  );
}

export default App;
