import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import './styles.scss';
import lineDown from 'images/line-down.svg';
import friends from 'images/friends.png';
import vene from 'images/vene.png';
import gradation from 'images/815.png';

class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className="backImage">
          <div className="back-column">
            <div className="line-down"><img src={lineDown} alt="line"/></div>
            <div className="circle left-friends"><img src={friends} alt="friends"/></div>
            <div className="circle left-gradation"><img src={gradation} alt="gra"/></div>
          </div>
          <div className="back-column">
            <div className="circle right-none"></div>
            <div className="circle right-vene"><img src={vene} alt="vene"/></div>
            <div className="circle right-gradation"></div>
          </div>
        </div>

      </Fragment>
    )
  }
}

export default Login;