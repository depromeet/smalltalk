import React, { Component, Fragment} from 'react';
import './style.scss';

class MainHomeBackground extends Component{
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render(){
    return(
    <div className="main-home-background">
        <div className="logo"></div>
        <div className="background-circles">
          <div className="circle" id="red-circle-1"></div>
          <div className="circle" id="edge-circle-1"></div>
          <div className="circle" id="green-circle-1"></div>
          <div className="circle" id="green-circle-2"></div>
          <div className="circle" id="picture-circle-1"></div>
          <div className="circle" id="picture-circle-2"></div>
          <div className="circle" id="edge-circle-2"></div>
          <div className="circle" id="gradation-circle"></div>
          <div className="circle" id="red-circle-2"></div>
        </div>
        <div className="menu">
          <div className="menu-list">MYPAGE</div>
          <div className="menu-list">SCHEDULE</div>
          <div className="menu-list">MATE</div>
          <div className="menu-list">BIGDATA</div>
        </div>
        <div className="lines-1">
          <div className="dashed-arrow"></div>
          <div className="triangles">
            <div className="red-triangle" id="red-triangle-1"></div>
            <div className="red-triangle" id="red-triangle-2"></div>
          </div>
          <div className="introduction">
          전 세계의 친구들을 만날 수
있는 기회를 잡아보세요!
          </div>
          <div className="line-arrow">
            <div className="red-triangle" id="red-triangle-3"></div>
            <div className="red-triangle" id="red-triangle-4"></div>
            <div className="red-line"></div>
          </div>
        </div>
        <div className="lines-2">
          <div className="dashed-line"></div>
          <div className="red-line"></div>
          <div className="white-arrow"></div>
        </div>
        <div className="buttons">
          <div className="list-button" onClick={this.props.isClickedList}></div>
          <div className="chat-button" onClick={this.props.isClickedChat}></div>
        </div>
        <div className="main-home__phrases">
          <div>Let’s</div>
          <div id="main-home__phrases__second-line">small-talk</div>
        </div>
    </div>
    )
  }
}

export default MainHomeBackground;