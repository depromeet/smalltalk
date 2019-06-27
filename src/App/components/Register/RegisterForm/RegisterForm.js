import React, { Component } from 'react';
import { LabelInput } from 'App/components/LabelInput';
import iconNext from 'images/icon-next.svg';
import classnames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
const cx = classnames.bind(styles);

const RegisterForm = ({ 
  isMovedLeft,
  nextBtnClick,
  onChange,
  onSubmit,
  email,
  password,
  nickname,
  gender,
  age,
  shortBio,
  error,
  emailEditable
  }) => {

 let className = cx({
  'step-container': true,
  'move-left': isMovedLeft[1]
  });

  return(
    <div className={className}> 
      <div className={cx('contents')}>
        <div className={cx('form-contents')}>
          <h1 className={cx('title')}>개인정보입력</h1>
          <p className={cx('guide')}>간단한 개인정보를 입력해주세요!</p>
          <div className={cx('first-second-row')}>
            <div className={cx('column')}>
              <LabelInput
                type="email"
                value={email}
                name="email"
                required
                label="Email"
                onChange={onChange}
                disabled={!emailEditable}
              />
              <LabelInput
                value={nickname}
                name="nickname"
                required
                label="닉네임"
                onChange={onChange}
              />
            </div>
            <div className={cx('column')}>
              <LabelInput
                value={password}
                name="password"
                required
                label="Password"
                onChange={onChange}
              />
              <div className={cx('half')}>
                <LabelInput
                  value={gender}
                  name="gender"
                  required
                  label="성별"
                  onChange={onChange}
                />
                <LabelInput
                  value={age}
                  name="age"
                  required
                  label="나이"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className={cx('third-row')}>
            <LabelInput
              value={shortBio}
              name="shortBio"
              required
              label="자기소개(최대50자)"
              onChange={onChange}
            />
          </div>
        </div>
        <div onClick={()=> {nextBtnClick(1)}}><img src={iconNext} alt="next"/></div>
      </div>
      <div className={cx('bar')}> STEP 2 </div>
    </div>
  )
}

export default RegisterForm;