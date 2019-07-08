import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import SmallTicket from '../SmallTicket';

import classnames from 'classnames/bind';
import styles from './TicketList.module.scss';
const cx = classnames.bind(styles);

class TicketList extends Component{
    constructor(){
      super();
      this.state = {
        isToggleOn: null
      }
    }
  
    activeTicket = (i) => {
      if(this.state.isToggleOn === i){
        this.setState({isToggleOn: null})
      } else {
        this.setState({isToggleOn: i})
      }
      console.log("클릭" + i);
    }
  
    makeList = ( ticketList ) => { 
      return ticketList.map( (ticket, i) => {
        return <li className={cx(this.state.isToggleOn === i? 'active':'none')} onClick={() => this.activeTicket(i)}><SmallTicket listLen={ticketList.length} ticket={ticket}/></li>
      })
    }
  
    resizeWidth = (length) => {
      /* resize */
      const _vWidth = 390;
      let resetWidth = (_vWidth * length) + 'px';
      return { "width" : resetWidth}
    }
  
    prevEnt = () => {
      const movePos = 390;
      let resetPos = movePos + "px";
      return { "left" : resetPos }
    }
    nextEnt = () => {
      const movePos = 390;
      let resetPos = (movePos - (movePos * 2)) + "px";
      console.log(resetPos);
      return { "left" : resetPos }
    }
    
    render(){
      const { ticketList } = this.props;
      
      return(
        <Fragment>
          <div className={cx('arrow_list')}>
            <div className={cx('t_box')}>
              <ul className={cx('call_t')} style={this.resizeWidth(ticketList.length)}>
                {this.makeList(ticketList)}
              </ul>
            </div>
            <div className={cx('paddle-nav')}>
              <ul>
                <li className={cx('arrow', 'prev')} onClick={() => this.prevEnt()}><button>&lt;</button></li>
                <li className={cx('arrow', 'next')} onClick={() => this.nextEnt()}><button>&gt;</button></li>
              </ul>
            </div>
          </div>
        </Fragment>
      )
    }
  }

  export default TicketList;