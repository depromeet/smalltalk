import React, { Component, Fragment} from 'react';
import './style.scss'

class Chat extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="chat">
            <div className="chat__buttons">
                <div className="chat__buttons__list"></div>
                <div className="chat__buttons__chat"></div>
            </div>
            <div className="chat__header">
                <div className="chat__header__title">
                    <div className="chat__header__title__name">가나다</div>
                    <div className="chat__header__title__text">님</div>
                </div>
                <div className="chat__header__close-button" onClick={this.props.handleCloseChat}></div>
            </div>
            <div className="chat__content">
                <div className="chat__content__opposite">
                    <div className="chat__content__opposite__profile-picture"></div>
                    <div className="chat__content__opposite__talk-list">
                        <div className="chat__content__opposite__talk-list__sentence">가나다라마바사아자차카타파하</div>
                    </div>
                </div>
            </div>
            <div className="chat__footer">
                <textarea className="chat__footer__input"></textarea>
                <div className="chat__footer__send-button"></div>
            </div>
        </div>
    )
  }
}

export default Chat;