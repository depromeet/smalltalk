import React, { Component, Fragment} from 'react';
import MainHomeBackground from '../../components/MainHomeBackground';

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
    console.log("isClickedList : false");
  }

  handleCloseChat() {
    this.setState({isClickedChat : false});
    console.log("isClickedChat : false");
  }

  render(){
    return (
      <MainHomeBackground 
      isClickedChat={this.state.isClickedChat}
      isClickedList={this.state.isClickedList}
      handleListClick={this.handleListClick}
      handleChatClick={this.handleChatClick}
      handleCloseList={this.handleCloseList}
      handleCloseChat={this.handleCloseChat} />
    )
  }
}

export default MainHome;