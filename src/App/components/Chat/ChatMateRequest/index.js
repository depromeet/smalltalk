import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
// import axios from 'axios';

const cx = classNames.bind(styles);

// POST 친구 요청
// const postFriendsRequest = (oppositeIDNumber) => {
//   const token = 'Token ' + localStorage.getItem('token');
//   const friendsAddURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/friends/add/';
//   const config = { headers: { 'Authorization': token, 'Content-Type': 'application/json'} };
//   const oppositeID = { to_user: oppositeIDNumber };
//   const cityList = axios.post(friendsAddURL, oppositeID, config);
//   cityList.then(response => {console.log(response)})
//   .catch(err => console.log(err));
// }

const ChatMateRequest = ( {id, addMateList, name, denyMateRequest, key, index} ) => {
  const foo = () => {
    addMateList(index, name);
    // postFriendsRequest(id);
  }
  return (
    <div className={cx('list')}>
      <div className={cx('text')}>
        <div className={cx('name')}>{name}</div>
        <div className={cx('phrases')}>님의 메이트 신청</div>
      </div>
      <div className={cx('buttons')}>
        <div className={cx('accept')} onClick={foo} />
        <div className={cx('refuse')} onClick={() => denyMateRequest(id, key)} />
      </div>
    </div>
  );
}

export default ChatMateRequest;
