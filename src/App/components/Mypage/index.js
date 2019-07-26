import React from 'react'
import { LabelInput } from 'App/components/LabelInput';
import iconCheck from '../../../static/images/icon-check.svg'
import classnames from 'classnames/bind';
import styles from './Mypage.module.scss'; 
const cx = classnames.bind(styles);

const Mypage = ({user, onChange}) => {
    //console.log('보여줄 user',user);
  return (
    <div className={cx('container')}>
      <div className={cx('form-container')}>
        <div className={cx('form-header')}>
          <h2> 개인정보 수정</h2>
          <div><img src={iconCheck} alt='complete-btn'/></div>
        </div>
        <div className={cx('form-content')}>
          <div className={cx('column')}>
            <div className={cx('profile-pic')}>사진 변경</div>
            <button className={cx('logout-btn')}>LOGOUT</button>
          </div>
          <div className={cx('column')}>
            <LabelInput
              label='닉네임'
              name='nickname'
              value={user.nickname}
              onChange={onChange}
            />
            <LabelInput
              label='Email'
              name='email'
              value={user.email}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      {/* {email}
      {introduction} */}
    </div>
  )
}

export default Mypage
