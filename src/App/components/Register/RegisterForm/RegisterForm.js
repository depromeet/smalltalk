import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import iconNext from 'images/icon-next.svg';
import classnames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
const cx = classnames.bind(styles);

const RegisterForm = ({ isMovedLeft, nextBtnClick }) => {
  console.log(isMovedLeft);
 let className = cx({
  'step-container': true,
  'move-left': isMovedLeft[1]
  });

  return(
    <div className={className}> 
      <div className={cx('contents')}>
        <h1>개인정보입력</h1>
        <div onClick={()=> {nextBtnClick(1)}}><img src={iconNext} alt="next"/></div>
      </div>
      <div className={cx('bar')}> STEP 2 </div>
    </div>
  )
}

// class RegisterForm extends Component{

//   handleClick = () => {
//     this.props.handleNextButton(2);
//   }

//   render(){
//     return(
//       <div className={cx('step-container')}> 
//         <div className={cx('contents')}>
//           <h1>개인정보입력</h1>
//           <div onClick={this.handleClick}><img src={iconNext} alt="next"/></div>
//         </div>
//         <div className={cx('bar')}> STEP 2 </div>
//       </div>
//     )
//   }
// }

// const RegisterForm = () => {
  // return(
  //   <div className={cx('step-container')}> 
  //     <div className={cx('contents')}>
  //       <h1>개인정보입력</h1>
  //     </div>
  //     <div className={cx('bar')}> STEP 2 </div>
  //   </div>
  // )
// }

export default RegisterForm;