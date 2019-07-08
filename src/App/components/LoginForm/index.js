import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import google from 'images/google.png';
import classnames from 'classnames/bind';
import styles from './LoginForm.module.scss'; 
import * as authAction from 'App/store/modules/auth';
const cx = classnames.bind(styles);

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = event => {
    const { target: { value, name } } = event
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log('clicked');
    event.preventDefault(); 
    const { loginRequest } = this.props; 
    const { email, password } = this.state; 
    loginRequest({email, password})
    .then(
      () => {
        if(this.props.status === 'SUCCESS'){
          console.log('successfully logged in'); 
          // this.props.history.push('/')
          // 메인페이지로 이동
        }else if(this.props.status === 'FAILURE'){
          console.log('log in fail');
        }
      }
    )
  }

  resetInputClick = (e) => {
    const target = e.target.getAttribute('name');
    this.setState({[target]:''})
  }

  render(){
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    if(typeof(this.props.error) === 'object'){ 
      if(this.props.error.email){
        console.log(this.props.error.email[0]);
      }
      if(this.props.error["non_field_errors"]){
        console.log(this.props.error["non_field_errors"][0])
      }
    }
    return(
      <div className={cx('login__container')}>
        <div className={cx('login__header')}>
          <h1 className={cx('login__title')}> Log in </h1>
          <p className={cx('login__info')}> 아직 스몰토크의 친구가 아니신가요? </p>
          <p className={cx('login__info')}> 세계인의 친구가 되어보세요! </p>
        </div>
        <form className={cx('login__form')}>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}> Email </label>
            <div> 
              {typeof(this.props.error) === 'object' && this.props.error.email ? `${this.props.error.email[0]}` : ""} 
            </div>
            <input
              className={cx('login__input')}
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div 
              className={cx('login__input-x')}
              onClick={this.resetInputClick}
              name="email"
            >x</div>
          </div>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}>Password</label>
            <div> 
              {
                typeof(this.props.error) === 'object' && this.props.error["non_field_errors"] ?
                `${this.props.error["non_field_errors"][0]}` 
                : ""
              } 
              {
                typeof(this.props.error) === 'object' && this.props.error.password ?
                `${this.props.error.password[0]}` 
                : ""
              } 
            </div>
            <input
              className={cx('login__input')}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div
             className={cx('login__input-x')}
             onClick={this.resetInputClick}
             name="password"
             > x</div>
          </div>
          <div
            className={cx('login__button', 'normal')}
            type="submit"
            value="로그인하기"
            onClick={this.handleSubmit}
          />
          <div className={cx('button__container')}>
            <div className={cx('column')}>
              <img className={cx('google-img')} src={google} alt="google"/>
            </div>
              <input
                className={cx('login__button','google')}
                type="submit"
                value="구글로 시작하기"
                onSubmit={this.handleSubmit}
              />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status : state.auth.login.status,
  error : state.auth.login.error,
  isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  loginRequest : ( value ) => dispatch(authAction.loginRequest(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);