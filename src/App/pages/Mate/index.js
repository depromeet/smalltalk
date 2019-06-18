import React, {Component, Fragment} from 'react';
import Ticket from '../../components/Ticket';
import './styles.scss';

class Mate extends Component{
    render(){
      return(
        <Fragment>
          <div className="mate_wrap">

            <div className="mate_title">
              <h1>친구를 추천받을<br/>지역을 선택해주세요</h1>
              <p>친구를 추천받고 싶으신 여행일정을 선택하고,<br/>당신만의 메이트를 찾아보세요 :)</p>
            </div>

            <div className="t_box">
              <ul className="call_t">
                <li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li><li className="t_li"><Ticket/></li>
              </ul>
            </div>
            
          </div>
          
                
                
            </Fragment>
        )
    }
}

export default Mate;