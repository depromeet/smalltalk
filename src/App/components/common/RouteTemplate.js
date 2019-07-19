import React, { Component }  from 'react';  
import ScheduleSettingTicket from 'App/components/Schedule/ScheduleSettingTicket';
import styles from './RouteTemplate.module.scss';
import classnames from 'classnames/bind';
import newTicket from 'static/images/newticket.svg';
const cx = classnames.bind(styles);


const RouteTemplate = () => {
 return (
   <div className={cx('container')}>
      <header className={cx('header')}> 
        <input placeholder="루트 이름을 입력해주세요"/>
        <button>루트 완성하기</button>
      </header>
      <div className={cx('route-container')}>
        <div className={cx('new-ticket')}>
          <div className={cx('guide')}>
            <p className={cx('plus')}>+</p>
            <p>여행지 추가하기</p>
          </div>
          <img src={newTicket}/>
        </div>
      </div>
      <div className={cx('ticket-container')}> 
       <ScheduleSettingTicket />
      </div>
   </div>
 )
} 

export default RouteTemplate; 
