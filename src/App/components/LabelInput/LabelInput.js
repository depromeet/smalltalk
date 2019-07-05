import React from 'react';
import classnames from 'classnames/bind';
import styles from './LabelInput.module.scss';
const cx = classnames.bind(styles); 

const LabelInput = ({ label, value, limit, required, disabled, ...rest }) => { 
  return(
    <div className={cx('label-input', { disabled })}>
      <div className={cx('label')}>{label}</div>
      <input className={cx('input')} value={value} {...rest} disabled={disabled} />
      <div></div>
      {/* { disabled && (
          <div className={cx('lock-wrapper')}>
            <div className={cx('lock')}>
             Locked
            </div>
          </div>
        )
      } */}
      { limit && (
        <div className={cx('limit')}>
          { !value ? 0 : value.length } / {limit}
        </div>
      )
      }
    </div>
  )

}

export default LabelInput;