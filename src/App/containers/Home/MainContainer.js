import React, { Component, Fragment } from 'react';
import MainHomeBackground from '../../components/Home/MainBackground';
import SideMenu from '../../components/SideMenu/index';

class MainContainer extends Component{
  constructor(props){
    super(props);
    // this.handleListClick = this.handleListClick.bind(this);
    // this.handleChatClick = this.handleChatClick.bind(this);
    // this.handleListClose = this.handleListClose.bind(this);
    // this.handleChatClose = this.handleChatClose.bind(this);
    this.state={
      isClickedList : false,
      isClickedChat : false
    }
  }

  handleListClick = () => {
    this.setState({isClickedList : true});
  }

  handleChatClick = () => {
    this.setState({isClickedChat : true});
  }

  handleListClose = () => {
    this.setState({isClickedList : false});
  }

  handleChatClose = () => {
    this.setState({isClickedChat : false});
  }

  render(){
    return (
      <Fragment>
        <MainHomeBackground 
          // isClickedChat={this.state.isClickedChat}
          // isClickedList={this.state.isClickedList}
          handleListClick={this.handleListClick}
          handleChatClick={this.handleChatClick}
          // handleListClose={this.handleListClose}
          // handleChatClose={this.handleChatClose} 
        />
        <SideMenu
          isClickedChat={this.state.isClickedChat}
          isClickedList={this.state.isClickedList}
          handleListClick={this.handleListClick}
          handleChatClick={this.handleChatClick}
          handleListClose={this.handleListClose}
          handleChatClose={this.handleChatClose}
        />
      </Fragment>
    )
  }
}

export default MainContainer;