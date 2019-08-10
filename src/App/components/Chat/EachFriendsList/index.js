import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

class EachFriendsList extends Component {
  render() {
    const picture = "https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg";

    const enterChatRoom = (e) => {
      this.props.handleName(e.target.outerText);
      this.props.handleChatRoomClick();
      this.props.handleID(this.props.id);
    };
    return (
      <div>
        <div className={cx('friends-list')}>
          <img src={picture} alt="user-profile" className={cx('profile-picture')} />
          <div className={cx('name')} onClick={enterChatRoom}>{this.props.name}</div>
          {this.props.number !== 0 && this.props.currentState === "ChatRoomList" && this.props.isExistChatRoom && (
          <div className={this.props.number >= 100 ? cx('more-than-100-messages') : cx('less-than-100-messages')}>
            <div className={this.props.number >= 100 ? cx('oval') : cx('circle')} />
            <div className={cx('number')}>{this.props.number >= 100 ? '100+' : this.props.number}</div>
          </div>
          )}
        </div>
      </div>
      )
  }
}

export default EachFriendsList;
