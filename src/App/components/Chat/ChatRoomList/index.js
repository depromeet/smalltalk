import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import EachFriendsList from '../EachFriendsList';

const cx = classNames.bind(styles);

class ChatRoomList extends Component {
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
          {this.props.friendsListData.map((list, i) => (
            <EachFriendsList
              picture={list.picture}
              name={list.nickname}
              number={list.messages_cnt}
              key={i}
              handleChatRoomClick={this.props.handleChatRoomClick}
              handleName={this.props.handleName}
              isExistChatRoom = {list.messages.is_chat}
              currentState={this.props.currentState}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ChatRoomList;
