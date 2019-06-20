import React, { Component, Fragment } from 'react';
import LoginForm from 'App/components/LoginForm';
import lineDown from 'images/line-down.svg';
import friends from 'images/friends.png';
import vene from 'images/vene.png';
import gradation from 'images/815.png';

import classnames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classnames.bind(styles);

class Login extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className={cx('backImage')}>
          <div className={cx('back-column')}>
            <div className={cx('line-down')}><img src={lineDown} alt="line"/></div>
            <div className={cx('circle', 'left-friends')}><img src={friends} alt="friends"/></div>
            <div className={cx('circle', 'left-gradation')}><img src={gradation} alt="gra"/></div>
          </div>
          <div className={cx('back-column')}>
            <LoginForm />
          </div>
          <div className={cx('back-column')}>
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