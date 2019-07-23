import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

class EachFriendsList extends Component {
  render() {
    const enterChatRoom = (e) => {
      this.props.handleName(e.target.outerText);
      this.props.handleChatRoomClick();
      this.props.addFriendsListWithChat === undefined ? console.log(this.props.addFriendsListWithChat) : this.props.addFriendsListWithChat(this.props.picture, this.props.name, this.props.number)
    };
    return (
      <div>
        <div className={cx('friends-list')}>
          <img src={this.props.picture} alt="profile" className={cx('profile-picture')} />
          <div className={cx('name')} onClick={enterChatRoom}>{this.props.name}</div>
          {this.props.number !== 0 && this.props.number < 100 && this.props.showRedCircle
          && (
          <div className={cx('unchecked-messages')}>
            <div className={cx('circle')} />
            <div className={cx('number')}>{this.props.number}</div>
          </div>
          )}
          {/* 읽지 않은 메세지 수가 100개 이상이면 100+로 표시합니다. */}
          {this.props.number >= 100 && this.props.showRedCircle
          && (
          <div className={cx('unchecked-messages-2')}>
            <div className={cx('circle-2')} />
            <div className={cx('number')}>100+</div>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default EachFriendsList;
