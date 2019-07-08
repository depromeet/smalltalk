import React, { Component } from 'react';
import ChatMateList from '../Chat/ChatMateList/index';
import ChatRoomList from '../../components/Chat/ChatRoomList/index'

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
    const { isClickedList, isClickedChat } = this.props;
    let FriendsListDataLength = this.state.FriendsListData.length;
    
    if(isClickedList){
      return(
        <ChatMateList 
          handleListClose={this.props.handleListClose} 
          handleChatClick={this.props.handleChatClick}
          ApplyListData={this.state.ApplyListData}
          FriendsListDataLength={FriendsListDataLength}
          FriendsListData={this.state.FriendsListData}
          />
        )
      }
      else if(isClickedChat) {
        return(
          <ChatRoomList 
            isClickedChat={this.state.isClickedChat}
            FriendsListData={this.state.FriendsListData}
            handleListClick={this.props.handleListClick}
            handleChatClick={this.props.handleChatClick}
            handleListClose={this.props.handleListClose}
            handleChatClose={this.props.handleChatClose}
          />
        )
      }
      else {
        return <div></div>
      }
  }
}

export default SideMenu;