import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const ChatContent = ( {lastType = '', type, text} ) => {
  let lastChatType = lastType.type;
  return (
    <div>
      {/* 상대방 채팅일 경우 */}
      {type === 'opposite'
        ? (
          <div className={cx('opposite')}>
            {/* 이전 채팅의 type을 확인해서 상대방 채팅이었으면 공백을, 상대방 채팅이 아니면 프로필 사진을 보여줍니다. */}
            {lastChatType === 'opposite' ? <div className={cx('space')} /> : <div className={cx('profile-picture')} />}
            <div className={cx('talk-list')}>
              <div className={cx('background')}>
                <div className={cx('sentence')}>{text}</div>
              </div>
            </div>
          </div>
        )
        : (
          <div className={cx('mine')}>
            <div className={cx('talk-list')}>
              <div className={cx('background')}>
                <div className={cx('sentence')}>{text}</div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default ChatContent;
