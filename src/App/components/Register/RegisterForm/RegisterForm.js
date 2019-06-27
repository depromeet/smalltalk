import React, { Component } from 'react';
import iconNext from 'images/icon-next.svg';
import classnames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
const cx = classnames.bind(styles);

const RegisterForm = ({ isMovedLeft, nextBtnClick }) => {
 let className = cx({
  'step-container': true,
  'move-left': isMovedLeft[1]
  });

  return(
    <div className={className}> 
      <div className={cx('contents')}>
        <h1>개인정보입력</h1>
        <div onClick={()=> {nextBtnClick(1)}}><img src={iconNext} alt="next"/></div>
      </div>
      <div className={cx('bar')}> STEP 2 </div>
    </div>
  )
}

export default RegisterForm;