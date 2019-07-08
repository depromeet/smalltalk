import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import EachFriendsList from '../ChatMateList/EachFriendsList/index'

class ChatRoomList extends Component {
  render(){
  const cx = classNames.bind(styles);
  return(
    <div className={cx("chat-list")}>
      <div className={cx("buttons")}>
        <div className={cx("list-button")} onClick={this.props.handleListClick}></div>
        <div className={cx("chat-button")}></div>
      </div>
      <div className={cx("header")}>
        <div className={cx("title")}>채팅방</div>
        <div className={cx("close-button")} onClick={this.props.handleAllClose}></div>
      </div>
      <div className={cx("collection")}>
        {this.props.FriendsListData.map((list, i) => {
          return (<EachFriendsList 
                  picture={list.picture}
                  name={list.name}
                  number={list.number}
                  key={i}
                  showRedCircle={true}
                  handleChatRoomClick={this.props.handleChatRoomClick}
                  handleName={this.props.handleName}
              />);
          })}
      </div>
    </div>
  )
}
}

export default ChatRoomList;