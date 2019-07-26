import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './TicketLength.module.scss';
const cx = classnames.bind(styles);

class TicketLength extends Component{

  makeList = ( ticketList ) => { 
    return ticketList.map( (ticklen, index) => {
      return <li key={`ticketTitle-${index}`}><div className={cx('num_box')}>
      {
        (function() {
          if (index === 0) return (<p>in</p>);
          if (index + 1 === ticketList.length) return (<p>out</p>);
          else return (<p>{ index }</p>);
        })()
      }</div>
      <hr/><span className={cx('title')}>{ ticklen.ticketTitle }</span></li>
    })
  }

  resizeWidth = (length) => {
    /* resize */
    const _vWidth = this.props.vWidth;
    const _vHeight = 73;
    let resetWidth = (_vWidth * length) + 'px';
    const lmtWidth = (_vWidth * 7) + 'px';

    if (length > 7) return {"width" : lmtWidth, "height" : _vHeight * 2 + "px"};
    else return { "width" : resetWidth, "height" : _vHeight + "px" };
  }

  render(){
    const { ticketList } = this.props;
    // console.log(ticketList);
    return(
      <ul className={cx('length_box')} style={this.resizeWidth(ticketList.length)}>
        {this.makeList(ticketList)}
      </ul>
    );
  }
}

export default TicketLength;