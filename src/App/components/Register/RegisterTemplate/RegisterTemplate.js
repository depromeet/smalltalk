import React, { Component } from 'react';
import { RegisterStart } from '../RegisterStart';
import RegisterFormContainer  from 'App/containers/Register/RegisterFormContainer';
import RegisterStylesContainer from 'App/containers/Register/RegisterStylesContainer';
import { RegisterEnd } from '../RegisterEnd';
import classnames from 'classnames/bind';
import styles from './RegisterTemplate.module.scss';
const cx = classnames.bind(styles);

class RegisterTemplate extends Component {
  state = {
    isMovedLeft : {
      0: false,
      1: false,
      2: false
    }
  };

  handleNextBtn = currentStep => {
    this.setState({
      isMovedLeft: {
        ...this.state.isMovedLeft,
        [currentStep]: true
      }
    })
  };

  handlePrevBtn = currentStep => {
    this.setState({
      isMovedLeft : {
        ...this.state.isMovedLeft,
        [currentStep] : false
      }
    })
  }

  render(){
    const { isMovedLeft } = this.state;
    return(
      <div className={cx('carousel-container')}> 
          <RegisterStart
            isMovedLeft={isMovedLeft}
            handleNextBtn={this.handleNextBtn}
          />
          <RegisterFormContainer
            isMovedLeft={isMovedLeft}
            handleNextBtn={this.handleNextBtn}
            handlePrevBtn={this.handlePrevBtn}
          />
          <RegisterStylesContainer
            isMovedLeft={isMovedLeft}
            handleNextBtn={this.handleNextBtn}
            handlePrevBtn={this.handlePrevBtn}
          />
          <RegisterEnd/>
      </div>
    )
  }
}

// const RegisterTemplate = ({ 
//   isMovedLeft,
//   nextBtnClick,
//   onFormChange,
//    }) => {
//   return(
//     <div className={cx('carousel-container')}> 
//       <RegisterStart
//         isMovedLeft={isMovedLeft}
//         nextBtnClick={nextBtnClick}
//       />
//       <RegisterForm
//         isMovedLeft={isMovedLeft}
//         nextBtnClick={nextBtnClick}
//         onFormChange={onFormChange}
//       />
//       <RegisterStyles
//         isMovedLeft={isMovedLeft}
//         nextBtnClick={nextBtnClick}
//       />
//       <RegisterEnd/>
//     </div>
//   )
// }
export default RegisterTemplate;