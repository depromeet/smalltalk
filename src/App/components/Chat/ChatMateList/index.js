import React, { Component } from 'react';
import EachFriendsList from './EachFriendsList/index';
import ChatMateRequest from '../ChatMateRequest/index';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatMateList extends Component{

  render(){
    const cx = classNames.bind(styles);
      return(
        <div className={cx("my-mate")}>
          <div className={cx("buttons")}>
            <div className={cx("list-button")}></div>
            <div className={cx("chat-button")} onClick={this.props.handleChatClick}></div>
          </div>
            <div className={cx("list")}>
              <div className={cx("header")}>현재<br></br>내 메이트 {this.props.FriendsListDataLength}명</div>
              <div className={cx("close-button")} onClick={this.props.handleAllClose}></div>
              <div className={cx("collection")}>
            {this.props.FriendsListData.map((list, i) => {
                return (<EachFriendsList 
                            picture={list.picture}
                            name={list.name}
                            number={list.number}
                            key={i}
                            handleChatClick={this.props.handleChatClick}
                            showRedCircle={false}
                            handleChatRoomClick={this.props.handleChatRoomClick}
                            handleName={this.props.handleName}
                        />);
                    })}
            </div>
          </div>
          <div className={cx("apply-friend")}>
            <div className={cx("collection")}>
            {this.props.ApplyListData.map((list, i) => {
                return (<ChatMateRequest 
                            name={list.name}
                            key={i}
                        />);
                    })}
              </div>
            </div>
          </div>
        )
  }
}

export default ChatMateList;