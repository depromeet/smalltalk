import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './DropBox.module.scss';

const cx = classnames.bind(styles);

class DropBox extends Component{
  constructor(){
    super();
    this.state = {
    }
  };
  
  render(){
    const { boxList } = this.props;
    // console.log(this.state.clickedTicket);
    // 생각보다 엮인 부분이 있어서 고민 중입니다 ㅠㅠ
    return(
      <div className={cx("s_titlebox")}>
        <h2>
          {boxList[listIndex].title}
          <span onClick={this.toggleDrop} 
          style={{ transform: this.state.dropR }}>
            ▼
          </span>
        </h2>
        <ul className={cx("title_drop")} 
        style={{ opacity: this.state.isOn, display: this.state.isShow }}>
          { this.makeDropMList(boxList) }
        </ul>
      </div>
    );
  }
}

export default DropBox;