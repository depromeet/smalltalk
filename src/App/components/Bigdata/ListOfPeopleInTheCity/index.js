import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classnames.bind(styles);

const ListOfPeopleInTheCity = ( {id, picture, nickname, age, gender, handleFriendRequest, isClickedFriendRequest} ) => {

  const friendRequest = () => {
    handleFriendRequest(id);
  }

  return (
    <div>
      {isClickedFriendRequest
        ? (
          <div className={cx('box-2')}>
            <img src={picture} className={cx('picture')} alt="profile" />
            <div className={cx('left-row')}>
              <div className={cx('nickname')}>{nickname}</div>
              <div className={cx('content')}>
                <div className={cx('age')}>{age}</div>
                <div className={cx('gender')}>{gender}</div>
              </div>
            </div>
            <div className={cx('right-row')}>
              <div className={cx('text-2')}>친구 신청 완료</div>
            </div>
          </div>
        )
        : (
          <div className={cx('box')}>
            <img src={picture} className={cx('picture')} alt="profile" />
            <div className={cx('left-row')}>
              <div className={cx('nickname')}>{nickname}</div>
              <div className={cx('content')}>
                <div className={cx('age')}>{age}</div>
                <div className={cx('gender')}>{gender}</div>
              </div>
            </div>
            <div className={cx('right-row')} onClick={friendRequest}>
              <div className={cx('text')}>친구신청</div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ListOfPeopleInTheCity;
