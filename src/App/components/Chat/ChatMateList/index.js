import React, { Component } from 'react';
import EachFriendsList from './FriendsList/index';
import ChatMateRequest from '../ChatMateRequest/index';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatMateList extends Component{
  constructor(props){
    super(props);

    const testIcon = "http://chittagongit.com/images/60x60-icon/60x60-icon-9.jpg"

    this.state = {
        FriendsListData: [
            {picture: testIcon, name: "김이박", number: "0"},
            {picture: testIcon, name: "가나다", number: "1"},
            {picture: testIcon, name: "다라마", number: "2"},
            {picture: testIcon, name: "마바사", number: "3"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "카타파", number: "0"}
        ],
        ApplyListData: [
            {name: "김군"},
            {name: "박군"},
            {name: "조군"},
            {name: "킴군"}
        ]
    };
  }

  render(){
    const cx = classNames.bind(styles);
    return(
        <div className={cx("my-mate")}>
        <div className={cx("buttons")}>
          <div className={cx("list-button")}></div>
          <div className={cx("chat-button")}></div>
        </div>
        <div className={cx("list")}>
            <div className={cx("header")}>현재<br></br>내 메이트 {this.state.FriendsListData.length}명</div>
            <div className={cx("close-button")} onClick={this.props.handleCloseList}></div>
            <div className={cx("collection")}>
                {this.state.FriendsListData.map((list, i) => {
                    return (<EachFriendsList 
                                picture={list.picture}
                                name={list.name}
                                number={list.number}
                                key={i}
                            />);
                        })}
            </div>
        </div>
        <div className={cx("apply-friend")}>
            <div className={cx("fold-button")}></div>
            <div className={cx("collection")}>
            {this.state.ApplyListData.map((list, i) => {
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