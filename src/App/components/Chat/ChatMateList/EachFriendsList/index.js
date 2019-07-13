import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classNames.bind(styles);

class EachFriendsList extends Component{
  render(){
    const enterChatRoom = (e) => {
      // console.log(e.target.outerText)
      this.props.handleName(e.target.outerText);
      this.props.handleChatRoomClick();
    }
    return(
      <div>
        <div className={cx("friends-list")}>
          <img src={this.props.picture} alt="profile" className={cx("profile-picture")}></img>
          <div className={cx("name")} onClick={enterChatRoom}>{this.props.name}</div>
          {this.props.number !== "0" && this.props.showRedCircle &&
          <div className={cx("unchecked-messages")}>
            <div className={cx("circle")}></div>
            <div className={cx("number")}>{this.props.number}</div>
          </div>}
        </div>
      </div>
    )
  }
}

export default EachFriendsList;
