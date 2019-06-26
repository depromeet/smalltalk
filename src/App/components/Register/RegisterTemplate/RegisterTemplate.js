import React from 'react';
import { RegisterStart } from '../RegisterStart';
import { RegisterForm } from '../RegisterForm';
import { RegisterStyles } from '../RegisterStyles';
import { RegisterEnd } from '../RegisterEnd';
import classnames from 'classnames/bind';
import styles from './RegisterTemplate.module.scss';
const cx = classnames.bind(styles);

const RegisterTemplate = ({ isMovedLeft, nextBtnClick }) => {
  return(
    <div className={cx('carousel-container')}> 
      <RegisterStart
        isMovedLeft={isMovedLeft}
        nextBtnClick={nextBtnClick}
      />
      <RegisterForm
        isMovedLeft={isMovedLeft}
        nextBtnClick={nextBtnClick}
      />
      <RegisterStyles
        isMovedLeft={isMovedLeft}
        nextBtnClick={nextBtnClick}
      />
      <RegisterEnd/>
    </div>
  )
}
export default RegisterTemplate;