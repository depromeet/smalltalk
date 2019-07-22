import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import TicketLength from '../../components/TicketLength';
import TicketBox from '../../components/TicketBox';
import MenuBtn from '../../components/MenuBtn';

import classnames from 'classnames/bind';
import styles from './Mate.module.scss';

const cx = classnames.bind(styles);

class Mate extends Component{
  constructor(props){
    super(props);
    this.state = {
      ticketList: [
        {
          id: "0",
          ticketTitle: '도쿄',
          ticketSubTitle: 'Tokyo',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          id: "1",
          ticketTitle: '파리',
          ticketSubTitle: 'Paris',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          id: "2",
          ticketTitle: '로스엔젤리스',
          ticketSubTitle: 'LA',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          id: "3",
          ticketTitle: '싱가포르',
          ticketSubTitle: 'Singapore',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          id: "4",
          ticketTitle: '도쿄',
          ticketSubTitle: 'Tokyo',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
          },
          {
            id: "5",
            ticketTitle: '파리',
            ticketSubTitle: 'Paris',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            id: "6",
            ticketTitle: '로스엔젤리스',
            ticketSubTitle: 'LA',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            id: "7",
            ticketTitle: '싱가포르',
            ticketSubTitle: 'Singapore',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            id: "8",
            ticketTitle: '도쿄',
            ticketSubTitle: 'Tokyo',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "9",
              ticketTitle: '파리',
              ticketSubTitle: 'Paris',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "10",
              ticketTitle: '로스엔젤리스',
              ticketSubTitle: 'LA',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "11",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
      ],
      vWidth: 150
    }
  }

  resizeHeight = (length) => {
    if(length > 8) return { "top": "57%"};
  }

  MatelistLink = () => {
    console.log("link");
  }

  render(){
    const { ticketList } = this.state;
    return(
      <Fragment>
        <MenuBtn/>
        <div className={cx('mate_wrap')}>
          <div className={cx('mate_title')}>
            <h1>친구를 추천받을<br/>지역을 선택해주세요</h1>
            <p>친구를 추천받고 싶으신 여행일정을 선택하고,<br/>당신만의 메이트를 찾아보세요 :)</p>
          </div>
          <div className={cx('mate_btn')}>
            <button className={cx('matelink_btn')} onClick={this.MatelistLink}><Link to='/mateList'>선택한 지역으로 친구 추천 ▶</Link></button>
          </div>
          <div className={cx('length_box')}>
            <TicketLength ticketList = {ticketList} vWidth = { this.state.vWidth }/>
          </div>
          <div className={cx('t_box')} style={this.resizeHeight(ticketList.length)}>
            <TicketBox ticketList = {ticketList}/>
          </div>
        </div>
      </Fragment>
    )
  }
}



export default Mate;