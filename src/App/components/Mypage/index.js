import React from 'react'
import StylePair from '../../components/Register/RegisterStyles/StylePair';
import { LabelInput } from 'App/components/LabelInput';
import lineDown from '../../../static/images/profile-line-down.svg';
import iconCheck from '../../../static/images/icon-check.svg'
import classnames from 'classnames/bind';
import styles from './Mypage.module.scss'; 
const cx = classnames.bind(styles);

const Mypage = ({
  handleLogout,
  user,
  onChange,
  pairs,
  handleStyleCircle}) => {
    // console.log(pairs);
  return (
    <div className={cx('wrapper')}>
    <div className={cx('first-content')}>
      <div className={cx('form-container')}>
        <div className={cx('form-header')}>
          <h2> 개인정보 수정</h2>
          <div><img src={iconCheck} alt='complete-btn'/></div>
        </div>
        <div className={cx('form-content')}>
          <div className={cx('column')}>
            <div className={cx('profile-pic')}></div>
            <div onClick={handleLogout} className={cx('logout-btn')}>LOGOUT</div>
          </div>
          <div className={cx('column')}>
            <LabelInput
              label='닉네임'
              name='nickname'
              value={user.nickname}
              onChange={onChange}
              error=''
            />
            <LabelInput
              label='Email'
              name='email'
              value={user.email}
              onChange={onChange}
              error=''
            />
            <LabelInput
              label='나이'
              name='age'
              value={user.age}
              onChange={onChange}
              error=''
            />
            <LabelInput
              label='자기소개(최대50자)'
              name='introduction'
              value={user.introduction}
              onChange={onChange}
              error=''
            />
          </div>
        </div>
      </div>
      <div className={cx('back-right-circles')}>
        <div className={cx('circle-red-none')}></div>
        <div className={cx('circle-img')}></div>
        <div className={cx('circle-gra')}></div>
        <div className={cx('circle-neon')}></div>
        <img src={lineDown} className={cx('line-down')} alt='line-down'/>
      </div>
    </div>
    <div className={cx('second-content')}>
    <div className={cx('bottom-circles')}>
        <div className={cx('circle-bottom-neon')}></div>
        <div className={cx('circle-bottom-red')}></div>
      </div>
    
      <div className={cx('style-container')}>
          <div className={cx('styles-header')}>
            <h2> 내 여행 스타일 </h2>
          </div>
        <div className={cx('style-content')}>
          <div className={cx('style-column')}>
            {
              pairs.slice(0,3).map(pair => {
                return <StylePair pair={pair} key={pair.id} handleStyleCircle={handleStyleCircle}/>
              })
            }
          </div>
          <div className={cx('line-container')}></div>
          <div className={cx('style-column')}>
            {
              pairs.slice(3,6).map(pair => {
                return <StylePair pair={pair} key={pair.id} handleStyleCircle={handleStyleCircle}/>
              })
            }
          </div>
          <div className={cx('line-container')}></div>
            <div className={cx('style-column')}>
            {
              pairs.slice(6,9).map(pair => {
                return <StylePair pair={pair} key={pair.id} handleStyleCircle={handleStyleCircle}/>
              })
            }
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Mypage
