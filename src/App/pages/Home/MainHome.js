import React, { Component, Fragment} from 'react';
import MainHomeBackground from '../../components/MainHomeBackground';
import MyMate from '../../components/MyMate/index';
import Chat from '../../components/Chat/index'

class MainHome extends Component{
  constructor(props){
    super(props);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleChatClick = this.handleChatClick.bind(this);
    this.handleCloseList = this.handleCloseList.bind(this);
    this.handleCloseChat = this.handleCloseChat.bind(this);
    this.state={
      isClickedList : false,
      isClickedChat : false
    }
  }

  handleListClick() {
    this.setState({isClickedList : true});
  }

  handleChatClick() {
    this.setState({isClickedChat : true});
  }

  handleCloseList() {
    this.setState({isClickedList : false});
  }

  handleCloseChat() {
    this.setState({isClickedChat : false});
  }

  render(){
    const { isClickedList, isClickedChat } = this.state;
    if(isClickedList) {
      return(
        <div>
          <MainHomeBackground />
          <MyMate isClickedList={this.handleCloseList} />
        </div>
      )
    } if(isClickedChat) {
      return(
        <div>
          <MainHomeBackground />
          <Chat isClickedChat={this.handleCloseChat} />
        </div>
      )
    } else {
      return(
        <MainHomeBackground 
        isClickedList={this.handleListClick} 
        isClickedChat={this.handleChatClick} />
      )
    }
  }
}

export default MainHome;