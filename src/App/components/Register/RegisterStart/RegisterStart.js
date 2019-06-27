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

  let styles = cx({
    'bar': true,
    'bar-left': isMovedLeft[0]
  })

  return(
    <Fragment>
      <div className={className}> 
        <div className={cx('contents')}>
          <div className={cx('column', 'left')}>
            <p className={cx('left-title')}>간단한 개인정보를 </p>
            <p className={cx('left-title')}>입력하고 스몰토크를</p>
            <p className={cx('left-title')}>시작해보세요!</p>
            <button className={cx('facebook')}> 
              <img src={google} alt="google"/>
              <div> 페이스북으로 회원가입  </div>
            </button>
            <button className={cx('button')}> 
              <img src={google} alt="google"/>
              <div> 구글로 회원가입  </div>
            </button>
          </div>
          <div className={cx('column', 'middle')}>
            <img src={lineRight} alt="lineToRight"/>
          </div>
          <div className={cx('column', 'right')}>
            <div className={cx('circle')}></div>
            <div className={cx('letsgo-img')}>
              <img src={letsgo} alt="letsgo"/>
            </div>
            <div className={cx('next-btn')} onClick={() => {nextBtnClick(0)}}> 
              <img src={click} alt="click"/>
            </div>
          </div>
        </div>
        <div className={styles}> STEP 1 </div>
      </div>
    </Fragment>
  )
}

export default RegisterStart;