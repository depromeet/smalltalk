import React from 'react';
import { LabelInput } from 'App/components/LabelInput';
import iconNext from 'images/icon-next.svg';
import classnames from 'classnames/bind';
import styles from './RegisterForm.module.scss';
const cx = classnames.bind(styles);
// state : email, password, nickname, gender, age, shortBio 

const RegisterForm = ({ 
  isMovedLeft,
  onChange,
  onFormSubmit,
  email,
  password,
  nickname,
  gender,
  age,
  introduction,
  validation,
  registerError,
  dropBtnClick,
  isOpen,
  dropR,
  genderClick
  }) => {

 let className = cx({
  'step-container': true,
  'move-left': isMovedLeft[1]
  });

  const errorMsgAfterReq = {
  1 : '이미 존재하는 메일입니다.',
  2 : '비밀번호가 일상적인 단어입니다.'
}

  return(
    <div className={className}> 
      <div className={cx('contents')}>
        <div className={cx('form-contents')}>
          <div className={cx('contents-header')}>
            <h1 className={cx('title')}>개인정보입력</h1>
            <p className={cx('guide')}>간단한 개인정보를 입력해주세요!</p>
            {
              registerError !== -1 ? 
              <div className={cx('after-request-error')}>
                {errorMsgAfterReq[registerError]}
              </div>
              : 
              null
            }
          </div>
          <div className={cx('first-second-row')}>
            <div className={cx('column')}>
              <LabelInput
                type="email"
                value={email}
                name="email"
                required
                label="Email"
                onChange={onChange}
                error={validation.email.message}
                // disabled={!emailEditable}
              />
              <LabelInput
                value={nickname}
                name="nickname"
                required
                label="닉네임"
                onChange={onChange}
                error={validation.nickname.message}
              />
            </div>
            <div className={cx('column')}>
              <LabelInput
                type="password"
                value={password}
                name="password"
                required
                label="Password"
                onChange={onChange}
                error={validation.password.message}
              />
              <div className={cx('half')}>
                <div className={cx('gender-container')}>
                <label> 성별 </label>
                <div className={cx('gender')}>{gender}</div>
                <ul className={cx('gender-dropbox')} style={{opacity: isOpen}}>
                  <li onClick={genderClick} id='여성' >여성</li>
                  <li onClick={genderClick} id='남성'>남성</li>
                </ul>
                  <div 
                  className={cx('drop-down-button')}
                  onClick={dropBtnClick}
                  style={{transform: dropR}}
                  > ▼ </div>
                </div>
                <LabelInput
                  value={age}
                  name="age"
                  required
                  label="나이"
                  onChange={onChange}
                  error={validation.age.message}
                />
              </div>
            </div>
          </div>
          <div className={cx('third-row')}>
            <LabelInput
              value={introduction}
              name="introduction"
              required
              label="자기소개(최대50자)"
              onChange={onChange}
              error=''
            />
          </div>
        </div>
        <div className={cx('nextBtn')} onClick={onFormSubmit}><img src={iconNext} alt="next"/></div>
      </div>
      <div className={cx('bar')}> STEP 2 </div>
    </div>
  )
}


export default RegisterForm;