import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import startCurve from 'images/170.svg';

class Start extends Component{ 

  makeContent = () => {
    return (
      <div>
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
              <div className="button-login"><Link to='/login'> 로그인 </Link></div> 
              <div className="button-register"><Link to='/register'>회원가입 </Link></div>
          </div>
        </div>
      </div>
    )}
    
  render(){
    return(
      <Fragment>
        {
          this.props.token ? 
          <h1> Loading...</h1>
          :
                <div>
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
              <div className="button-login"><Link to='/login'> 로그인 </Link></div> 
              <div className="button-register"><Link to='/register'>회원가입 </Link></div>
          </div>
        </div>
      </div>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  token : state.auth.token
})

export default connect(
  mapStateToProps
)(Start);


