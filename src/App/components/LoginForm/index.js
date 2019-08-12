import React, { useState } from 'react';
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
          <div className={cx('login__input-container')}>
          <div className={cx('input-container-header')}>
            <label className={cx('login__input-label')}> Email </label>
              {errors && errors.email ? <p className={cx('error')}> {errors.email} </p>: null}
          </div>
            <input
              className={cx('login__input')}
              type="text"
              {...email}
              required
            />
            <button
              className={cx('login__input-x')}
              >x
            </button>
          </div>
          <div className={cx('login__input-container')}>
            <div className={cx('input-container-header')}>
              <label className={cx('login__input-label')}>Password</label>
                {errors && errors.password ? <p className={cx('error')}> {errors.password} </p> : null}
            </div>
            <input
              className={cx('login__input')}
              type="password"
              {...password}
              required
            />
            <div
             className={cx('login__input-x')}
             > x</div>
          </div>
          {/* { errorStatus === 2 ? <div className={cx('request-fail-error')}> 비밀번호와 이메일을 확인해주세요 </div>: null} */}
          <div
            className={cx('login__button', 'normal')}
            onClick={() => onSubmit({email : email.value, password : password.value})}
          >
            로그인하기
          </div>
          <button className={cx('button__container')}>
            <div className={cx('column')}>
              <img className={cx('google-img')} src={google} alt="google"/>
            </div>
            <div> 구글로 시작하기</div>
          </button>
        </form>
        {/* {errors && errors.common ? <p>{errors.common}</p> : null} */}
      </div>
  )
}

export default LoginForm;

function useInput(initialValue){
  const [value, setValues] = useState(initialValue);

  function handleInputChange(e){
    setValues(e.target.value);
  }
  return {
    value,
    onChange : handleInputChange
  }
}