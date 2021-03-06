import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as scheduleAction from 'App/store/modules/schedule';
// import originalMoment from "moment";
// import { extendMoment } from "moment-range";
import DateRangePicker from "react-daterange-picker";
import styles from './ScheduleSettingTicket.module.scss';
import classnames from 'classnames/bind';
import 'react-daterange-picker/dist/css/react-calendar.css';
import './ScheduleSettingTicket.module.scss';
import './calender.scss';
import arrow from '../../../../static/images/half-arrow-right.png';
import check from '../../../../static/images/icon-check.svg';
import greece from 'static/images/ticketImg/greece.jpg';

const cx = classnames.bind(styles);
// const moment = extendMoment(originalMoment);

class ScheduleSettingTicket extends Component {
  constructor(props, context){
    super(props, context);

    // 수정시 초기값은 user가 설정한 일정의 제일 첫번쨰 일정 
    this.state = {
      value: null,
      ticketTitle: '서울',
      startDate: '',
      endDate : '',
      diffDays : '?'
    }
  }
  onSelect = value => {
    const daterange = value.toString().split('/');
    let startDate = this.changeToString(daterange[0]);
    let endDate = this.changeToString(daterange[1]);

    this.setState({
      value,
      startDate,
      endDate,
      diffDays: value.diff('days')
      });
  }

  handleInput = e => this.setState({ticketTitle : e.target.value});
  changeToString = date => {
    return date.slice(2,10).split('-').join('.');
  }
  setSpots = () => {
    const { ticketTitle, startDate, endDate } = this.state;
    this.props.addTravelSpot({ticketTitle, startDate, endDate, ticketImage : greece});
    // this.setState({
    //    value: null,
    //   ticketTitle: '서울',
    //   startDate: '',
    //   endDate : '',
    //   diffDays : '?'
    // })
  }
  
  render() {
    const { value, diffDays, startDate, endDate } = this.state;
    return (
      <Fragment>
        <div className={cx('ticket-wrapper')}> 
         <DateRangePicker
          onSelect={this.onSelect}
          value={value}
          singleDateRange={true}
        />
        <div className={cx('ticket-info')}>
          <div className={cx('country')}>
            <label> 여행지 설정 </label>
            <div>
              <input onChange={this.handleInput} value={this.state.ticketTitle} />
            </div>
            <span className={cx('tri')}>▼</span>
          </div>
          <div className={cx('date-range')}>
            <div className={cx('date-con')}>
              <label className={cx('date-label')}> 시작날짜 </label>
              <div className={cx('date')}>{startDate}</div>
            </div>
            <div className={cx('right-arrow')}>
              <img src={arrow} alt='arrow'/>
            </div>
            <div className={cx('date-con')}>
              <label className={cx('date-label')}> 마무리 날짜 </label>
              <div className={cx('date')}>{endDate}</div>
            </div>
          </div>
          <div className={cx('total-date')}>
            <label className={cx('guide')}>여행 일정 선택(박)</label>
            <span className={cx('num')}> {diffDays} </span>
            <span className={cx('bak')}>박</span>
          </div>
          
        </div>
        <div className={cx('ticket-side-img')}></div>
        <div className={cx('ticket-side-img-red')}></div>
        <button onClick={this.setSpots} className={cx('complete-btn')}> 
          <img src={check} alt='complete'/>
        </button>
      </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  // registerRequest: ({ email, password, nickname, gender, age, shortBio }) => 
  // dispatch(authAction.registerRequest({ email, password, nickname, gender, age, shortBio })),
  addTravelSpot : (spotInfo) => dispatch(scheduleAction.addSpot(spotInfo))
})

export default connect(
  null,
  mapDispatchToProps
)(ScheduleSettingTicket);