import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import ChatContent from '../ChatContent';

const cx = classNames.bind(styles);

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      chatData: [
        { type: 'opposite', text: '안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. ' },
        { type: 'mine', text: '네 반가워요.' },
        { type: 'mine', text: '우와' },
        { type: 'opposite', text: 'ㅎㅎㅎ' },
        { type: 'opposite', text: 'ㅎㅎㅎ' },
      ],
    };
  }

    handleChange = (e) => {
      this.setState({ inputValue: e.target.value });
    }

    render() {
      const blah = () => {
        const newState = this.state.chatData.concat({ type: 'mine', text: this.state.inputValue });
        this.setState({ chatData: newState });
        this.setState({ inputValue: '' });
        console.log(newState);
      };
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
                text={list.text}
                key={i}
                id={i}
                lastType={arr[i - 1]}
              />
            ))}
          </div>
          <div className={cx('footer')}>
            <textarea value={this.state.inputValue} onChange={this.handleChange} className={cx('input')} />
            <div className={cx('send-button')} onClick={blah} />
          </div>
        </div>
      );
    }
}

export default ChatRoom;
