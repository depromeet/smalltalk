import React from 'react';
import classnames from 'classnames/bind';
import styles from './LabelInput.module.scss';
const cx = classnames.bind(styles); 

const LabelInput = ({ label, value, limit, required, disabled, error, ...rest }) => { 
  return(
    <div className={cx('label-input', { disabled })}>
      {
        error === '' ?
        null
        : 
        <div className={cx('error')}>{error}</div>
      }
      <div className={cx('label')}>{label}</div>
      <input className={cx('input')} value={value} {...rest} disabled={disabled} />
    </div>
  )

}

export default LabelInput;