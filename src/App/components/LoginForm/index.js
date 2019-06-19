import React, { Component, Fragment } from 'react';
import './styles.scss'; 

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

  render(){
    return(
      <div className="login__container">
        <div className="login__header">
          <h1> Log in </h1>
          <p>아직 스몰토크의 친구가 아니신가요?</p>
          <p>세계인의 친구가 되어보세요!</p>
        </div>
        <form className="login__form">
          <label> Email </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            value="로그인하기"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default LoginForm;