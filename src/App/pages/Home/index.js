import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import Start from 'App/components/Home/Start';
// import MainContainer from 'App/containers/Home/MainContainer';
import MainContainer from '../../containers/Home/MainContainer'


const Home = ({ isAuthenticated }) => {
  console.log(isAuthenticated)
  return (
    isAuthenticated? 
    <MainContainer/>
    :
    <Start/>
  )
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home); 
