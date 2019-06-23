import React, { Component, Fragment} from 'react';
import './style.scss';

class MyMate extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="main-home__my-mate">
        <div className="main-home__my-mate__buttons">
          <div className="main-home__my-mate__buttons__list"></div>
          <div className="main-home__my-mate__buttons__chat"></div>
        </div>
        <div className="main-home__my-mate__list">
            <div className="main-home__my-mate__list__header">현재<br></br>내 메이트 {}2명</div>
            <div className="main-home__my-mate__list__close-button" onClick={this.props.handleCloseList}></div>
            <div className="main-home__my-mate__list__friends-list">
            <div className="main-home__my-mate__list__friends-list__profile-picture"></div>
            <div className="main-home__my-mate__list__friends-list__name">김이박</div>
            <div className="main-home__my-mate__list__friends-list__unchecked-messages">
                <div className="main-home__my-mate__list__friends-list__unchecked-messages__circle"></div>
                <div className="main-home__my-mate__list__friends-list__unchecked-messages__number">{}3</div>
            </div>
            </div>
            <div className="main-home__my-mate__list__friends-list">
            <div className="main-home__my-mate__list__friends-list__profile-picture"></div>
            <div className="main-home__my-mate__list__friends-list__name">가나다라</div>
            <div className="main-home__my-mate__list__friends-list__unchecked-messages">
                <div className="main-home__my-mate__list__friends-list__unchecked-messages__circle"></div>
                <div className="main-home__my-mate__list__friends-list__unchecked-messages__number">{}5</div>
            </div>
            </div>
        </div>
        <div className="main-home__my-mate__apply-friend">
            <div className="main-home__my-mate__apply-friend__fold-button"></div>
            <div className="main-home__my-mate__apply-friend__collection">
                <div className="main-home__my-mate__apply-friend__list">
                <div className="main-home__my-mate__apply-friend__list__name">시차</div>
                <div className="main-home__my-mate__apply-friend__list__phrases">님의 메이트 신청</div>
                <div className="main-home__my-mate__apply-friend__list__buttons">
                    <div className="main-home__my-mate__apply-friend__list__buttons__add"></div>
                    <div className="main-home__my-mate__apply-friend__list__buttons__refuse"></div>
                </div>
                </div>
                <div className="main-home__my-mate__apply-friend__list">
                <div className="main-home__my-mate__apply-friend__list__name">가나</div>
                <div className="main-home__my-mate__apply-friend__list__phrases">님의 메이트 신청</div>
                <div className="main-home__my-mate__apply-friend__list__buttons">
                    <div className="main-home__my-mate__apply-friend__list__buttons__add"></div>
                    <div className="main-home__my-mate__apply-friend__list__buttons__refuse"></div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default MyMate;