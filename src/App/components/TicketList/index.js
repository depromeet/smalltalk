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
        isToggleOn: 0,
        backColor: "#fff",
        cirColor: "#fb3e1d"
      }
    }

    activeTicket = (i) => {
      this.setState({isToggleOn: i});
      console.log("클릭" + i);

      this.props.callIndexParent(i);
    }
  
    makeList = ( ticketList ) => { 
      return ticketList.map( (ticket, i) => {
        if(this.state.isToggleOn === i) return <li onClick={() => this.activeTicket(i)}><SmallTicket listLen={ticketList.length} ticket={ticket} backColor={this.state.cirColor} cirColor={this.state.backColor}/></li>
        else return <li onClick={() => this.activeTicket(i)}><SmallTicket listLen={ticketList.length} ticket={ticket} backColor={this.state.backColor} cirColor={this.state.cirColor}/></li>
      })
    }
  
    resizeWidth = (length) => {
      /* resize */
      const _vWidth = 293;
      let resetWidth = (_vWidth * length) + 'px';
      return { "width" : resetWidth}
    }
  
    // prevEnt = (index) => {
    //   console.log("클릭" + index);
    //   const movePos = 293;
    //   let resetPos = movePos + "px";
    //   if(index == index) return { "left" : resetPos }
    // }
    // nextEnt = (index) => {
    //   const movePos = 293;
    //   let resetPos = (movePos - (movePos * 2)) + "px";
    //   console.log(resetPos);
    //   return { "left" : resetPos }
    // }
    
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
                <li className={cx('arrow', 'prev')} onClick={() => this.prevEnt(ticketList.length)}><button>&lt;</button></li>
                <li className={cx('arrow', 'next')} onClick={() => this.nextEnt(ticketList.length)}><button>&gt;</button></li>
              </ul>
            </div>
          </div>
        </Fragment>
      )
    }
  }

  export default TicketList;