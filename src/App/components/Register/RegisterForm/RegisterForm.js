import React from 'react'; 
import classnames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
const cx = classnames.bind(styles);

const RegisterForm = () => {
  return(
    <div className={cx('step-container')}> 
      <div className={cx('contents')}>
        <h1>개인정보입력</h1>
      </div>
      <div className={cx('bar')}> STEP 2 </div>
    </div>
  )
}

export default RegisterForm;