import React, { Component, Fragment} from 'react';
import './MainHome.scss';

class MainHome extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="logo"></div>
        <div className="backgroundCircle">
          <div className="circle" id="redCircle1"></div>
          <div className="circle" id="edgeCircle1"></div>
          <div className="circle" id="greenCircle1"></div>
          <div className="circle" id="greenCircle2"></div>
          <div className="circle" id="pictureCircle1"></div>
          <div className="circle" id="pictureCircle2"></div>
          <div className="circle" id="edgeCircle2"></div>
          <div className="circle" id="gradationCircle"></div>
          <div className="circle" id="redCircle2"></div>
        </div>
        <div className="menu">
          <div className="menuList" id="mypage">MYPAGE</div>
          <div className="menuList" id="schedule">SCHEDULE</div>
          <div className="menuList" id="mate">MATE</div>
          <div className="menuList" id="bigdata">BIGDATA</div>
        </div>
        <div className="lines1">
          <div className="dashedArrow"></div>
          <div className="triangles">
            <div className="redTriangle" id="redTriangle1"></div>
            <div className="redTriangle" id="redTriangle2"></div>
          </div>
          <div className="introduction">
          전 세계의 친구들을 만날 수
있는 기회를 잡아보세요!
          </div>
          <div className="lineArrow">
            <div className="redTriangle" id="redTriangle3"></div>
            <div className="redTriangle" id="redTriangle4"></div>
            <div className="redLine"></div>
          </div>
        </div>
        <div className="lines2">
          <div className="dashedLine"></div>
          <div className="redLine"></div>
          <div className="whiteArrow"></div>
        </div>
        <div className="buttons">
          <div className="listButton"></div>
          <div className="chatButton"></div>
        </div>
      </div>
    )
  }
}

export default MainHome;