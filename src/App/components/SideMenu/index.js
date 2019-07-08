import React, { Component } from 'react';
import ChatMateList from '../Chat/ChatMateList/index';
import ChatRoomList from '../../components/Chat/ChatRoomList/index'
import ChatRoom from '../Chat/ChatRoom'
import update from 'react-addons-update'

class SideMenu extends Component{
  constructor(props){
    super(props);

    const testIcon = "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-480.png"

    this.state = {
        FriendsListData: [
            {picture: testIcon, name: "김이박", number: "0"},
            {picture: testIcon, name: "수박수", number: "1"},
            {picture: testIcon, name: "홍길동", number: "2"},
            {picture: testIcon, name: "스몰토크", number: "3"},
            {picture: testIcon, name: "노마드", number: "0"},
            {picture: testIcon, name: "코더어", number: "0"},
            {picture: testIcon, name: "벨로", number: "0"},
            {picture: testIcon, name: "퍼트", number: "5"},
            {picture: testIcon, name: "제로", number: "0"},
            {picture: testIcon, name: "초", number: "0"},
            {picture: testIcon, name: "생활", number: "7"},
            {picture: testIcon, name: "코딩", number: "0"},
            {picture: testIcon, name: "이고잉", number: "0"}
        ],
        ApplyListData: [
            {name: "색연필"},
            {name: "핸드폰"},
            {name: "필통"},
            {name: "머그컵"}
        ]
    };
  }

  addMateList = (key, obj) => {
    //console.log(e.parentElement.parentElement)
    const newState = this.state.FriendsListData.concat({picture: "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-480.png", name: obj, number: "0"});
    this.setState({FriendsListData: newState});
    this.setState({ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] })
    })
  }
  denyMateRequest = (key) => {
    //console.log(e.parentElement.parentElement)
    this.setState({ApplyListData: update(this.state.ApplyListData, { $splice: [[key, 1]] })
    })
  }

  render(){
    let FriendsListDataLength = this.state.FriendsListData.length;
    
    switch (this.props.currentState) {
      case "ChatMateList":
        return(
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
          )
      case "ChatRoomList":
        return(
          <ChatRoomList 
            FriendsListData={this.state.FriendsListData}
            handleListClick={this.props.handleListClick}
            handleChatClick={this.props.handleChatClick}
            handleAllClose={this.props.handleAllClose}
            handleChatRoomClick={this.props.handleChatRoomClick}
            handleName={this.props.handleName}
          />
        )
      case "ChatRoom":
        return(
          <ChatRoom 
            handleAllClose={this.props.handleAllClose}
            handleListClick={this.props.handleListClick}
            name={this.props.name}
            />
          )
      default:
        return <div></div>
    }
  }
}
    
  

export default SideMenu;