import React, { Component } from 'react';
import classNames from 'classnames/bind';
import EachFriendsList from '../EachFriendsList';
import ChatMateRequest from '../ChatMateRequest';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

class ChatMateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickedFoldButton: false,
    };
  }

  // UI
  handleFoldButton = () => {
    this.setState({ isClickedFoldButton: true });
  }

  handleMoreButton = () => {
    this.setState({ isClickedFoldButton: false });
  }

  render() {
    return (
      <div className={cx('my-mate')}>
        <div className={cx('buttons')}>
          <div className={cx('list-button')} />
          <div className={cx('chat-button')} onClick={this.props.handleChatClick} />
        </div>
        <div className={cx('list')}>
          <div className={cx('header')}>
            현재<br />내 메이트{' '}{this.props.friendsListData.length}명
          </div>
          <div className={cx('close-button')} onClick={this.props.handleAllClose} />
          <div className={this.state.isClickedFoldButton ? cx('unfolded-collection') : cx('collection')}>
            {this.props.friendsListData.length === 0
              ? (
                <div className={cx('header-2')}>
                  <div className={cx('title')}>아직 친구가 없어요 :(</div>
                  <div className={cx('contents')}>여행 메이트를 추천받아<br />같이 즐거운 여행을 떠나보세요!</div>
                </div>
              )
              : <div />}
            {this.props.friendsListData.map((list, i) => (
              <EachFriendsList
                // UI
                currentState={this.props.currentState}
                handleChatClick={this.props.handleChatClick}
                handleChatRoomClick={this.props.handleChatRoomClick}

                picture={list.picture}
                name={list.nickname}
                number={list.messages_cnt}
                id={list.id}

                handleName={this.props.handleName}
                handleID={this.props.handleID}

                key={i}
              />
            ))}
          </div>
        </div>
        {this.state.isClickedFoldButton
          // 접기 버튼이 눌렸으면 나에게 온 친구요청 숨김
          ? (
            <div className={cx('apply-friend-2')}>
              <div className={cx('text')}>친구 신청 알림</div>
              <div className={cx('rotated-fold-button')} onClick={this.handleMoreButton} />
            </div>
          )
          // 접기 버튼이 눌리지 않았으면 나에게 온 친구요청 표시
          : (
            <div className={cx('apply-friend')}>
              <div className={cx('fold-button')} onClick={this.handleFoldButton} />
              <div className={cx('collection')}>
                {this.props.ApplyListData.map((list, i) => (
                  <ChatMateRequest
                    name={list.nickname}
                    id={list.id}

                    addMateList={this.props.addMateList}
                    denyMateRequest={this.props.denyMateRequest}

                    index={i}
                    key={i}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default ChatMateList;
