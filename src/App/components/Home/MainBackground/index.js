import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class MainBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 메뉴 뒤에 위치하는 박스 위치
      left1: -30+'vw',
      left2: -30+'vw',
      left3: -30+'vw',
      left4: -30+'vw',
      // 박스 투명도
      opacitiy1: 0,
      opacitiy2: 0,
      opacitiy3: 0,
      opacitiy4: 0,
    };
  }
  
  // 메뉴 마우스 오버시 나타나는 애니메이션 함수들
  handleMouseOver1 = () => {
    this.setState({ left1: 0, opacitiy1: 1 });
  }

  handleMouseOut1 = () => {
    this.setState({ left1: -30+'vw', opacitiy1: 0 });
  }
  
  handleMouseOver2 = () => {
    this.setState({ left2: 0, opacitiy2: 1 });
  }

  handleMouseOut2 = () => {
    this.setState({ left2: -30+'vw', opacitiy2: 0 });
  }

  handleMouseOver3 = () => {
    this.setState({ left3: 0, opacitiy3: 1 });
  }

  handleMouseOut3 = () => {
    this.setState({ left3: -30+'vw', opacitiy3: 0 });
  }

  handleMouseOver4 = () => {
    this.setState({ left4: 0, opacitiy4: 1 });
  }

  handleMouseOut4 = () => {
    this.setState({ left4: -30+'vw', opacitiy4: 0 });
  }

  render() {
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
          <Link to="/mypage" className="menu-list" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
          MYPAGE<div id="box1" className="menu-box" style={{left: this.state.left1, opacity: this.state.opacitiy1}}></div>
          </Link>
          <Link to="/schedule" className="menu-list" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}>
          SCHEDULE<div id="box2" className="menu-box" style={{left: this.state.left2, opacity: this.state.opacitiy2}}></div>
          </Link>
          <Link to="/mate" className="menu-list" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}>
            MATE<div id="box3" className="menu-box" style={{left: this.state.left3, opacity: this.state.opacitiy3}}></div>
          </Link>
          <Link to="/bigdata" className="menu-list" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}>
          BIGDATA<div id="box4" className="menu-box" style={{left: this.state.left4, opacity: this.state.opacitiy4}}></div>
          </Link>
          <div className="menu-box"></div>
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
        <div className="main-home__phrases"></div>
      </div>
      )  
  }
}

export default MainBackground;
