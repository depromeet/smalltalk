import React, { Component, Fragment} from 'react';
import './style.scss';

class Start extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="backCircle">
          <div className="circle top-none-border"/>
          <div className="circle top-neon"/>
          <div className="circle left-neon"/>
          <div className="circle bottom-image"/>
          <div className="circle bottom-gra"/>
        </div>

        <div className="content">
          <p>스몰토크 시작하기</p>
          <p>Starting SmallTalk</p>
          <div className="content-welcome-column">
            <p>
              안녕하세요.<br/>
              스몰토크입니다.<br/>
              세계의 친구들과 여행을 즐겨보세요.
            </p>
          </div>
          <div className="content-welcome-column">
            <p>
              Hello, I'm SmallTalk<br/>
              Enjoy your trip with<br/>
              friends around the world.
            </p>
          </div>
        </div>

        <ul className="">
          <li><a href="/login"> 로그인 </a></li>
          <li><a href="/register"> 회원가입 </a></li>
        </ul>

        </div>
    )
  }
}

export default Start;


