import React, {Component, Fragment} from 'react';
import TicketLength from '../../components/Ticket/TicketLength';
import BigTicket from '../../components/Ticket/BigTicket';
import MenuBtn from '../../components/MenuBtn';
import SideMenu from './../../components/Chat/SideMenu';
import classnames from 'classnames/bind';
import styles from './MateInfo.module.scss';

import * as UserInfo from '../../containers/UserInfo/FriendInfo';

import brazil from 'static/images/ticketImg/brazil.jpg';
import czech from 'static/images/ticketImg/czech.jpg';
import denmark from 'static/images/ticketImg/denmark.jpg';
import greece from 'static/images/ticketImg/greece.jpg';
import mongolia from 'static/images/ticketImg/mongolia.jpg';
import russia from 'static/images/ticketImg/russia.jpg';
import turkey from 'static/images/ticketImg/turkey.jpg';
import pro1 from 'static/images/profile/p1.png';

const cx = classnames.bind(styles);

class StyleInfo extends Component{

  styleList = ( friend ) => { 
    return friend.tag.map(( tag, i ) => {
        return (
            <li key={`Style-${i}`}>{ tag.substring(1) }</li>
        )
    })     
  }

  render(){
    const { friend } = this.props;
    return(
      <div className={cx("user_style")}>
        <h2>STYLE</h2>
        <ul className={cx("user_tag")}>
          { this.styleList(friend) }
        </ul>
      </div>
    );
  }
}

class ScheduleInfo extends Component{

  resizeHeight = (length) => {
    if(length > 8) return { "height": "70vh"};
    else return {"height" : "60vh"};
  }

  scheduleList = ( ticketList ) => { 
    return this.props.friend.ticketList.map( (ticket, i) => {
      // console.log(ticket);
      return <li key={`Schedule-${i}`} className={cx("t_item")}>
      <BigTicket listLen={ticketList.length} ticket={ticket}/></li>
    })
  }

  resetHeight = (length) => {
    if(length > 8) return { "top": "41%"};
    else return {"top" : "33%"};
  }

  resetWidth = (length) => {
    /* resize */
    const _vWidth = 436;
    let resetWidth = (_vWidth * length) + 'px';
    return { "width" : resetWidth}
  }

  render(){
    const { friend } = this.props;
    return(
      <div className={cx("user_schedule")} style={ this.resizeHeight(friend.ticketList.length) }>
        <h2>SCHEDULE</h2>
        <div className={cx("length_box")}>
          <TicketLength 
            ticketList = {friend.ticketList} 
            vWidth = { 150 }
          />
        </div>
        <div className={cx('t_box')} style={ this.resetHeight(friend.ticketList.length) }>
          <ul className={cx('call_t')} style={ this.resetWidth(friend.ticketList.length) }>
            { this.scheduleList(friend.ticketList) }
          </ul>
        </div> 
      </div>
    );
  }
}

class MateInfo extends Component{
  componentWillMount() {
    console.log("T_T")
    console.log(this.props.match.params.id)
    console.log("T_T")
  }
  constructor(){
    super();
    this.state = {
      friend : {
        talker: "ㄱi염둥이",
        introduction: "안녕 나는 오늘 캄보디아를 가! 매우매우 설레는 여행이야. 가서 소매치기 당하지는 않겠지? 나는 잘 다녀올 거라고 믿어. 하하 올 때 꼭 선물 사올게. 다시 또 만나!",
        age: "24",
        gender: "남성",
        profileImg : pro1,
        tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#귀염상'],
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
            ticketTitle: '파리',
            ticketSubTitle: 'Paris',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : mongolia
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
            ticketImage : mongolia
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
      }
    }
  }

  state = {
    loading: false,
    coutry: null
  }

  getAPOD = async (date) => {
    if (this.state.loading) return; // 이미 요청중이라면 무시

    // 로딩 상태 시작
    this.setState({
      loading: true
    });

    try {
      const response = await UserInfo.getAPOD(date);
      // 비구조화 할당 + 새로운 이름 
      const { country: city } = response.data[1];
      // console.log(city.name);

      if(!this.state.maxDate) {
        // 만약에 coutry 가 없으면 지금 받은 date 로 지정
        this.setState({
          coutry: city.name
        })
      }
    } catch (e) {
      // 오류가 났을 경우
      // console.log(e);
    }

    // 로딩 상태 종료
    this.setState({
      loading: false
    });
  }
  componentDidMount() {
    this.getAPOD();
  }

  render(){
    const { friend } = this.state;
    // console.log(window.scrollY);
    return (
      <Fragment>
        <MenuBtn 
          barColor = { "#000" }  
          boxHidden = { "block" }
        />
        <SideMenu />
        <div className={cx("back_circle")}>
          <div className={cx("cir", "cir1")}></div>
          <div className={cx("cir", "cir2")}></div>
          <div className={cx("cir", "cir3")}></div>
        </div>
        <div className={cx("user_wrap")}>
          <div className={cx("btn_box")}>
            <button>친구 추가</button>
            <div className={cx("arrow_line")}></div>
          </div>
          <div className={cx("big_title")}>
            <div className={cx("title_left")}>
              <span>USER<br/>PROFILE</span>
            </div>
            <div className={cx("title_right")}>
              <span>Mate with me:3</span>
            </div>
          </div>
          <div className={cx("user_profile")}>
            <div className={cx("profile_img")}>
            <img src={ friend.profileImg } alt=""/></div>
            <div className={cx("profile_info")}>
              <h2>USER NAME</h2>
              <h3>{ friend.talker }</h3>
              <p>{ friend.introduction }</p>
              <h2>AGE / GENDER</h2>
              <h3>{ friend.age }/{ friend.gender }</h3>
            </div>
          </div>
          <StyleInfo 
            friend = { friend }
          />
          <ScheduleInfo 
            friend = { friend }
          />
        </div>
      </Fragment>
    );
  }
}

export default MateInfo;