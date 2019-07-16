import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from 'App/components/Register/RegisterForm';
// import * as registerActions from 'App/store/modules/register';
import * as authAction from 'App/store/modules/auth';
import FormValidator from './FormValidator';

class RegisterFormContainer extends Component{
  constructor(){
    super();
    this.validator = new FormValidator([
      {
        field : 'email',
        method: 'isEmpty',
        validWhen : false,
        message : '이메일은 필수항목 입니다.'
      },
      {
        field : 'email',
        method: 'isEmail',
        validWhen : true,
        message : '이메일 형식이 맞지 않습니다.'
      },
      {
        field : 'password',
        method: 'isEmpty',
        validWhen : false,
        message : '비밀번호는 필수항목 입니다.'
      },
      // {
      //   field : 'password',
      //   method: 'isPassword',
      //   validWhen : true,
      //   message : '비밀번호는 8자리 이상의 문자,숫자 조합이여야 합니다.'
      // },
      {
        field : 'nickname',
        method: 'isEmpty',
        validWhen : false,
        message : '닉네임은 필수항목 입니다.'
      },
      {
        field : 'age',
        method: 'isInt',
        args : [{max: 99}],
        validWhen : true,
        message : '나이는 99세 이하여야합니다.'
      },
      {
        field : 'age',
        method: 'isEmpty',
        validWhen : false,
        message : '나이는 필수항목 입니다.'
      },
      {
        field : 'gender',
        method: 'isEmpty',
        validWhen : false,
        message : '성별은 필수항목 입니다.'
      },
      // {
      //   field : 'gender',
      //   method: 'isLength_50',
      //   validWhen : true,
      //   message : '자기소개는 50자 이내'
      // }
    ])
    this.state = {
      email : '',
      password : '',
      nickname : '',
      gender : '',
      age : 0,
      shortBio : '',
      validation : this.validator.makeValidResult()
    }
  }
  
  onChange = e => {
    let { name, value } = e.target; 
    this.setState({[name]: value});
  } 

  onFormSubmit = () => {
    const { handleNextBtn, registerRequest, status }= this.props;
    handleNextBtn(1);
    // const validation = this.validator.validate(this.state);
    // this.setState({validation});
    
    // if(validation.isValid){
    //   const { email, password, nickname, age, gender, shortBio } = this.state;
    //   if(status === 'INIT'){
    //     return registerRequest({email, password, nickname, age, gender, shortBio})
    //     .then(() => {
    //       if(this.props.status === 'SUCCESS'){
    //         console.log('success');
    //         handleNextBtn(1)
    //         } else if(this.props.status === "FAILURE"){
    //         console.log('fail')
    //         }
    //       }
    //     )
    //   }
    // }
  }

  render(){
    const { isMovedLeft, registerError } = this.props; 
    const { email, password, nickname, gender, age, shortBio, validation } = this.state;
    return (
    <RegisterForm
      email={email}
      password={password}
      nickname={nickname}
      gender={gender}
      age={age}
      shortBio={shortBio}
      isMovedLeft={isMovedLeft}
      onChange={this.onChange}
      onFormSubmit={this.onFormSubmit}
      validation={validation}
      registerError={registerError}
    />
    )
  }
}

const mapStateToProps = state => ({
  status : state.auth.register.status,
  registerError : state.auth.register.error
}); 

const mapDispatchToProps = dispatch => ({
  registerRequest: ({ email, password, nickname, gender, age, shortBio }) => 
  dispatch(authAction.registerRequest({ email, password, nickname, gender, age, shortBio })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);

