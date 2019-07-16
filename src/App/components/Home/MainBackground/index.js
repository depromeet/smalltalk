/* eslint-disable react/self-closing-comp */
import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const MainBackground = ({ handleListClick, handleChatClick }) => (
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
      <Link to="/mypage" className="menu-list">MYPAGE</Link>
      <Link to="/schedule" className="menu-list">SCHEDULE</Link>
      <Link to="/mate" className="menu-list">MATE</Link>
      <Link to="/bigdata" className="menu-list">BIGDATA</Link>
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
      <div className="list-button" onClick={handleListClick}></div>
      <div className="chat-button" onClick={handleChatClick}></div>
    </div>
    {/* Let's small-talk 글귀 */}
    <div className="main-home__phrases"></div>
  </div>
);

export default MainBackground;
