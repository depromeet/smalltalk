import React from 'react';

import classnames from 'classnames/bind';
import styles from './RegisterStyles.module.scss';
const cx = classnames.bind(styles);

const RegisterStyles = () => {
  return(
    <div className={cx('step-container')}>
      <div className={cx('contents')}></div>
    </div>
  )
}