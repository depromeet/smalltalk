import React, { Component} from 'react';
import BigTicket from '../BigTicket';

import classnames from 'classnames/bind';
import styles from './TicketBox.module.scss';

const cx = classnames.bind(styles);

class TicketBox extends Component{
    constructor(){
      super();
      this.state = {
        clickedTicket: []
      }
    };
  
    handleClick = id => {
      console.log(id);
      const { clickedTicket } = this.state;
      const index = clickedTicket.findIndex(x => x === id);
  
      console.log(index);
      if(index === -1){
        const copied = [...clickedTicket, id];
        console.log(copied);
        this.setState({
          clickedTicket: copied
        })
      }else{
        const copied = [...clickedTicket.filter(num => num !== id)];
        console.log(copied);
        this.setState({
          clickedTicket: copied
        })
      }
    };
  
    makeList = ( ticketList ) => { 
      return ticketList.map( (ticket, i) => {
        // console.log(ticket);
        return <li className={cx("t_item", (this.state.clickedTicket.findIndex(x => x === ticket.id) === -1? 'none' : 'active'))} onClick={() => this.handleClick(ticket.id)}>
        <BigTicket listLen={ticketList.length} ticket={ticket}/></li>
      })
    }
  
    resizeWidth = (length) => {
      /* resize */
      const _vWidth = 436;
      let resetWidth = (_vWidth * length) + 'px';
      return { "width" : resetWidth}
    }
  
    render(){
      const { ticketList } = this.props;
      // console.log(this.state.clickedTicket);
      return(
        <ul className={cx('call_t')} style={this.resizeWidth(ticketList.length)}>
          {this.makeList(ticketList)}
        </ul>
      )
    }
  }

  export default TicketBox;