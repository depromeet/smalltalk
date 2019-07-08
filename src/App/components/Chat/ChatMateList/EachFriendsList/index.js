import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class EachFriendsList extends Component{

  render(){
    const cx = classNames.bind(styles);

    if(this.props.number === "0") {
        return(
            <div className={cx("friends-list")}>
                <img src={this.props.picture} alt="profile" className={cx("profile-picture")}></img>
                <div className={cx("name")}>{this.props.name}</div>
            </div>
        )  
    }
    else {
        return(
            <div className={cx("friends-list")}>
                <img src={this.props.picture} alt="profile" className={cx("profile-picture")}></img>
                <div className={cx("name")}>{this.props.name}</div>
                <div className={cx("unchecked-messages")}>
                    <div className={cx("circle")}></div>
                    <div className={cx("number")}>{this.props.number}</div>
                </div>
            </div>
        )
    }
  }
}

export default EachFriendsList;