import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

class ListOfPeopleInTheCity extends Component {
  constructor(props){
    super(props);

    this.state = {
      fontColor: '#747474',
      backColor: '#e6e6e6',
      text: '친구 신청',
    }
  }

  handleMouseClick = () => {
    this.setState({ fontColor: '#ffffff', backColor: '#fb3e1d', text: '친구 신청 완료' });
  }
  
  friendRequest = () => {
    this.props.handleFriendRequest(this.props.id);
    this.handleMouseClick();
  }
  render() {
    return (
      <div className={cx('box')}>
        <img src={this.props.picture} className={cx('picture')} alt="profile" />
        <div className={cx('left-row')}>
          <Link to={`/mateinfo/${this.props.id}`}>
            <div className={cx('nickname')}>{this.props.nickname}</div>
          </Link>
          <div className={cx('content')}>
            <div className={cx('age')}>{this.props.age}</div>
            <div className={cx('gender')}>{this.props.gender}</div>
          </div>
        </div>
        <div className={cx('right-row')} style={{'background-color': this.state.backColor}} onClick={this.friendRequest}>
          <div className={cx('circle-1')}></div>
          <div className={cx('circle-2')}></div>
          <div className={cx('text')} style={{'color': this.state.fontColor}}>{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default ListOfPeopleInTheCity;
