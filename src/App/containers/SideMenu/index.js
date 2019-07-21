import React, { Component } from 'react';
import update from 'react-addons-update';
import ChatMateList from '../../components/Chat/ChatMateList';
import ChatRoomList from '../../components/Chat/ChatRoomList';
import ChatRoom from '../../components/Chat/ChatRoom';
import axios from 'axios';

class SideMenu extends Component {
  callAPI = () => {
    const API = axios.get(`http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/?is_friends=true`, { headers: { 'Authorization': `Token 320e05edcaf069d234458007c87d028f9c6e195a`, 'Content-Type': `application/json`} });
    API.then( response => {
      console.log(response)
      let testArray = [];
      response.data.map(x => testArray.push(x));
      this.setState({ FriendsListData: testArray });
      console.log(this.state);
    }).catch( err => console.log(err) );
  }

  componentDidMount() {
    this.callAPI();
    console.log( this.state )
  };

  constructor(props) {
    super(props);

    // const testIcon = 'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/E8E313C7-76E7-4C7A-B02B-66C95FD000FE.svg';

    this.state = {
      FriendsListData: [
        // { picture: 'http://mblogthumb3.phinf.naver.net/20160722_90/cool911016_1469169937457pEG2Q_JPEG/150519_%C7%C7%C4%AB%C3%F2%C6%E4%C0%CC%C6%DB%C5%E4%C0%CC_%B5%B5%BE%C8_004.jpg?type=w800', name: '피카츄', number: '0' },
        // { picture: 'https://cdn1.iconfinder.com/data/icons/fruits-vegetables-16/512/1_Food_fruit_watermelon-512.png', name: '수박수박', number: '1' },
        // { picture: testIcon, name: '홍길동', number: '2' },
        // { picture: 'https://cdn0.iconfinder.com/data/icons/chinese-decorations/64/chinese_new_year_decorations_asian_orange_fruit-512.png', name: 'Orange', number: '3' },
        // { picture: testIcon, name: '노마드', number: '0' },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYb48f2aCIexQeGEGdI1OOrLMKsAj0KJf1yT65L9QPTmiWnjegBw', name: '사과', number: '0' },
        // { picture: testIcon, name: '벨로', number: '0' },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqMCZIqtzHFN6SUds8ydLttW8zZFNcjfOHKrO9DKBsCE88W8xAw', name: '블루베리', number: '5' },
        // { picture: testIcon, name: '제로', number: '0' },
        // { picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDh34LvO2uVA0tcrhmfB3-1QXyIL_qyCIdS9H1NXeBFMpouDsbg', name: '초록색 사과', number: '0' },
        // { picture: testIcon, name: '생활', number: '7' },
        // { picture: 'https://i.ya-webdesign.com/images/cartoon-orange-png-2.png', name: '코딩', number: '0' },
        // { picture: testIcon, name: '이고잉', number: '0' },
      ],
      ApplyListData: [
        { name: '색연필' },
        { name: '핸드폰' },
        { name: '필통' },
        { name: '머그컵' },
      ],
    };
  }

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

  render() {
    const FriendsListDataLength = this.state.FriendsListData.length;

    switch (this.props.currentState) {
      case 'ChatMateList':
        return (
          <ChatMateList
            handleChatClick={this.props.handleChatClick}
            ApplyListData={this.state.ApplyListData}
            FriendsListDataLength={FriendsListDataLength}
            FriendsListData={this.state.FriendsListData}
            handleAllClose={this.props.handleAllClose}
            handleChatRoomClick={this.props.handleChatRoomClick}
            handleName={this.props.handleName}
            addMateList={this.addMateList}
            denyMateRequest={this.denyMateRequest}
          />
        );
      case 'ChatRoomList':
        return (
          <ChatRoomList
            FriendsListData={this.state.FriendsListData}
            handleListClick={this.props.handleListClick}
            handleChatClick={this.props.handleChatClick}
            handleAllClose={this.props.handleAllClose}
            handleChatRoomClick={this.props.handleChatRoomClick}
            handleName={this.props.handleName}
          />
        );
      case 'ChatRoom':
        return (
          <ChatRoom
            handleAllClose={this.props.handleAllClose}
            handleListClick={this.props.handleListClick}
            name={this.props.name}
          />
        );
      default: return <div />;
    }
  }
}

export default SideMenu;
