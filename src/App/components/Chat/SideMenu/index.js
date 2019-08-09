import React, { Component } from 'react';
import update from 'react-addons-update';
import ChatMateList from '../ChatMateList';
import ChatRoomList from '../ChatRoomList';
import ChatRoom from '../ChatRoom';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

class SideMenu extends Component {
  componentDidMount() {
    // GET User List, 친구 목록
    const token = 'Token ' + localStorage.getItem('token');
    const friendsListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/?is_friends=true';
    const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
    const getUserList = axios.get(friendsListURL, config);
    getUserList.then( ( response ) => {
      this.setState({ 
        friendsListData: response.data
      });
    }).catch(err => console.log(err));

    const friendsRequestOnListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/friends/';
    const getFriendRequestList = axios.get(friendsRequestOnListURL, config);
    getFriendRequestList.then( ( response ) => {
      const oppositeIDArray = response.data.map(x => x.from_user);

      for(let oppositeID of oppositeIDArray){ 
        const token = 'Token ' + localStorage.getItem('token');
        const userInfoURL = `http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/${oppositeID}/`;
        const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
        const getUserInfo = axios.get(userInfoURL, config);
        getUserInfo.then( ( response ) => {
          this.setState({ 
            ApplyListData: this.state.ApplyListData.concat(response.data)
          });
        }).catch(err => console.log(err));
      }


    }).catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
    // const testIcon = 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg';
    this.state = {
      friendsListData: [
        // { picture: '', nickname: '피카츄', messages_cnt: 0 },
        // { picture: '', nickname: '수박수박', messages_cnt: 1 },
      ],
      ApplyListData: [
        // {id: 0, picture: '', name: '1'},
        // {id: 1, picture: '', name: '2'},
      ],
      currentState: '',
      name: '',
      id: null,
    };
  }

  // 친구 수락
  addMateList = (key, obj) => {
    const newState = this.state.friendsListData.concat({ 
      picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', nickname: obj, messages: {message_cnt: 0} 
    });
    this.setState({ friendsListData: newState });
    this.setState({ ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] }) });
  }

  // 친구 거절
  denyMateRequest = (key) => {
    this.setState({ ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] }) });
  }

  handleID = (ID) => {
    this.setState({ id: ID });
  }

  handleName = (mateName) => {
    this.setState({ name: mateName });
  }

  // UI
  handleListClick = () => {
    this.setState({ currentState: 'ChatMateList' });
  }

  handleChatClick = () => {
    this.setState({ currentState: 'ChatRoomList' });
  }

  handleChatRoomClick = () => {
    this.setState({ currentState: 'ChatRoom' });
  }

  handleAllClose = () => {
    this.setState({ currentState: '' });
  }

  render() {
    switch (this.state.currentState) {
      case 'ChatMateList':
        return (
          <ChatMateList
            friendsListData={this.state.friendsListData}
            ApplyListData={this.state.ApplyListData}
            
            // UI
            currentState={this.state.currentState}
            handleChatClick={this.handleChatClick}
            handleChatRoomClick={this.handleChatRoomClick}
            handleAllClose={this.handleAllClose}

            handleID={this.handleID}
            handleName={this.handleName}
            
            addMateList={this.addMateList}
            denyMateRequest={this.denyMateRequest}
          />
        );
      case 'ChatRoomList':
        return (
          <ChatRoomList
            friendsListData={this.state.friendsListData}

            // UI
            currentState={this.state.currentState}
            handleListClick={this.handleListClick}
            handleChatClick={this.handleChatClick}
            handleChatRoomClick={this.handleChatRoomClick}
            handleAllClose={this.handleAllClose}
            
            handleID={this.handleID}
            handleName={this.handleName}
          />
        );
      case 'ChatRoom':
        return (
          <ChatRoom
            // UI
            handleListClick={this.handleListClick}
            handleAllClose={this.handleChatClick}            
            
            id={this.state.id}
            name={this.state.name}
          />
        );
      default: 
        return (
          // 친구 리스트, 채팅 버튼
          <div className={cx("buttons")}>
            <div className={cx("list-button")} onClick={this.handleListClick}></div>
            <div className={cx("chat-button")} onClick={this.handleChatClick}></div>
          </div>
        );
    }
  }
}

export default SideMenu;
