import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

class ChatMateRequest extends Component {
  render() {
    const cx = classNames.bind(styles);
    return (
      <div className={cx('list')}>
        <div className={cx('text')}>
          <div className={cx('name')}>{this.props.name}</div>
          <div className={cx('phrases')}>님의 메이트 신청</div>
        </div>
        <div className={cx('buttons')}>
          <div className={cx('accept')} onClick={() => this.props.addMateList(this.props.id, this.props.name)} />
          <div className={cx('refuse')} onClick={() => this.props.denyMateRequest(this.props.id, this.props.key)} />
        </div>
      </div>
    );
  }
}

export default ChatMateRequest;
