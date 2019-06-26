import React, { Fragment, PureComponent } from 'react'; 
import { CSSTransitionGroup } from 'react-transition-group'
import letsgo from 'images/letsgo.svg';
import lineRight from 'images/line-right.svg';
import google from 'images/google.png';
import click from 'images/click.svg';
import classnames from 'classnames/bind';
import styles from './RegisterStart.module.scss';
const cx = classnames.bind(styles);

const RegisterStart = ({ isMovedLeft, nextBtnClick }) => {
  let className = cx({
  'step-container': true,
  'move-left': isMovedLeft[0]
  });

  return(
    <Fragment>
      <div className={className}> 
        <div className={cx('contents')}>
          <div className={cx('left')}>
            <p className={cx('left-title')}>간단한 개인정보를 </p>
            <p className={cx('left-title')}>입력하고 스몰토크를</p>
            <p className={cx('left-title')}>시작해보세요!</p>
            <button className={cx('button')}> 
              <img src={google} alt="google"/>
              <div> 구글로 회원가입  </div>
            </button>
          </div>
          <div className={cx('arrow')}>
            <img src={lineRight} alt="lineToRight"/>
          </div>
          <div className={cx('circle')}></div>
          <div className={cx('letsgo-img')}>
            <img src={letsgo} alt="letsgo"/>
          </div>
          <div onClick={() => {nextBtnClick(0)}}> <img src={click} alt="click"/></div>
        </div>
        <div className={cx('bar')}> STEP 1 </div>
      </div>
    </Fragment>
  )
}

export default RegisterStart;