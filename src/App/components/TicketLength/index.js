import React, { Component, Fragment} from 'react';
import classnames from 'classnames/bind';
import styles from './TicketLength.module.scss';
const cx = classnames.bind(styles);

class TicketLength extends Component{
  constructor(props){
    super(props);
  }

  makeList = ( ticketList ) => { 
    return ticketList.map( (ticklen, index) => {
      return <li><div className={cx('num_box')}>
      {
        (function() {
          if (index == 0) return (<p>in</p>);
          if (index + 1 == ticketList.length) return (<p>out</p>);
          else return (<p>{ index }</p>);
        })()
      }</div>
      <hr/><span className={cx('title')}>{ ticklen.ticketTitle }</span></li>
    })
  }

  resizeWidth = (length) => {
    /* resize */
    const _vWidth = 175;
    let resetWidth = (_vWidth * length) + 'px';
    const lmtWidth = (_vWidth * 8) + 'px';

    if (length > 8) return {"width" : lmtWidth};
    else return { "width" : resetWidth };
  }

  render(){
    const { ticketList } = this.props;
    return(
      <Fragment>
        <ul className={cx('length_box')} style={this.resizeWidth(ticketList.length)}>
          {this.makeList(ticketList)}
        </ul>
      </Fragment>
    )
  }
}

export default TicketLength;