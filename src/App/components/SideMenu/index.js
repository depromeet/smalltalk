import React, { Component } from 'react';
import ChatRoom from '../Chat/ChatRoom/index';
import ChatMateList from '../Chat/ChatMateList/index';

class SideMenu extends Component{

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
    const { isClickedList, isClickedChat } = this.props;
    let FriendsListDataLength = this.state.FriendsListData.length;

    if(isClickedChat) {
        return(<ChatRoom 
            handleChatClose={this.props.handleChatClose}
            isClickedList={this.props.isClickedList}
            name={this.state.FriendsListData.name} />)
    }
    else if(isClickedList) {
        return(<ChatMateList 
            handleListClose={this.props.handleListClose} 
            handleChatClick={this.props.handleChatClick}
            isClickedList={this.props.isClickedList}
            ApplyListData={this.state.ApplyListData}
            FriendsListDataLength={FriendsListDataLength}
            FriendsListData={this.state.FriendsListData}
             />)
    }
    else {
        return <div></div>;
    }
  }
}

export default SideMenu;