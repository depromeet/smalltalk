import React, { Fragment } from 'react';
import LoginFormContainer from '../../containers/LoginForm/LoginFormContainer';
import lineDown from 'images/line-down.svg';
import friends from 'images/friends.png';
import vene from 'images/vene.png';
import gradation from 'images/815.png';
import MenuBtn from '../../components/MenuBtn';

import classnames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classnames.bind(styles);

const Login = () => {
  return(
    <Fragment>
      {/* <MenuBtn barColor = { "#000" } boxHidden = { "none" }/> */}
      <div className={cx('backImage')}>
        <div className={cx('back-column')}>
          <div className={cx('line-down')}><img src={lineDown} alt="line"/></div>
          <div className={cx('circle', 'left-friends')}><img src={friends} alt="friends"/></div>
          <div className={cx('circle', 'left-gradation')}><img src={gradation} alt="gra"/></div>
        </div>
        <div className={cx('back-column')}>
          <LoginFormContainer />
        </div>
        <div className={cx('back-column')}>
          <div className={cx('circle', 'right-none')}></div>
          <div className={cx('circle', 'right-vene')}><img src={vene} alt="vene"/></div>
          <div className={cx('circle', 'right-gradation')}></div>
        </div>
      </div>
    </Fragment>
  )
} 


export default Login;