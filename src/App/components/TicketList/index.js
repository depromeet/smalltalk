import React, {Component} from 'react';
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
      cirColor: "#fb3e1d",
      btnIndex: 0
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
    const _vWidth = 293;
    let resetWidth = (_vWidth * length) + 'px';
    let resetLeft = (_vWidth * - this.state.btnIndex) + 'px';
    return { "width" : resetWidth, "left" : resetLeft}
  }

  prevEnt = () => {
    if(this.state.btnIndex <= 0){
      this.setState({
        btnIndex: 0
      });
    }else{
      this.setState({
        btnIndex: this.state.btnIndex - 1
      });
    }
  }
  nextEnt = (length) => {
    if(this.state.btnIndex >= length - 4){
      this.setState({
        btnIndex: length - 4
      });
    }else{
      this.setState({
        btnIndex: this.state.btnIndex + 1
      });
    }
  }
  prevEntHidden = () => {
    if(this.state.btnIndex === 0){
      return {"display" : "none"};
    }
  }
  nextEntHidden = (length) => {
    if(this.state.btnIndex === length - 4){
      return {"display" : "none"};
    }
  }
  
  render(){
    const { ticketList } = this.props;
    console.log(this.state.btnIndex);

    return(
      <div className={cx('arrow_list')}>
        <div className={cx('t_box')}>
          <ul className={cx('call_t')} style={this.resizeWidth(ticketList.length)}>
            {this.makeList(ticketList)}
          </ul>
        </div>
        <div className={cx('paddle-nav')}>
          <ul>
            <li className={cx('arrow', 'prev')} onClick={() => this.prevEnt(ticketList.length)} style={this.prevEntHidden()}><button>&lt;</button></li>
            <li className={cx('arrow', 'next')} onClick={() => this.nextEnt(ticketList.length)} style={this.nextEntHidden(ticketList.length)}><button>&gt;</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TicketList;