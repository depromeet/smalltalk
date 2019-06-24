import React, {Component, Fragment} from 'react';
import SmallTicket from '../../components/SmallTicket';

import classnames from 'classnames/bind';
import styles from './MateList.module.scss';
const cx = classnames.bind(styles);

class TicketList extends Component{

  makeList = ( ticketList ) => { 
    return ticketList.map( (ticket) => {
      return <li><SmallTicket ticket={ticket}/></li>
    })
  }
  
  render(){
    const { ticketList } = this.props;
    return(
      <Fragment>
        <div className={cx('arrow_list')}>
          <div className={cx('t_box')}>
            <ul className={cx('call_t')}>
              {this.makeList(ticketList)}
            </ul>
          </div>
          <div className={cx('paddle-nav')}>
            <ul>
              <li className={cx('arrow', 'prev')}><button>&lt;</button></li>
              <li className={cx('arrow', 'next')}><button>&gt;</button></li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

class MateListRow extends Component{
  render(){
    const talker = this.props.talker;
    const tag = this.props.tag;
    return (
      <tr>
        <td>{talker}</td>
        <td>{tag}</td>
        <td>친구 신청</td>
      </tr>
    );
  }
}

class MateListTable extends Component{
  render(){
    const rows = [];
    rows.push(
      <MateListRow
      />
    )
    return (
      <table>
        <thead>
          <tr>
            <th>토커</th>
            <th>나와 맞는 태그</th>
            <th>친구신청</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class MateList extends Component{
  constructor(props){
    super(props);
    this.state = {
      ticketList: [
        {
        ticketTitle: '도쿄',
        ticketSubTitle: 'Tokyo',
        startDate: '2019.06.08',
        endDate: '2019.06.15',
        ticketImage : '../../static/images/ticket_img.png'
        },
        {
          ticketTitle: '파리',
          ticketSubTitle: 'Paris',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          ticketTitle: '로스엔젤리스',
          ticketSubTitle: 'LA',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          ticketTitle: '싱가포르',
          ticketSubTitle: 'Singapore',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
        },
        {
          ticketTitle: '도쿄',
          ticketSubTitle: 'Tokyo',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png'
          },
          {
            ticketTitle: '파리',
            ticketSubTitle: 'Paris',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            ticketTitle: '로스엔젤리스',
            ticketSubTitle: 'LA',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            ticketTitle: '싱가포르',
            ticketSubTitle: 'Singapore',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
          },
          {
            ticketTitle: '도쿄',
            ticketSubTitle: 'Tokyo',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png'
            },
            {
              ticketTitle: '파리',
              ticketSubTitle: 'Paris',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              ticketTitle: '로스엔젤리스',
              ticketSubTitle: 'LA',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            },
            {
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png'
            }
      ]
    }
  }
  render(){
    return(
      <div className={cx('list_wrap')}>
        <h1>친구 추천 리스트</h1>
        <TicketList ticketList = {this.state.ticketList}/>
        <MateListTable matelist = {MATELIST}/>
      </div>
    )
  }
}

const MATELIST = [
  {talker: 'ㄱi염둥이', tag: '#즉흥적'},
  {talker: '같이 여행해용', tag: '#즉흥적'},
  {talker: '반지하', tag: '#즉흥적'},
  {talker: '재현공주', tag: '#즉흥적'},
  {talker: '황희공주', tag: '#즉흥적'},
  {talker: '몸짱남', tag: '#즉흥적'}
];

export default MateList;