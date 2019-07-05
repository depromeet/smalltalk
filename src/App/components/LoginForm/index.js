import React, { Component, Fragment } from 'react';
import google from 'images/google.png';
import classnames from 'classnames/bind';
import styles from './LoginForm.module.scss'; 
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
    event.preventDefault();
  }

  resetInputClick = (e) => {
    const target = e.target.getAttribute('name');
    this.setState({[target]:''})
  }

  render(){
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
          <input
            className={cx('login__button', 'normal')}
            type="submit"
            value="로그인하기"
            onSubmit={this.handleSubmit}
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

export default LoginForm;