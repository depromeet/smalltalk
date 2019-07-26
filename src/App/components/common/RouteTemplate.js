import React, { Fragment }  from 'react';  
import BigTicket from 'App/components/BigTicket';
import { connect } from 'react-redux';
import ScheduleSettingTicket from 'App/components/Schedule/ScheduleSettingTicket';
import styles from './RouteTemplate.module.scss';
import classnames from 'classnames/bind';
import newTicket from 'static/images/newticket.svg';
import SideMenu from 'App/components/Chat/SideMenu';
import MenuBtn from '../MenuBtn';
const cx = classnames.bind(styles);

const RouteTemplate = ({travelList}) => {
  console.log(travelList);
 return (
   <Fragment>
    <SideMenu />
    <MenuBtn barColor = { "#000" }  boxHidden = { "block" }/>
    <div className={cx('container')}>
        <header className={cx('header')}> 
          <input placeholder="루트 이름을 입력해주세요"/>
          <button>루트 완성하기</button>
        </header>
        <ul className={cx('route-container')}>
          {
            travelList.map((ticket, i) => {
              return <li >
                <BigTicket ticket={ticket}/>
                </li>
            })
          }
          <div className={cx('new-ticket')}>
            <div className={cx('guide')}>
              <p className={cx('plus')}>+</p>
              <p>여행지 추가하기</p>
            </div>
            <img src={newTicket} alt='newTicket'/>
          </div>
        </ul>
        <div className={cx('ticket-container')}> 
        <ScheduleSettingTicket />
        </div>
    </div>
   </Fragment>
 )
} 

const mapStateToProps = state => ({
  travelList : state.schedule.travelList
}); 


export default connect(
  mapStateToProps,
  null
)(RouteTemplate);
