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
      currentState : "",
      name : ""
    }
  }

  handleListClick = () => {
    this.setState({currentState : "ChatMateList"});
    console.log("currentState : ChatMateList");
  }

  handleChatClick = () => {
    this.setState({currentState : "ChatRoomList"});
    console.log("currentState : ChatRoomList");
  }

  handleChatRoomClick = () => {
    this.setState({currentState : "ChatRoom"});
    console.log("currentState : ChatRoom");
  }
  
  handleName = (mateName) => {
    this.setState({name : mateName})
  }

  handleAllClose = () => {
    this.setState({currentState : ""});
    console.log("currentState : none");
  }

  render(){
    return (
      <Fragment>
        <MainHomeBackground 
          handleListClick={this.handleListClick}
          handleChatClick={this.handleChatClick}
        />
        <SideMenu
          handleListClick={this.handleListClick}
          handleChatClick={this.handleChatClick}
          handleAllClose={this.handleAllClose}
          currentState={this.state.currentState}
          handleChatRoomClick={this.handleChatRoomClick}
          handleName={this.handleName}
          name={this.state.name}
        />
      </Fragment>
    )
  }
}

export default MainContainer;