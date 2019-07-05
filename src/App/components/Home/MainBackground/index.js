import React, { Component } from 'react';
import './style.scss';
import SideMenu from '../../MainHomeBackground/SideMenu/index'

class MainHomeBackground extends Component{
  render(){
    return(
    <div className="main-home-background">
        <div className="logo"></div>
        {/* 뒤 배경 원들 */}
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
        {/* 메뉴 */}
        <div className="menu">
          <a href="/mypage"> <div className="menu-list">MYPAGE </div> </a>
          <a href="/schedule"> <div className="menu-list">SCHEDULE </div> </a>
          <a href="/mate"> <div className="menu-list">MATE </div> </a>
          <a href="/bigdata"> <div className="menu-list">BIGDATA </div> </a>
        </div>
        {/* 화살표 1 */}
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
        {/* 화살표 2 */}
        <div className="lines-2">
          <div className="dashed-line"></div>
          <div className="red-line"></div>
          <div className="white-arrow"></div>
        </div>
        {/* 친구 리스트, 채팅 버튼 */}
        <div className="buttons">
          <div className="list-button" onClick={this.props.handleListClick}></div>
          <div className="chat-button" onClick={this.props.handleChatClick}></div>
        </div>
        {/* Let's small-talk 글귀 */}
        <div className="main-home__phrases">
          <div>Let’s</div>
          <div id="main-home__phrases__second-line">small-talk</div>
        </div>
        <SideMenu 
        isClickedChat={this.props.isClickedChat}
        isClickedList={this.props.isClickedList}
        handleChatClick={this.props.handleChatClick}
        handleListClick={this.props.handleListClick}
        handleChatClose={this.props.handleChatClose}
        handleListClose={this.props.handleListClose} />
    </div>
    )
  }
}

export default MainHomeBackground;
