import React, { Component } from 'react'
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import DateRangePicker from "react-daterange-picker";
import styles from './ScheduleSettingTicket.module.scss';
import classnames from 'classnames/bind';
import 'react-daterange-picker/dist/css/react-calendar.css';
import './ScheduleSettingTicket.module.scss';
import './calender.scss';
// const cx = classnames.bind(styles);
const moment = extendMoment(originalMoment);

export default class ScheduleSettingTicket extends Component {
  constructor(props, context){
    super(props, context);
    const today = moment();

    this.state = {
      value: moment.range(today.clone().subtract(7, "days"), today.clone())
    }
  }
  onSelect = dates => this.setState({dates})
  
  render() {
    console.log(this.state.value)
    return (
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.value}
          singleDateRange={true}
        />
    )
  }
}
