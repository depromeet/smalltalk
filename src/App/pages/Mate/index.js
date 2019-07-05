import React, {Component, Fragment} from 'react';
import BigTicket from '../../components/BigTicket';
import TicketLength from '../../components/TicketLength';

import classnames from 'classnames/bind';
import styles from './Mate.module.scss';

const cx = classnames.bind(styles);

class TicketBox extends Component{
  constructor(){
    super();
    this.state = {
      isToggle: true,
      clickedTicket: []
    }
  };

  handleClick = (ticket) => {
    // if(this.state.isToggleOn === i){
    //   this.setState({isTogleOn: null})
    // } else {
    //   this.setState({isToggleOn: i})
    // }
    // console.log("클릭" + i);
    console.log(ticket);
    // const tic = this.state.clickedTicket.indexOf(ticket);
    const { isToggle } = this.state;
    if(isToggle) {
      this.setState({
        isToggle: !isToggle,
        clickedTicket: this.state.clickedTicket.concat(ticket)
      })
      console.log("push");
    }else if(!isToggle){
      this.setState({
      isToggle: !isToggle,
      clickedTicket: this.state.clickedTicket.filter(info => info.ticket !== ticket)
      })
      console.log("delete");
    }
  };

  makeList = ( ticketList ) => { 
    return ticketList.map( (ticket, i) => {
      // console.log(ticket);
      return <li className={cx("t_item", (this.state.isToggleOn === i? 'active' : 'none'))} onClick={() => this.handleClick(ticket)}>
      <BigTicket listLen={ticketList.length} ticket={ticket}/></li>
    })
  }

  resizeWidth = (length) => {
    /* resize */
    const _vWidth = 514;
    let resetWidth = (_vWidth * length) + 'px';
    return { "width" : resetWidth}
  }

  render(){
    const { ticketList } = this.props;
    console.log(this.state.clickedTicket);
    return(
      <ul className={cx('call_t')} style={this.resizeWidth(ticketList.length)}>
        {this.makeList(ticketList)}
      </ul>
    )
  }
}

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
      ]
    }
  }

  resizeHeight = (length) => {
    if(length > 8) return { "top": "57%"};
  }

  render(){
    const { ticketList } = this.state;
    return(
      <Fragment>
        <div className={cx('mate_wrap')}>
          <div className={cx('mate_title')}>
            <h1>친구를 추천받을<br/>지역을 선택해주세요</h1>
            <p>친구를 추천받고 싶으신 여행일정을 선택하고,<br/>당신만의 메이트를 찾아보세요 :)</p>
          </div>
          <div className={cx('mate_btn')}>
            <button className={cx('matelink_btn')} onClick="callMatelist()">선택한 지역으로 친구 추천 ▶</button>
          </div>
          <div className={cx('length_box')}>
            <TicketLength ticketList = {ticketList}/>
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