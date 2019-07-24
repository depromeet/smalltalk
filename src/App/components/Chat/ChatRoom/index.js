import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import ChatContent from '../ChatContent';
import axios from 'axios';

const cx = classNames.bind(styles);

// const axiosFunc = () => {
//   loadMessageList.then( ( response ) => {
//   this.setState({ 
//     chatData: response.data.map( x => x.to_user === oppositeID ? { type: 'mine', description: x.description } : { type: 'opposite', description: x.description } )
//   });
//   }).catch(err => console.log(err));
// }

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      thePosition: 0,
      chatData: [
        // { type: 'opposite', description: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. ' },
        // { type: 'mine', description: '네 반가워요.' },
        // { type: 'mine', description: '우와' },
        // { type: 'opposite', description: 'ㅎㅎㅎ' },
        // { type: 'opposite', description: 'ㅎㅎㅎ' },
        // { type: 'opposite', description: 'ㅎㅎㅎ' },
        // { type: 'mine', description: '우와' },
      ],
    };
    console.log(this.props.id);
  }
  componentWillMount() {
    // axiosFunc();
    // this.interval = setInterval( axiosFunc, 5000);
  }

  componentDidMount() {
    // 채팅방이 열린 유저의 id를 oppositeID에 연결해야 함.
    const oppositeID = this.props.id;

    const token = 'Token ' + localStorage.getItem('token');

    const messageListURL = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com/messages/?from_user='+oppositeID;
    const config = { headers: { 'Authorization': token, 'Content-Type': `application/json`} };
    const loadMessageList = axios.get(messageListURL, config);
    loadMessageList.then( response => {
      this.setState({ chatData: response.data.map( x => x.to_user === oppositeID ? { type: 'mine', description: x.description } : { type: 'opposite', description: x.description } )} );
    });
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

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
      const messagesContent = { description: this.state.inputValue, to_user: oppositeID };
      
      // 메세지를 서버에 post 방식으로 보냅니다.
      axios.post(sendMessageURL, messagesContent, config)
      .then( response => console.log('메세지를 서버에 보냅니다.', response))
      .catch( err => console.log(err));
  
      // 작성한 내용을 로컬 state에 추가합니다.
      const newState = this.state.chatData.concat({ type: 'mine', description: this.state.inputValue });
      this.setState({ chatData: newState });
      this.setState({ inputValue: '' });
      console.log('로컬 state에 추가합니다.');
  
      // 스크롤을 가장 아래로 내립니다.
      document.body.getElementsByClassName('style_content__3I-DU')[0].scrollTop = document.body.getElementsByClassName('style_content__3I-DU')[0].scrollHeight;
    }
    // 메세지에 내용이 없으면
    console.log('메세지를 입력해주세요.')
  };

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
