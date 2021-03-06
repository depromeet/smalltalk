import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import TicketLength from 'App/components/Ticket/TicketLength';
import BigTicket from 'App/components/Ticket/BigTicket';
import MenuBtn from 'App/components/MenuBtn';

import classnames from 'classnames/bind';
import styles from './Schedule.module.scss';
import SideMenu from 'App/components/Chat/SideMenu';

const cx = classnames.bind(styles);

class Schedule extends Component{
  constructor(props){
    super(props);
    this.state = {
      boxList: [
        {
          id: "0",
          title: '인도 여행 일정', 
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
              ticketTitle: '도쿄',
              ticketSubTitle: 'Tokyo',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "4",
              ticketTitle: '파리',
              ticketSubTitle: 'Paris',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "5",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "6",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
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
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "9",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              id: "10",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
          ]
        },
        {
          id: "2",
          title: '재현 황희와 ♥', 
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
              ticketTitle: '도쿄',
              ticketSubTitle: 'Tokyo',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
          ]
        },
        {
          id: "1",
          title: '25살, 마지막 여행', 
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
              ticketTitle: '도쿄',
              ticketSubTitle: 'Tokyo',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
          ]
        },
        {
          id: "3",
          title: '혼자 여행!', 
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
              ticketTitle: '도쿄',
              ticketSubTitle: 'Tokyo',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
          ]
        },
        {
          id: "4",
          title: '함께 여행!', 
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
            }
          ]
        }
      ],
      vWidth: 130,
      isOn: 0,
      isShow: "none",
      listIndex: 0,
      dropR: "rotate(0deg)"
    }
  }

  makeDropList = ( boxList ) => { 
    return boxList.map( ( bTitle, i ) => {
      // console.log(ticket);
      return <li key={`DropList-${i}`} className={cx("t_list")} 
      onClick={ () => this.setState({listIndex: i, isOn: 0, dropR: "rotate(0deg)", isShow: "none"}) }>
      { bTitle.title }</li>
    })
  }

  makeTicketList = ( boxList ) => { 
    return boxList[this.state.listIndex].ticketList.map(( ticket, i ) => {
      // console.log(ticket);
      return <li key={`TicketList-${i}`} className={cx("t_item")}>
      <BigTicket 
        listLen = { this.state.boxList[this.state.listIndex].ticketList.length } 
        ticket = { ticket }
      /></li>
    })
  }

  resizeHeight = ( length ) => {
    if(length > 8) return { "height": "37vh" };
    else return { "height" : "29vh" };
  }

  resetWidth = ( length ) => {
    /* resize */
    const _vWidth = 436;
    let resetWidth = (_vWidth * length) + 'px';
    return { "width" : resetWidth }
  }
  
  toggleDrop = () => {
    if(this.state.isOn === 1) {
      this.setState({
        isOn: 0, 
        dropR: "rotate(0deg)", 
        isShow: "none"
      });
    }
    else {
      this.setState({
        isOn: 1, 
        dropR: "rotate(180deg)", 
        isShow: "block"
      });
    }
  }

  render(){
    const { boxList } = this.state;
    const { listIndex } = this.state;

    return(
      <Fragment>
        <MenuBtn 
          barColor = { this.state.barColor }
        />
        <SideMenu />
        <div className={cx("schedule_top")} style={ this.resizeHeight(boxList[listIndex].ticketList.length) }>
          <div className={cx("s_left")}>
            <div className={cx("s_titlebox")}>
              <h2>{ this.state.boxList[listIndex].title }
                <span onClick={this.toggleDrop} style={{ transform: this.state.dropR }}>▼</span>
              </h2>
              <ul className={cx("title_drop")} style={{ opacity: this.state.isOn, display: this.state.isShow }}>
                { this.makeDropList(boxList) }
              </ul>
            </div>
            <div className={cx("length_box")}>
              <TicketLength 
                ticketList = { boxList[listIndex].ticketList } 
                vWidth = { this.state.vWidth }
              />
            </div>
          </div>
          <div className={cx("s_right")}>
            <button><Link to='/schedule1'>새 루트 만들기</Link></button>
            <button><Link to='/schedule1'>루트 수정하기</Link></button>
          </div>
        </div>
        <div className={cx("schedule_bottom")}>
          <div className={cx('t_box')}>
            <ul className={cx('call_t')} style={ this.resetWidth(boxList[listIndex].ticketList.length) }>
              { this.makeTicketList(boxList) }
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Schedule;