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
    // GET User List
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
        // { picture: 'http://mblogthumb3.phinf.naver.net/20160722_90/cool911016_1469169937457pEG2Q_JPEG/150519_%C7%C7%C4%AB%C3%F2%C6%E4%C0%CC%C6%DB%C5%E4%C0%CC_%B5%B5%BE%C8_004.jpg?type=w800', nickname: '피카츄', messages_cnt: 0 },
        // { picture: 'https://cdn1.iconfinder.com/data/icons/fruits-vegetables-16/512/1_Food_fruit_watermelon-512.png', nickname: '수박수박', messages_cnt: 1 },
        // { picture: testIcon, nickname: '홍길동', messages_cnt: 13 },
        // { picture: 'https://cdn0.iconfinder.com/data/icons/chinese-decorations/64/chinese_new_year_decorations_asian_orange_fruit-512.png', nickname: 'Orange', messages_cnt: 3 },
        // { picture: testIcon, nickname: '노마드', messages_cnt: 55 },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYb48f2aCIexQeGEGdI1OOrLMKsAj0KJf1yT65L9QPTmiWnjegBw', nickname: '사과', messages_cnt: 100 },
        // { picture: testIcon, nickname: '벨로', messages_cnt: 1000 },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqMCZIqtzHFN6SUds8ydLttW8zZFNcjfOHKrO9DKBsCE88W8xAw', nickname: '블루베리', messages_cnt: 0 },
        // { picture: testIcon, nickname: '제로', messages_cnt: 30 },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDh34LvO2uVA0tcrhmfB3-1QXyIL_qyCIdS9H1NXeBFMpouDsbg', nickname: '초록색 사과', messages_cnt: 23 },
        // { picture: testIcon, nickname: '생활', messages_cnt: 7 },
        // { picture: 'https://i.ya-webdesign.com/images/cartoon-orange-png-2.png', nickname: '코딩', messages_cnt: 1 },
        // { picture: testIcon, nickname: '이고잉', messages_cnt: 2 },
      ],
      ApplyListData: [
        // {id: 0, picture: '', name: '1'},
        // {id: 1, picture: '', name: '2'},
        // {id: 2, picture: '', name: '3'},
        // {id: 3, picture: '', name: '4'},
        // {id: 4, picture: '', name: '5'},
      ],
      currentState: '',
      name: '',
      id: null,
    };
  }

  // 친구 수락
  addMateList = (key, obj) => {
    const newState = this.state.friendsListData.concat({ picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', nickname: obj, messages: { message_cnt: 0 } } );
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

  handleListClick = () => {
    this.setState({ currentState: 'ChatMateList' });
  }

  handleChatClick = () => {
    this.setState({ currentState: 'ChatRoomList' });
  }

  handleChatRoomClick = () => {
    this.setState({ currentState: 'ChatRoom' });
  }

  handleName = (mateName) => {
    this.setState({ name: mateName });
  }

  handleAllClose = () => {
    this.setState({ currentState: '' });
  }

  render() {
    const friendsListDataLength = this.state.friendsListData.length;

    switch (this.state.currentState) {
      case 'ChatMateList':
        return (
          <ChatMateList
            handleChatClick={this.handleChatClick}
            ApplyListData={this.state.ApplyListData}
            friendsListDataLength={friendsListDataLength}
            friendsListData={this.state.friendsListData}
            handleAllClose={this.handleAllClose}
            handleChatRoomClick={this.handleChatRoomClick}
            handleName={this.handleName}
            addMateList={this.addMateList}
            denyMateRequest={this.denyMateRequest}
            currentState={this.state.currentState}
            handleID={this.handleID}
          />
        );
      case 'ChatRoomList':
        return (
          <ChatRoomList
            friendsListData={this.state.friendsListData}
            handleListClick={this.handleListClick}
            handleChatClick={this.handleChatClick}
            handleAllClose={this.handleAllClose}
            handleChatRoomClick={this.handleChatRoomClick}
            handleName={this.handleName}
            currentState={this.state.currentState}
            handleID={this.handleID}
          />
        );
      case 'ChatRoom':
        return (
          <ChatRoom
            handleAllClose={this.handleChatClick}
            handleListClick={this.handleListClick}
            name={this.state.name}
            id={this.state.id}
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
