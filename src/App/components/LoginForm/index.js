import React, { useState } from 'react';
import LabelInput from './LabelInput';
import RoundBtn from '../RoundBtn';
import google from 'images/google.png';
import classnames from 'classnames/bind';
import styles from './LoginForm.module.scss'; 
const cx = classnames.bind(styles);

const LoginForm = ({ onSubmit, errors }) => {
  const email = useInput('');
  const password = useInput('');
  return(
      <div className={cx('login__container')}>
        <div className={cx('login__header')}>
          <h1 className={cx('login__title')}> Log in </h1>
          <p className={cx('login__info')}> 아직 스몰토크의 친구가 아니신가요? </p>
          <p className={cx('login__info')}> 세계인의 친구가 되어보세요! </p>
        </div>
        <form className={cx('login__form')} noValidate>
          <LabelInput 
            label='Email'
            value={email.value}
            onChange={email.onChange}
            type='text'
            error={errors && errors.email ? errors.email : null}
            resetInput={email.resetInput}
          />
          <LabelInput
            label='Password'
            value={password.value}
            onChange={password.onChange}
            type='password'
            error={errors && errors.password ? errors.password : null}
            resetInput={password.resetInput}
          />
          <RoundBtn
            width= '100%'
            value='로그인하기'
            backImage= 'linear-gradient(279deg, #fb3e1d, #e1ff01)'
            onClick={() => onSubmit({email : email.value, password : password.value})}
          />
          <RoundBtn
            width='100%'
            value='구글로 시작하기'
            backColor ='#4a6ef4'
            src={google}
          />
        </form>
      </div>
  )
}

export default LoginForm;

function useInput(initialValue){
  const [value, setValues] = useState(initialValue);

  function handleInputChange(e){
    setValues(e.target.value);
  }
  function resetInput(e){
    setValues('');
  }
  return {
    value,
    onChange : handleInputChange,
    resetInput
  }
}