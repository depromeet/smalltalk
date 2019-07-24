import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './RegisterEnd.module.scss';
const cx = classnames.bind(styles);

const RegisterEnd = () => {
  return(
    <div className={cx('end-container')}>
      <div className={cx('welcome')}>
        <div>스몰토크에 오신것을 환영합니다</div>
        <div className={cx('line')}><p>내 여행 루트</p>를 등록하시면</div>
        <div>더 정확한 메이트를</div>
        <div>추천 받으실 수 있어요!</div>
      </div>
      <div className={cx('buttons')}>
        <div className={cx('button-container')}>
        {/* home으로 이동 */}
        <Link to='/'>
          <button> 
            <div className={cx('button-word')}>저장하고 시작하기 </div> 
            <div className={cx('button-tri')}> ► </div> 
          </button>
          </Link>
        </div>
        {/* /schedule로 이동 */}
        <Link to='/schedule'>
          <button> 
            <div className={cx('button-word')}> 지금 바로 일정 등록하기 </div>
            <div className={cx('button-tri')}> ► </div> 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterEnd;