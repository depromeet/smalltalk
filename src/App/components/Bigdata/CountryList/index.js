import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classnames.bind(styles);

class CountryList extends Component{
//   constructor(props){
//     super(props);
//   }
  a = (e) => {
    console.log(e.target);
    this.props.handleName(this.props.name);
    this.props.handlePeopleCount(this.props.number);
    this.props.showListOfPeopleInTheCity();
  }
  render(){
    if(this.props.name.indexOf(this.props.input) === -1) return <div></div>;
    else {
      return(
        <div className={cx("box")}>
          <img src={this.props.picture} className={cx("picture")} alt="country"></img>
          <div className={cx("left-row")}>
            <div className={cx("country-name")}>{this.props.name}</div>
            <div className={cx("content")}>
              <div className={cx("phrases")}>현재</div>
              <div className={cx("number")}>{this.props.number}명</div>
              <div className={cx("phrases")}>이 여행중입니다</div>
            </div>
          </div>
          <div className={cx("right-row")} onClick={this.a}>
            <div className={cx("text")}>바로보기</div>
          </div>
        </div>
      )
    }
  }
}

export default CountryList;