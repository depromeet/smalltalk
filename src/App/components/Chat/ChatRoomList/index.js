import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import EachFriendsList from '../EachFriendsList';

const cx = classNames.bind(styles);

class ChatRoomList extends Component {
  render() {
    console.log("friendsListData입니다.");
    console.log(this.props.friendsListData);
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
          {this.props.friendsListData.length === 0
            ? (
              <div className={cx('header-2')}>
                <div className={cx('title')}>아직 채팅이 없어요 :(</div>
                <div className={cx('contents')}>여행 메이트를 추천받아<br/>같이 즐거운 여행을 떠나보세요!</div>
              </div>
            ) : <div></div>}
          {this.props.friendsListData.map((list, i) => (
            <EachFriendsList
              picture={list.picture}
              name={list.nickname}
              number={list.messages.message_cnt}
              key={i}
              handleChatRoomClick={this.props.handleChatRoomClick}
              handleName={this.props.handleName}
              isExistChatRoom = {list.messages.is_chat}
              currentState={this.props.currentState}
              handleID={this.props.handleID}
              id={list.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ChatRoomList;
