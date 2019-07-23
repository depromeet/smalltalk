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
      talker : {
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
        ]
      },
      vWidth: 150,
      isOn: 0,
      listIndex: 0,
      dropR: "rotate(0deg)"
    }
  }

  makeList = ( boxList ) => { 
    return boxList.map( (bTitle, i) => {
      // console.log(ticket);
      return <li className={cx("t_list")} onClick={() => this.setState({listIndex: i, isOn: 0, dropR: "rotate(0deg)"})}>
      {bTitle.title}</li>
    })
  }

  toggleDrop = () => {
    if(this.state.isOn === 1){
      this.setState({isOn: 0, dropR: "rotate(0deg)"})
    }else{
      this.setState({isOn: 1, dropR: "rotate(180deg)"})
    }
  }

  resizeHeight = (length) => {
    if(length > 8) return { "top": "57%"};
  }

  MatelistLink = () => {
    console.log("link");
  }

  render(){
    const { talker } = this.state;
    const { listIndex } = this.state;

    return(
      <Fragment>
        <MenuBtn barColor = { "#fff" }  boxHidden = { "block" }/>
        <div className={cx('mate_wrap')}>
          <div className={cx('mate_title')}>
            <h1>친구를 추천받을<br/>지역을 선택해주세요</h1>
            <div className={cx("s_titlebox")}>
              <h2>{this.state.talker.boxList[listIndex].title}<span onClick={this.toggleDrop} style={{transform: this.state.dropR}}>▼</span></h2>
              <ul className={cx("title_drop")} style={{opacity: this.state.isOn}}>
                {this.makeList(talker.boxList)}
              </ul>
            </div>
          </div>
          <div className={cx('mate_btn')}>
            <button className={cx('matelink_btn')} onClick={this.MatelistLink}><Link to='/mateList'>선택한 지역으로 친구 추천 ▶</Link></button>
          </div>
          <div className={cx('length_box')}>
            <TicketLength ticketList = {talker.boxList[listIndex].ticketList} vWidth = { this.state.vWidth }/>
          </div>
          <div className={cx('t_box')} style={this.resizeHeight(talker.boxList[listIndex].ticketList.length)}>
            <TicketBox ticketList = {talker.boxList[listIndex].ticketList}/>
          </div>
        </div>
      </Fragment>
      )
  }
}

export default Mate;