import React, { Component, Fragment } from 'react';
import { RegisterStart } from '../RegisterStart';
import { RegisterForm } from '../RegisterForm';
import { RegisterStyles } from '../RegisterStyles';
import { RegisterEnd } from '../RegisterEnd';
import classnames from 'classnames/bind';
import styles from './RegisterTemplate.module.scss';
const cx = classnames.bind(styles);

class RegisterTemplate extends Component{
  constructor(props){
    super(props);
    this.state ={
      currentSlide: 0
    }
  }

  handleNextButton = stepNum => {
    this.setState({
      currentSlide : stepNum // 현재 state에서 +1
    })
  }

  render(){
    const { currentSlide } = this.state;
    console.log(currentSlide);
    return(
      <div className={cx('carousel-container')}> 
        <RegisterStart 
          currentSlide={currentSlide}
          handleNextButton={this.handleNextButton}
        />
        <RegisterForm 
          currentSlide={currentSlide}
          handleNextButton={this.handleNextButton}
        />
        <RegisterStyles currentSlide={currentSlide}/>
        {/* <RegisterEnd currentSlide={currentSlide}/> */}
      </div>
    )
  }
}

export default RegisterTemplate;

// 먼저 안에 화면 컴포넌트를 만들어. 그 다음 container 어떻게 나눌지 생각하기. 