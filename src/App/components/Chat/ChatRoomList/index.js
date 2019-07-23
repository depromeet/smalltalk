import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import EachFriendsList from '../EachFriendsList';
import axios from 'axios';

const cx = classNames.bind(styles);

const postAPOD = () => {
  return axios.post(`http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/send/`, {'to_users': 3, 'description': 'fdfdf'} ,{ headers: { 'Authorization': `Token 320e05edcaf069d234458007c87d028f9c6e195a`, 'Content-Type': `application/json`} }, );
};

const getAPOD2 = () => {
  postAPOD().then((response) => {
    console.log(response);
  }).catch((e) => {
    console.log(e)
  });
};

class ChatRoomList extends Component {
  componentDidMount() {
    getAPOD2();
    // axios({
    //   method: 'post',
    //   header: {'Authorization': 'Token 320e05edcaf069d234458007c87d028f9c6e195a'},
    //   url: 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/',
    //   data: {
    //     "to_user": 3,
    //     "description": "fdfdf",
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <div className={cx('chat-list')}>
        <div className={cx('buttons')}>
          <div className={cx('list-button')} onClick={this.props.handleListClick} />
          <div className={cx('chat-button')} />
        </div>
        <div className={cx('header')}>
          <div className={cx('title')}>채팅방</div>
          <div className={cx('close-button')} onClick={this.props.handleAllClose} />
        </div>
        <div className={cx('collection')}>
          {this.props.friendsListWithChat.map((list, i) => (
            <EachFriendsList
              picture={list.picture}
              name={list.nickname}
              number={list.messages_cnt}
              key={i}
              showRedCircle
              handleChatRoomClick={this.props.handleChatRoomClick}
              handleName={this.props.handleName}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ChatRoomList;
