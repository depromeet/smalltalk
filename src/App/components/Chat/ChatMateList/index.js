import React, { Component } from 'react';
import EachFriendsList from './EachFriendsList/index';
import ChatMateRequest from '../ChatMateRequest/index';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classNames.bind(styles);

class ChatMateList extends Component{
    constructor(props){
    super(props);

    this.state = {
      isClickedFoldButton : false
    }
  }
  handleFoldButton = () => {
    this.setState({isClickedFoldButton : true})
  }
  handleMoreButton = () => {
    this.setState({isClickedFoldButton : false})
  }

  render(){
      return(
        <div className={cx("my-mate")}>
          <div className={cx("buttons")}>
            <div className={cx("list-button")}></div>
            <div className={cx("chat-button")} onClick={this.props.handleChatClick}></div>
          </div>
            <div className={cx("list")}>
              <div className={cx("header")}>현재<br></br>내 메이트 {this.props.FriendsListDataLength}명</div>
              <div className={cx("close-button")} onClick={this.props.handleAllClose}></div>
              {this.state.isClickedFoldButton ?
              <div className={cx("collection-2")}>
              {this.props.FriendsListData.map((list, i) => {
                  return (<EachFriendsList 
                              picture={list.picture}
                              name={list.name}
                              number={list.number}
                              key={i}
                              handleChatClick={this.props.handleChatClick}
                              showRedCircle={false}
                              handleChatRoomClick={this.props.handleChatRoomClick}
                              handleName={this.props.handleName}
                          />);
              })}
              </div>
              :
              <div className={cx("collection")}>
                {this.props.FriendsListData.map((list, i) => {
                    return (<EachFriendsList 
                                picture={list.picture}
                                name={list.name}
                                number={list.number}
                                key={i}
                                handleChatClick={this.props.handleChatClick}
                                showRedCircle={false}
                                handleChatRoomClick={this.props.handleChatRoomClick}
                                handleName={this.props.handleName}
                            />);
                })}
              </div>
              }
          </div>
          {this.state.isClickedFoldButton ? 
          <div className={cx("apply-friend-2")}>
            <div className={cx("rotated-fold-button")} onClick={this.handleMoreButton}></div>
          </div>
          :
          <div className={cx("apply-friend")}>
            <div className={cx("fold-button")} onClick={this.handleFoldButton}></div>
            <div className={cx("collection")}>
            {this.props.ApplyListData.map((list, i) => {
                return (<ChatMateRequest 
                            name={list.name}
                            key={i}
                            id={i}
                            addMateList={this.props.addMateList}
                            denyMateRequest={this.props.denyMateRequest}
                        />);
                    })}
            </div>
          </div>}
        </div>
        )
  }
}

export default ChatMateList;