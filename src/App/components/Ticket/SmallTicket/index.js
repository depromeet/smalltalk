import React from 'react';
import TicketImg from '../TicketImg';
import classnames from 'classnames/bind';
import styles from './SmallTicket.module.scss';

const cx = classnames.bind(styles);

const SmallTicket = ({ ticket, backColor, cirColor }) => {
  return(
    <div className={cx('wrap_box')}>
      <TicketImg 
        backColor = { backColor } 
        cirColor = { cirColor }
      />
      <div className={cx('info_box')}>
        <div className={cx('info_t')}>
          <div className={cx('t_left')}>
            <ul className={cx('t_title')}>
              <li>{ ticket.ticketTitle }
              </li><li>{ ticket.ticketSubTitle }</li>
            </ul>
            <ul className={cx('t_date')}>
              <li>{ ticket.startDate }
              </li><li className={cx('t_arrow')}>
              </li><li>{ ticket.endDate }</li>
            </ul>
          </div>
          <div className={cx('t_right')}></div>
        </div>
        <div className={cx('info_b')}>
          <img src={ ticket.ticketImage } alt="티켓 이미지"/>
        </div>
      </div>
      <div className={cx('s_logo')}>smalltalk</div>
    </div>
  );
}

export default SmallTicket;