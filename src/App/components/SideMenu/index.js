import React, { Component } from 'react';
import ChatMateList from '../Chat/ChatMateList/index';
import ChatRoomList from '../../components/Chat/ChatRoomList/index'
import ChatRoom from '../Chat/ChatRoom'

class SideMenu extends Component{

  constructor(props){
    super(props);

    const testIcon = "https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-480.png"

    this.state = {
        FriendsListData: [
            {picture: testIcon, name: "김이박", number: "0"},
            {picture: testIcon, name: "가나다", number: "1"},
            {picture: testIcon, name: "다라마", number: "2"},
            {picture: testIcon, name: "마바사", number: "3"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"},
            {picture: testIcon, name: "아자차", number: "0"}
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
    // const { isClickedList, isClickedChat } = this.props;
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