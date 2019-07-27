import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import ChatContent from '../ChatContent';
import axios from 'axios';

const cx = classNames.bind(styles);

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      thePosition: 0,
      chatData: [
        // { type: 'opposite', description: '' },
        // { type: 'mine', description: '' },
      ],
    };
  }

  componentWillMount() {
    // 인터벌 함수가 실행되는데 5초가 소요되서 채팅 내용이 바로 렌더링 되지 않음. 임시로 컴포넌트가 마운트 되기 전에 한 번 GET 요청함. 수정요망
    const oppositeID = this.props.id;
    const token = 'Token ' + localStorage.getItem('token');
    const messageListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/?from_user='+oppositeID;
    const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
    const loadMessageList = axios.get(messageListURL, config);
    loadMessageList.then( response => {
      this.setState({ chatData: response.data.map( x => x.to_user === oppositeID ? { type: 'mine', description: x.description } : { type: 'opposite', description: x.description } )} );
    })
  }
  
  componentDidMount() {
    // 5초 간격으로 GET 메세지 List 반복
    this.interval = setInterval( () => {
    const oppositeID = this.props.id;
    const token = 'Token ' + localStorage.getItem('token');
    const messageListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/?from_user='+oppositeID;
    const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
    const loadMessageList = axios.get(messageListURL, config);
    loadMessageList.then( response => {
      this.setState({ chatData: response.data.map( x => x.to_user === oppositeID ? { type: 'mine', description: x.description } : { type: 'opposite', description: x.description } )} );
    })
    }, 5000)
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.chatData.length !== this.state.chatData.length){
      setTimeout( () => {document.body.getElementsByClassName('style_content__3I-DU')[0].scrollTop = document.body.getElementsByClassName('style_content__3I-DU')[0].scrollHeight}, 10);
      return true;
    }
    else if(nextState.inputValue !== this.state.inputValue){
      return true;
    }
    else {
      return false;
    }
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트 될 때 인터벌 함수를 제거합니다.
    clearInterval(this.interval);
  }

  handleInputValueChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  AddChatOfMine = () => {
    // 메세지에 내용이 있으면
    if(this.state.inputValue) {
      const token = 'Token ' + localStorage.getItem('token');
      const oppositeID = this.props.id;
      const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
      const sendMessageURL = `http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/send/`;
      const messagesContent = { description: this.state.inputValue
        // .replace(/(?:\r\n|\r|\n)/g, '<br />')
        , to_user: oppositeID };
      
      // 메세지를 서버에 post 방식으로 보냅니다.
      axios.post(sendMessageURL, messagesContent, config)
      .then( response => console.log(response) )
      .catch( err => console.log(err) );
  
      // 작성한 내용을 로컬 state에 추가합니다.
      const newState = this.state.chatData.concat({ type: 'mine', description: this.state.inputValue});
      this.setState({ chatData: newState });
      this.setState({ inputValue: '' });
    }
    // 메세지에 내용이 없으면
    console.log('메세지를 입력해주세요.')
  };

  // pressEnterToChat = (e) => {
  //   // 메세지에 내용이 있고 엔터키가 눌렸으면
  //   if(this.state.inputValue && e.key === 'Enter') {
  //     const token = 'Token ' + localStorage.getItem('token');
  //     const oppositeID = this.props.id;
  //     const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
  //     const sendMessageURL = `http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/send/`;
  //     const messagesContent = { description: this.state.inputValue
  //       // .replace(/(?:\r\n|\r|\n)/g, '<br />')
  //       , to_user: oppositeID };
      
  //     // 메세지를 서버에 post 방식으로 보냅니다.
  //     axios.post(sendMessageURL, messagesContent, config)
  //     .then( response => console.log(response) )
  //     .catch( err => console.log(err) );
  
  //     // 작성한 내용을 로컬 state에 추가합니다.
  //     const newState = this.state.chatData.concat({ type: 'mine', description: this.state.inputValue});
  //     this.setState({ chatData: newState });
  //     this.setState({ inputValue: '' });
  //   }
  // }

  render() {
    return (
      <div className={cx('chat')}>
        <div className={cx('buttons')}>
          <div className={cx('list-button')} onClick={this.props.handleListClick} />
          <div className={cx('chat-button')} />
        </div>
        <div className={cx('header')}>
          <div className={cx('title')}>
            <div className={cx('name')}>{this.props.name}</div>
            <div className={cx('text')}>님</div>
          </div>
          <div className={cx('close-button')} onClick={this.props.handleAllClose} />
        </div>
        <div className={cx('content')}>
          {this.state.chatData.map((list, i, arr) => (
            <ChatContent
              type={list.type}
              text={list.description}
              key={i}
              lastType={arr[i - 1]}
            />
          ))}
        </div>
        <div className={cx('footer')}>
          <textarea value={this.state.inputValue} onChange={this.handleInputValueChange} className={cx('input')} />
          <div className={cx('send-button')} onClick={this.AddChatOfMine} />
        </div>
      </div>
    );
  }
}

export default ChatRoom;
