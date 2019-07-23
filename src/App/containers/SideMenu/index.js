import React, { Component } from 'react';
import update from 'react-addons-update';
import ChatMateList from '../../components/Chat/ChatMateList';
import ChatRoomList from '../../components/Chat/ChatRoomList';
import ChatRoom from '../../components/Chat/ChatRoom';
import axios from 'axios';

const token = 'Token ' + localStorage.getItem('token');

const friendsListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/?is_friends=true';
const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
const FriendsList = axios.get(friendsListURL, config);

class SideMenu extends Component {
  componentDidMount() {
    FriendsList.then( ( response ) => {
      this.setState({ 
        FriendsListData: response.data
      });
      console.log(response.data);
      }).catch(err => console.log(err));
  }

  componentWillUnmount() {
    console.log(this.state.FriendsListData);
  }

  constructor(props) {
    super(props);

    const testIcon = 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg';

    this.state = {
      FriendsListData: [
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
        { name: '색연필' },
        { name: '핸드폰' },
        { name: '필통' },
        { name: '머그컵' },
      ],
      friendsListWithChat: [
        { picture: 'http://mblogthumb3.phinf.naver.net/20160722_90/cool911016_1469169937457pEG2Q_JPEG/150519_%C7%C7%C4%AB%C3%F2%C6%E4%C0%CC%C6%DB%C5%E4%C0%CC_%B5%B5%BE%C8_004.jpg?type=w800', nickname: '피카츄', messages_cnt: 0 },
      ],
      currentState: '',
      name: '',
    };
  }

  addFriendsListWithChat = (propsPicture, propsNickname, propsMessages_cnt) => {
    this.setState({
      friendsListWithChat: this.state.friendsListWithChat.concat( {picture: propsPicture, nickname: propsNickname, messages_cnt: propsMessages_cnt} )
    })
  };

  // 친구 수락
  addMateList = (key, obj) => {
    const newState = this.state.FriendsListData.concat({ picture: 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg', name: obj, number: '0' });
    this.setState({ FriendsListData: newState });
    this.setState({ ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] }) });
  }

  // 친구 거절
  denyMateRequest = (key) => {
    this.setState({ ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] }) });
  }

  handleListClick = () => {
    this.setState({ currentState: 'ChatMateList' });
    console.log('currentState : ChatMateList');
  }

  handleChatClick = () => {
    this.setState({ currentState: 'ChatRoomList' });
    console.log('currentState : ChatRoomList');
  }

  handleChatRoomClick = () => {
    this.setState({ currentState: 'ChatRoom' });
    console.log('currentState : ChatRoom');
  }

  handleName = (mateName) => {
    this.setState({ name: mateName });
  }

  handleAllClose = () => {
    this.setState({ currentState: '' });
    console.log('currentState : none');
  }

  render() {
    const FriendsListDataLength = this.state.FriendsListData.length;

    switch (this.state.currentState) {
      case 'ChatMateList':
        return (
          <ChatMateList
            handleChatClick={this.handleChatClick}
            ApplyListData={this.state.ApplyListData}
            FriendsListDataLength={FriendsListDataLength}
            FriendsListData={this.state.FriendsListData}
            handleAllClose={this.handleAllClose}
            handleChatRoomClick={this.handleChatRoomClick}
            handleName={this.handleName}
            addMateList={this.addMateList}
            denyMateRequest={this.denyMateRequest}
            addFriendsListWithChat={this.addFriendsListWithChat}
          />
        );
      case 'ChatRoomList':
        return (
          <ChatRoomList
            FriendsListData={this.state.FriendsListData}
            handleListClick={this.handleListClick}
            handleChatClick={this.handleChatClick}
            handleAllClose={this.handleAllClose}
            handleChatRoomClick={this.handleChatRoomClick}
            handleName={this.handleName}
            friendsListWithChat={this.state.friendsListWithChat}
          />
        );
      case 'ChatRoom':
        return (
          <ChatRoom
            handleAllClose={this.handleAllClose}
            handleListClick={this.handleListClick}
            name={this.state.name}
            id={this.state.FriendsListData.id}
          />
        );
      default: 
        return(
          // 친구 리스트, 채팅 버튼
          <div className="buttons">
            <div className="list-button" onClick={this.handleListClick}></div>
            <div className="chat-button" onClick={this.handleChatClick}></div>
          </div>
        );
    }
  }
}

export default SideMenu;