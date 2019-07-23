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
const cx = classnames.bind(styles);
// const moment = extendMoment(originalMoment);

class ScheduleSettingTicket extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      value: null,
      // value: moment.range(today.clone().subtract(3, "days"), today.clone()),
      country: '서울',
      startDate: '',
      endDate : '',
      diffDays : '?'
    }
  }
  // this.state.value.diff('days')
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

  handleInput = e => this.setState({country : e.target.value});
  changeToString = date => {
    return date.slice(2,10).split('-').join('.');
  }
  setSpots = () => {
    const { country, startDate, endDate } = this.state;
    // props로 받은 함수에 이걸 보냄 
    return this.props.addTravelSpot({country, startDate, endDate});
    // this.setState({
    //   value : null,
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
              <input onChange={this.handleInput} value={this.state.country} />
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