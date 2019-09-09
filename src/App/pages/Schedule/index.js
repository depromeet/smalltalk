import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import TicketLength from '../../components/Ticket/TicketLength';
import BigTicket from '../../components/Ticket/BigTicket';
import MenuBtn from '../../components/MenuBtn';
import SideMenu from './../../components/Chat/SideMenu';
import DropBox from '../../components/DropBox';
import classnames from 'classnames/bind';
import styles from './Schedule.module.scss';

import brazil from 'static/images/ticketImg/brazil.jpg';
import czech from 'static/images/ticketImg/czech.jpg';
import denmark from 'static/images/ticketImg/denmark.jpg';
import greece from 'static/images/ticketImg/greece.jpg';
import mongolia from 'static/images/ticketImg/mongolia.jpg';
import russia from 'static/images/ticketImg/russia.jpg';
import turkey from 'static/images/ticketImg/turkey.jpg';
import throws from 'static/images/throw.png';

const cx = classnames.bind(styles);

class Schedule extends Component{
  constructor(props){
    super(props);
    this.state = {
      boxList: [
          {
            id: 0,
            title: '인도 여행 일정', 
            ticketList: [
              {
                id: "0",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : brazil
              },
              {
                id: "1",
                ticketTitle: '파리',
                ticketSubTitle: 'Paris',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : czech
              },
              {
                id: "2",
                ticketTitle: '로스엔젤리스',
                ticketSubTitle: 'LA',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : denmark
              },
              {
                id: "3",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : greece
              },
              {
                id: "4",
                ticketTitle: '파리',
                ticketSubTitle: 'Paris',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : mongolia
              }
            ]
          },
          {
            id: 1,
            title: '재현 황희와 ♥', 
            ticketList: [
              {
                id: "0",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : brazil
              },
              {
                id: "1",
                ticketTitle: '파리',
                ticketSubTitle: 'Paris',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : czech
              },
              {
                id: "2",
                ticketTitle: '로스엔젤리스',
                ticketSubTitle: 'LA',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : denmark
              },
              {
                id: "3",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : greece
              },
              {
                id: "3",
                ticketTitle: '러시아',
                ticketSubTitle: 'Russia',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : greece
              },
              {
                id: "5",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : russia
              },
              {
                id: "6",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : turkey
              },
              {
                id: "7",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : russia
              },
              {
                id: "8",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : turkey
              },
              {
                id: "9",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : russia
              },
              {
                id: "10",
                ticketTitle: '싱가포르',
                ticketSubTitle: 'Singapore',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : turkey
              }
            ]
          },
          {
            id: 2,
            title: '25살, 마지막 여행', 
            ticketList: [
              {
                id: "0",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : brazil
              },
              {
                id: "1",
                ticketTitle: '파리',
                ticketSubTitle: 'Paris',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : czech
              },
              {
                id: "2",
                ticketTitle: '로스엔젤리스',
                ticketSubTitle: 'LA',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : denmark
              },
              {
                id: "3",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : greece
              },
              {
                id: "4",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : greece
              },
            ]
          },
          {
            id: 3,
            title: '혼자 여행!', 
            ticketList: [
              {
                id: "0",
                ticketTitle: '도쿄',
                ticketSubTitle: 'Tokyo',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : brazil
              },
              {
                id: "1",
                ticketTitle: '파리',
                ticketSubTitle: 'Paris',
                startDate: '2019.06.08',
                endDate: '2019.06.15',
                ticketImage : czech
              }
            ]
          }
        ],
      vWidth: 130,
      listIndex: 0
      // btest: [{id: 0, title: "가"},{id: 1, title: "가"},{id: 2, title: "가"},{id: 3, title: "가"}]
    }
  }

  makeTicketList = ( boxList ) => { 
    return boxList[this.state.listIndex].ticketList.map(( ticket, i ) => {
      // console.log(ticket);
      return (
        <li key={`scheduleTicket-${i}`} className={cx("t_item")}>
          <BigTicket 
            listLen = { this.state.boxList[this.state.listIndex].ticketList.length } 
            ticket = { ticket }
          />
        </li>
      );
    })
  }

  reList = () => {
    const { boxList } = this.state;
    const { listIndex } = this.state;
    
    const copied = [...boxList.filter( (num, i) => { 
      if(boxList.length < 2) { return boxList }
      else { return i !== Number(listIndex) } 
      })
    ]
    
    this.setState({
      boxList: copied,
      listIndex: 0
    });
  }

  resizeHeight = ( length ) => {
    if(length > 8) return { "height": "36vh" };
    else return { "height" : "29vh" };
  }

  setHeight = ( length ) => {
    if(length > 8) return { "top": "7vh" };
    else return { "top" : "11vh" };
  }

  resetWidth = ( length ) => {
    /* resize */
    const _vWidth = 436;
    let resetWidth = (_vWidth * length) + 'px';
    return { "width" : resetWidth }
  }

  reListIndex = ( setIndex ) => {
    this.setState({
      listIndex: setIndex
    });
  }

  render(){
    const { boxList } = this.state;
    const { listIndex } = this.state;
    // console.log(boxList);
    // console.log(boxList.length);
    // console.log(this.state.btest);

    return(
      <Fragment>
        <MenuBtn 
          barColor = { "#000" }  
          boxHidden = { "block" }
        />
        <SideMenu />
        <div className={cx("schedule_top")} style={ this.resizeHeight(boxList[listIndex].ticketList.length) }>
          <div className={cx("s_left")}>
            <DropBox
              boxList = { this.state.boxList }
              callListIndex = { this.reListIndex }
              dropStyle = "schedule-dropBox"
            />
            <div className={cx("length_box")} 
            style={this.setHeight(boxList[listIndex].ticketList.length)}>
              <TicketLength 
                ticketList = { boxList[listIndex].ticketList } 
                vWidth = { this.state.vWidth }
              />
            </div>
          </div>
          <div className={cx("s_right")}>
            <div className={cx('delete_s')} onClick={this.reList}>
              <img src={ throws } alt=""/><p>이 루트를 삭제할래요</p>
            </div>
            <button><Link to='/schedule1'>새 루트 만들기</Link></button>
            <button><Link to='/schedule1'>루트 수정하기</Link></button>
          </div>
        </div>
        <div className={cx("schedule_bottom")}>
          <div className={cx('t_box')}>
            <ul className={cx('call_t')} 
            style={this.resetWidth(boxList[listIndex].ticketList.length)}>
              { this.makeTicketList(boxList) }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Schedule;