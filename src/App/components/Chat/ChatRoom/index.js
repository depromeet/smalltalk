import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatRoom extends Component{
    
  render(){
    const cx = classNames.bind(styles);
    return(
        <div className={cx("chat")}>
            <div className={cx("buttons")}>
                <div className={cx("list-button")} onClick={this.props.handleListClick}></div>
                <div className={cx("chat-button")}></div>
            </div>
            <div className={cx("header")}>
                <div className={cx("title")}>
                    <div className={cx("name")}>{this.props.name}</div>
                    <div className={cx("text")}>님</div>
                </div>
                <div className={cx("close-button")} onClick={this.props.handleAllClose}></div>
            </div>
            <div className={cx("content")}>
                <div className={cx("opposite")}>
                    <div className={cx("profile-picture")}></div>
                    <div className={cx("talk-list")}>
                        <div className={cx("background")}>
                            <div className={cx("sentence")}>안녕하세요.</div>
                        </div>
                    </div>
                </div>
                <div className={cx("mine")}>
                    <div className={cx("talk-list")}>
                        <div className={cx("background")}>
                            <div className={cx("sentence")}>네 반가워요.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <textarea className={cx("input")}></textarea>
                <div className={cx("send-button")}></div>
            </div>
        </div>
    )
  }
}

export default ChatRoom;