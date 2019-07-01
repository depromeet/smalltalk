import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatMateRequest extends Component{

  render(){
    const cx = classNames.bind(styles);
    return(
        <div className={cx("list")}>
            <div className={cx("name")}>{this.props.name}</div>
            <div className={cx("phrases")}>님의 메이트 신청</div>
            <div className={cx("buttons")}>
                <div className={cx("accept")}></div>
                <div className={cx("refuse")}></div>
            </div>
        </div>
    )
  }
}

export default ChatMateRequest;