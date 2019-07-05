import React from 'react';
import iconNext from 'images/icon-next.svg';
import classnames from 'classnames/bind';
import styles from './RegisterStyles.module.scss';
const cx = classnames.bind(styles);

const RegisterStyles = ({ isMovedLeft, handleNextBtn }) => {
  let className= cx({
    'step-container': true,
    'move-left': isMovedLeft[2]
  })
  return(
    <div className={className}>
      <div className={cx('contents')}>
        <h1> 내 여행 스타일 선택</h1>
        <div onClick={()=> {handleNextBtn(2)}}><img src={iconNext} alt="next"/></div>
      </div>
      <div className={cx('bar')}>FIN</div>
    </div>
  )
}

export default RegisterStyles;