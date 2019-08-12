import React, { Component } from 'react';
import Friend from '../Friend';
import classnames from 'classnames/bind';
import styles from './FriendList.module.scss';

const cx = classnames.bind(styles);

class FriendList extends Component{
  
  friendList = ( ticketList ) => { 
    // console.log(ticketList.friends); 
    return ticketList.friends.map(( friend, i ) => {
      return (
        <Friend 
          key={`Friend-${i}`}
          id = { i } 
          src = { friend.src } 
          talker = { friend.talker } 
          info = { friend.info } 
          tag = { friend.tag } 
        />
      );
    })     
  }

  render(){
    const { ticketList } = this.props;
    const { ticketIndex } = this.props;
    // console.log(ticketList);
    // console.log(ticketIndex);

    return (
      <ul className={cx('list_table')}>
        <li className={cx('fnd_info')}>
          <ul className={cx('list_title')}>
            <li>토커</li><li>
            나와 맞는 태그</li><li>
            친구신청</li>
          </ul>
        </li><li>
          <hr/>
        </li><li>
          <div className={cx("talker_deco")}>최고의 친구!</div>
          { this.friendList(ticketList[ticketIndex]) }   
        </li>
      </ul>
    );
  }
}

export default FriendList;