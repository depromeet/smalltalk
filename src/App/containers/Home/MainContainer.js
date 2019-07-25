import React, { Component, Fragment } from 'react';
import MainHomeBackground from '../../components/Home/MainBackground';
import SideMenu from './../../components/Chat/SideMenu'

class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <MainHomeBackground />
        <SideMenu/>
      </Fragment>
    );
  }
}

export default MainContainer;
