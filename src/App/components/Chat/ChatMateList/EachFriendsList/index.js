import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class EachFriendsList extends Component{

  render(){
    const hi = (e) => {
      console.log(e.target.outerText)
      this.props.handleName(e.target.outerText);
      this.props.handleChatRoomClick();
    }
    const cx = classNames.bind(styles);
        return(
          <div>
            <div className={cx("friends-list")}>
              <img src={this.props.picture} alt="profile" className={cx("profile-picture")}></img>
              <div className={cx("name")} onClick={hi}>{this.props.name}</div>
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