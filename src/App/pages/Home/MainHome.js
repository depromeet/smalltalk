import React, { Component } from 'react';
import MainHomeBackground from '../../components/MainHomeBackground';

class MainHome extends Component{
  constructor(props){
    super(props);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleChatClick = this.handleChatClick.bind(this);
    this.handleListClose = this.handleListClose.bind(this);
    this.handleChatClose = this.handleChatClose.bind(this);
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

  handleListClose() {
    this.setState({isClickedList : false});
  }

  handleChatClose() {
    this.setState({isClickedChat : false});
  }

  render(){
    return (
      <MainHomeBackground 
      isClickedChat={this.state.isClickedChat}
      isClickedList={this.state.isClickedList}
      handleListClick={this.handleListClick}
      handleChatClick={this.handleChatClick}
      handleListClose={this.handleListClose}
      handleChatClose={this.handleChatClose} />
    )
  }
}

export default MainHome;