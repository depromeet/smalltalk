import React, { Component } from 'react';

import classnames from 'classnames/bind';
import styles from './TicketImg.module.scss';
const cx = classnames.bind(styles);

class TicketImg extends Component {
  render(){
    return(
    <svg width="286" height="216" viewBox="0 0 362.067 218.4">
      <g id="ticket" transform="translate(-254 -248)">
        <path id="빼기_5" 
        d="M330.586 218.4H32.2a23.036 23.036 0 0 0-2.6-10.316 27.046 27.046 0 0 0-6.843-8.413A32.7 32.7 0 0 0 12.675 194a36.9 36.9 0 0 0-12.317-2.072H0V27.073h.358a36.877 36.877 0 0 0 12.394-2.1 32.626 32.626 0 0 0 10.122-5.738 26.956 26.956 0 0 0 6.824-8.51A23 23 0 0 0 32.2.3V0h298.386v.3a23 23 0 0 0 2.469 10.356 26.9 26.9 0 0 0 6.74 8.477 32.544 32.544 0 0 0 10.005 5.755 36.8 36.8 0 0 0 12.269 2.186v164.855a36.817 36.817 0 0 0-12.191 2.158 32.619 32.619 0 0 0-9.966 5.683 26.991 26.991 0 0 0-6.758 8.38 23.036 23.036 0 0 0-2.566 10.25z" 
        fill={this.props.backColor} data-name="빼기 5" transform="translate(254 248)"/>
        <path id="선_59" d="M0 0h61.848" stroke={this.props.cirColor} className={cx("cls-3")} data-name="선 59" transform="translate(409.908 263.14)"/>
        <ellipse id="타원_60" cx="2.577" cy="2.577" fill={this.props.cirColor} data-name="타원 60" rx="2.577" ry="2.577" transform="translate(469.179 260.241)"/>
        <ellipse id="타원_59" cx="2.577" cy="2.577" fill={this.props.cirColor} data-name="타원 59" rx="2.577" ry="2.577" transform="translate(409.264 260.241)"/>
      </g>
    </svg>
    );
  }
}

export default TicketImg;