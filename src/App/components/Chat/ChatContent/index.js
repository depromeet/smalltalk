import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatContent extends Component{    
  render(){
    const cx = classNames.bind(styles);
    
    // lastType을 정의하는데 TypeError가 떠서 임시로 try문 선언합니다. 수정해야합니다.
    try{
        var lastType = this.props.lastType.type
    }
    catch{
        console.log("hi err")
    }
    return(
        <div>
            {/* 상대방 채팅일 경우 */}
            {this.props.type === "opposite" ?
                <div className={cx("opposite")}>
                {/* 이전 채팅의 type을 확인해서 상대방 채팅이었으면 공백을, 상대방 채팅이 아니면 프로필 사진을 보여줍니다. */}
                {lastType === "opposite" ? <div className={cx("space")}></div> : <div className={cx("profile-picture")}></div>}
                <div className={cx("talk-list")}>
                    <div className={cx("background")}>
                        <div className={cx("sentence")}>{this.props.text}</div>
                    </div>
                </div>
            </div>
            : 
            // 내 채팅일 경우
            <div className={cx("mine")}>
                <div className={cx("talk-list")}>
                    <div className={cx("background")}>
                        <div className={cx("sentence")}>{this.props.text}</div>
                    </div>
                </div>
            </div>}
        </div>
    )
  }
}

export default ChatContent;