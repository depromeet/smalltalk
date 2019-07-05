import React, { Component, Fragment} from 'react';

import classnames from 'classnames/bind';
import styles from './BigTicket.module.scss';
const cx = classnames.bind(styles);

class BigTicket extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // console.log(this.props.ticket);
    const { ticket } =this.props;
    // console.log(this.props.listLen);

    return(
      <Fragment>
        <div className={cx('wrap_box')}>
          <div className={cx('info_box')}>
            <div className={cx('info_t')}>
              <div className={cx('t_left')}>
                <ul className={cx('t_title')}>
                  <li>{ ticket.ticketTitle }</li><li>{ ticket.ticketSubTitle }</li>
                </ul>
                <ul className={cx('t_date')}>
                  <li>{ ticket.startDate }</li><li className={cx('t_arrow')}></li><li>{ ticket.endDate }</li>
                </ul>
              </div>
              <div className={cx('t_right')}></div>
            </div>
            <div className={cx('info_b')}>
              <img src={ticket.ticketImage}/>
            </div>
          </div>
          <div className={cx('s_logo')}>smalltalk</div>
        </div>
      </Fragment>
    )
  }
}



export default BigTicket;