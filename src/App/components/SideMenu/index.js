import React, { Component, Fragment} from 'react';
import Chat from '../Chat/index';
import MyMate from '../MyMate/index';

class SideMenu extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { isClickedList, isClickedChat } = this.props;
    if(isClickedChat) {
        return(<Chat handleCloseChat={this.props.handleCloseChat}/>)
    }
    else if(isClickedList) {
        return(<MyMate handleCloseList={this.props.handleCloseList} />)
    }
    else {
        return(<div></div>)
    }
  }
}

export default SideMenu;