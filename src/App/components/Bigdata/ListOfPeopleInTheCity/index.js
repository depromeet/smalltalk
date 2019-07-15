import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classnames.bind(styles);

class ListOfPeopleInTheCity extends Component{
//   constructor(props){
//     super(props);
//   }
friendRequest = () => {
    this.props.handleFriendRequest(this.props.id);
    
}

  render(){
        return(
            <div className={cx("box")}>
                <img src={this.props.picture} className={cx("picture")} alt="profile"></img>
                <div className={cx("left-row")}>
                    <div className={cx("nickname")}>{this.props.nickname}</div>
                    <div className={cx("content")}>
                        <div className={cx("age")}>{this.props.age}</div>
                        <div className={cx("gender")}>{this.props.gender}</div>
                    </div>
                </div>
                {this.props.isClickedFriendRequest ?
                <div className={cx("right-row-2")}>
                    <div className={cx("text-2")}>친구 신청 완료</div>
                </div>
                :
                <div className={cx("right-row")} onClick={this.friendRequest}>
                    <div className={cx("text")}>친구신청</div>
                </div>
                }
            </div>
        )
    }
}

export default ListOfPeopleInTheCity;