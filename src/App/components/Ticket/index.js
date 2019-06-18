import React, { Component, Fragment} from 'react';
import './styles.scss';

class Ticket extends Component{
  render(){
    return(
      <Fragment>
        <div className="wrap_box">
          <div className="info_box">
            <div className="info_t">
              <div className="t_left">
                <ul className="t_title">
                  <li>도쿄</li><li>Tokyo</li>
                </ul>
                <ul className="t_date">
                  <li>2019.06.08</li><li className="t_arrow"></li><li>2019.06.15</li>
                </ul>
              </div>
              <div className="t_right"></div>
            </div>
            <div className="info_b">
            </div>
          </div>
          <div className="s_logo">smalltalk</div>
        </div>
      </Fragment>
    )
  }
}

export default Ticket;