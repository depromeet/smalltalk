import React from 'react';

import classnames from 'classnames/bind';
import styles from './RegisterEnd.module.scss';
const cx = classnames.bind(styles);

const RegisterEnd = () => {
  return(
    <div className={cx('end-container')}>
      <div className={cx('welcome')}>
        <p>스몰토크에 오신것을 환영합니다</p>
        <p>내 여행 루트를 등록하시면</p>
        <p>더 정확한 메이트를</p>
        <p>추천 받으실 수 있어요!</p>
      </div>
      <div className={cx('buttons')}>
        <button> 저장하고 시작하기  </button>
        <button> 지금 바로 일정 등록하기  </button>
      </div>
    </div>
  )
}

export default RegisterEnd;