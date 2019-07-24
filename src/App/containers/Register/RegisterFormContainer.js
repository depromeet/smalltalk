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
      gender : '여성',
      age : 0,
      introduction : '',
      validation : this.validator.makeValidResult(),
      isOpen : 0,
      dropR : "rotate(0deg)"
    }
  }
  
  onChange = e => {
    let { name, value } = e.target; 
    this.setState({[name]: value});
  } 

  onFormSubmit = () => {
    const { handleNextBtn, registerRequest }= this.props;
    const validation = this.validator.validate(this.state);
    this.setState({validation});

    if(validation.isValid){
      const { email, password, nickname, age, introduction } = this.state;
      let { gender } = this.state;
      if(gender === '남성'){ gender = 'm'}
      else{ gender = 'f'};

      // if(status === 'INIT' || status === 'WAITING'){
      return registerRequest({email, password, nickname, age, gender, introduction})
      .then(() => {
        if(this.props.status === 'SUCCESS'){
          console.log('success');
          handleNextBtn(1)
          } else if(this.props.status === "FAILURE"){
          console.log('fail')
          }
        }
      )
    }
  }

  handleDropBtn = () => {
    // drop down 박스를 보여줘야함
    const { isOpen } = this.state;
    // console.log('drop the box!');
    if(isOpen) {this.setState({ isOpen : 0, dropR : "rotate(0deg)" })}
    else{ this.setState({isOpen : 1, dropR : 'rotate(180deg)'})}
  }

  genderClick = e => {
    // console.log(e.target.id);
    this.setState({ 
      gender : e.target.id,
      isOpen : 0
    });
  }

  render(){
    const { isMovedLeft, registerError } = this.props; 
    const { email, password, nickname, gender, age, introduction, validation, isOpen, dropR} = this.state;
    return (
    <RegisterForm
      email={email}
      password={password}
      nickname={nickname}
      gender={gender}
      age={age}
      introduction={introduction}
      isMovedLeft={isMovedLeft}
      onChange={this.onChange}
      onFormSubmit={this.onFormSubmit}
      validation={validation}
      registerError={registerError}
      dropBtnClick={this.handleDropBtn}
      isOpen={isOpen}
      dropR={dropR}
      genderClick={this.genderClick}
    />
    )
  }
}

const mapStateToProps = state => ({
  status : state.auth.register.status,
  registerError : state.auth.register.error
}); 

const mapDispatchToProps = dispatch => ({
  registerRequest: ({ email, password, nickname, gender, age, introduction }) => 
  dispatch(authAction.registerRequest({ email, password, nickname, gender, age, introduction })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);

