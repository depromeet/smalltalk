import React, { Component } from 'react';
import classNames from 'classnames/bind';
import EachFriendsList from '../EachFriendsList';
import ChatMateRequest from '../ChatMateRequest';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

class ChatMateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickedFoldButton: false,
    };
  }

  handleFoldButton = () => {
    this.setState({ isClickedFoldButton: true });
  }

  handleMoreButton = () => {
    this.setState({ isClickedFoldButton: false });
  }

  render() {
    return (
      <div className={cx('my-mate')}>
        <div className={cx('buttons')}>
          <div className={cx('list-button')} />
          <div className={cx('chat-button')} onClick={this.props.handleChatClick} />
        </div>
        <div className={cx('list')}>
          <div className={cx('header')}>
            현재<br />내 메이트{' '}
            {this.props.friendsListDataLength}명
          </div>
          <div className={cx('close-button')} onClick={this.props.handleAllClose} />
          {this.state.isClickedFoldButton
            ? (
              <div className={cx('collection-2')}>
                {this.props.friendsListData.map((list, i) => (
                  <EachFriendsList
                    picture={list.picture}
                    name={list.nickname}
                    number={list.messages_cnt}
                    key={i}
                    handleChatClick={this.props.handleChatClick}
                    handleChatRoomClick={this.props.handleChatRoomClick}
                    handleName={this.props.handleName}
                    addFriendsListWithChat={this.props.addFriendsListWithChat}
                    currentState={this.props.currentState}
                    handleID={this.props.handleID}
                    id={list.id}
                  />
                ))
            }
              </div>
            )
            : (
              <div className={cx('collection')}>
                {this.props.friendsListData.map((list, i) => (
                  <EachFriendsList
                    picture={list.picture}
                    name={list.nickname}
                    number={list.messages_cnt}
                    key={i}
                    handleChatClick={this.props.handleChatClick}
                    handleChatRoomClick={this.props.handleChatRoomClick}
                    handleName={this.props.handleName}
                    addFriendsListWithChat={this.props.addFriendsListWithChat}
                    currentState={this.props.currentState}
                    handleID={this.props.handleID}
                    id={list.id}
                  />
                ))}
              </div>
            )
              }
        </div>
        {this.state.isClickedFoldButton
          ? (
            <div className={cx('apply-friend-2')}>
              <div className={cx('rotated-fold-button')} onClick={this.handleMoreButton} />
            </div>
          )
          : (
            <div className={cx('apply-friend')}>
              <div className={cx('fold-button')} onClick={this.handleFoldButton} />
              <div className={cx('collection')}>
                {this.props.ApplyListData.map((list, i) => (
                  <ChatMateRequest
                    name={list.name}
                    key={i}
                    id={i}
                    addMateList={this.props.addMateList}
                    denyMateRequest={this.props.denyMateRequest}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default ChatMateList;
