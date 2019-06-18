import React, {Component, Fragment} from 'react';
import Ticket from '../../components/Ticket';
import './styles.scss';

class TicketList extends Component{
  render(){
    return(
      <Fragment>
        <div className="arrow_list">
          <div className="t_box">
            <ul className="call_t">
              <li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li>
            </ul>
          </div>
          <div className="paddle-nav">
            <ul>
              <li className="arrow prev"><button>&lt;</button></li>
              <li className="arrow next"><button>&gt;</button></li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

class MateListRow extends Component{
  render(){
    const talker = this.props.talker;
    const tag = this.props.tag;
    return (
      <tr>
        <td>{talker}</td>
        <td>{tag}</td>
        <td>친구 신청</td>
      </tr>
    );
  }
}

class MateListTable extends Component{
  render(){
    const rows = [];
    rows.push(
      <MateListRow
      />
    )
    return (
      <table>
        <thead>
          <tr>
            <th>토커</th>
            <th>나와 맞는 태그</th>
            <th>친구신청</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class MateList extends Component{
  render(){
    return(
        <div className="list_wrap">
          <h1>친구 추천 리스트</h1>
          <TicketList/>
          <MateListTable matelist = {MATELIST}/>
        </div>
      )
  }
}

const MATELIST = [
  {talker: 'ㄱi염둥이', tag: '#즉흥적'},
  {talker: '같이 여행해용', tag: '#즉흥적'},
  {talker: '반지하', tag: '#즉흥적'},
  {talker: '재현공주', tag: '#즉흥적'},
  {talker: '황희공주', tag: '#즉흥적'},
  {talker: '몸짱남', tag: '#즉흥적'}
];

export default MateList;