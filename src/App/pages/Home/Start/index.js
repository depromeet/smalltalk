import React, { Component, Fragment} from 'react';
import './style.scss';
import startCurve from 'images/170.svg';

class Start extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Fragment>
        <div className="backImage">
          <div className="circle top-none-border"></div>
          <div className="circle top-neon"></div>
          <div className="circle left-neon"></div>
          <div className="line"></div>
          <div className="circle bottom-image"></div>
          <div className="circle bottom-gra"></div>
          <div className="curve-container"><img className="curve" src={startCurve} alt="curve"/></div>
        </div>

        <div className="content">
          <div className="content-column">
            <p className="content-title">스몰토크 시작하기</p>
            <p className="content-subtitle">Starting SmallTalk</p>
            <div className="welcome-container">
              <div className="content-welcome-column">
                <p className="welcome-kr">
                  안녕하세요.<br/>
                  스몰토크입니다.<br/>
                  세계의 친구들과 여행을 즐겨보세요.
                </p>
              </div>
              <div className="content-welcome-column">
                <p className="welcome-en">
                  Hello, I'm SmallTalk.<br/>
                  Enjoy your trip with<br/>
                  friends around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="content-column">
              <a href="/login"> <div className="button-login"> 로그인 </div> </a>
              <a href="/register"> <div className="button-register">회원가입 </div></a>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Start;


