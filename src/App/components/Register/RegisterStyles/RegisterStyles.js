import React from 'react';

import classnames from 'classnames/bind';
import styles from './RegisterStyles.module.scss';
const cx = classnames.bind(styles);

const RegisterStyles = () => {
  return(
    <div className={cx('step-container')}>
      <div className={cx('contents')}>
        <h1> 내 여행 스타일 선택</h1>
      </div>
      <div className={cx('bar')}>FIN</div>
    </div>
  )
}

export default RegisterStyles;