import React, { Component } from 'react';
import ChatRoom from '../../Chat/ChatRoom/index';
import ChatMateList from '../../Chat/ChatMateList/index';

class SideMenu extends Component{

  render(){
    const { isClickedList, isClickedChat } = this.props;
    if(isClickedChat) {
        return(<ChatRoom 
            handleCloseChat={this.props.handleCloseChat}
            isCLickedList={this.props.isClickedList} />)
    }
    else if(isClickedList) {
        return(<ChatMateList 
            handleCloseList={this.props.handleCloseList} />)
    }
    else {
        return <div></div>;
    }
  }
}

export default SideMenu;