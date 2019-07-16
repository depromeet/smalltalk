import React from 'react';
import useForm from './useForm';
import validate from './LoginFormValidationRules';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import google from 'images/google.png';
import classnames from 'classnames/bind';
import styles from './LoginForm.module.scss'; 
import * as authAction from 'App/store/modules/auth';
const cx = classnames.bind(styles);

const LoginForm = ({isAuthenticated,loginRequest}) => {
  const { 
   values,
   resetClick,
   handleChange,
   handleSubmit,
   errors
  } = useForm(login, validate); 

  function login(){
    console.log('validation 에러 없고 요청 고고');
    loginRequest(values)
  }
  if(isAuthenticated){
    return <Redirect to="/" />;
  }

  return(
      <div className={cx('login__container')}>
        <div className={cx('login__header')}>
          <h1 className={cx('login__title')}> Log in </h1>
          <p className={cx('login__info')}> 아직 스몰토크의 친구가 아니신가요? </p>
          <p className={cx('login__info')}> 세계인의 친구가 되어보세요! </p>
        </div>
        <form onSubmit={handleSubmit} className={cx('login__form')} noValidate>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}> Email </label>
            {errors.email && <p> {errors.email} </p>}
            <input
              className={cx('login__input')}
              type="text"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <button
              className={cx('login__input-x')}
              onClick={resetClick}
              name="email"> x
            </button>
          </div>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}>Password</label>
            <div> 
              {errors.password && <p> {errors.password} </p>}
            </div>
            <input
              className={cx('login__input')}
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <div
             className={cx('login__input-x')}
            //  onClick={this.resetInputClick}
             name="password"
             > x</div>
          </div>
          <input
            className={cx('login__button', 'normal')}
            type="submit"
            value="로그인하기"
            // onSubmit={handleSubmit}
          />
          <div className={cx('button__container')}>
            <div className={cx('column')}>
              <img className={cx('google-img')} src={google} alt="google"/>
            </div>
              <input
                className={cx('login__button','google')}
                type="submit"
                value="구글로 시작하기"
                // onSubmit={this.handleSubmit}
              />
          </div>
        </form>
      </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  loginRequest : ( value ) => dispatch(authAction.loginRequest(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
