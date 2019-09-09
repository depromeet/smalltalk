import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './DropBox.module.scss';

const cx = classnames.bind(styles);

class DropBox extends Component{
  constructor(){
    super();
    this.state = {
      isOn: 0,
      isShow: "none",
      listIndex: 0,
      dropR: "rotate(0deg)"
    }
  };

  toggleDrop = () => {
    if(this.state.isOn === 1) {
      this.setState({
        isOn: 0, 
        dropR: "rotate(0deg)", 
        isShow: "none"
      });
    } else {
      this.setState({
        isOn: 1, 
        dropR: "rotate(180deg)", 
        isShow: "block"
      });
    }
  }

  scheduleSet = (i) => {
    this.props.callListIndex(i);
    this.setState({
      listIndex: i, 
      isOn: 0, 
      dropR: "rotate(0deg)", 
      isShow: "none"
    });
  }

  makeDropMList = ( boxList ) => { 
    return boxList.map(( bTitle, i ) => {
      // console.log(ticket);
      return (
        <li key={`schedule-${i}`} className={cx("t_list")} 
        onClick={() => this.scheduleSet(i)}>
          {bTitle.title}
        </li>
      );
    })
  }

  delHeight = (len) => {
    let delHeight = 0;
    if(len === 3){
      delHeight = 180;
    }else if(len === 2){
      delHeight = 120;
    }else if(len === 1){
      delHeight = 60;
    }else{
      if(this.props.dropStyle == "schedule-dropBox"){
        delHeight = 237
      }else{
        delHeight = 182
      }
    }

    return { 
      "opacity": this.state.isOn, 
      "display": this.state.isShow, 
      "height" : delHeight + "px" 
    }
  }
  
  render(){
    const { boxList } = this.props;
    const { listIndex } = this.state;
    const { dropR } = this.state;
    // console.log(this.state.clickedTicket);

    return(
      <div className={cx(this.props.dropStyle)}>
        <h2>
          {boxList[listIndex].title}
          <span onClick={this.toggleDrop} 
          style={{ transform: dropR }}>
            ▼
          </span>
        </h2>
        <p>화살표를 클릭하세요!<br/>이전 일정들도 확인할 수 있습니다.</p>
        <ul className={cx("title_drop")} 
        style={ this.delHeight(boxList.length) }>
          { this.makeDropMList(boxList) }
        </ul>
      </div>
    );
  }
}

export default DropBox;