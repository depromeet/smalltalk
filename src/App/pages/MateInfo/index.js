import React, {Component, Fragment} from 'react';

import classnames from 'classnames/bind';
import styles from './MateInfo.module.scss';
const cx = classnames.bind(styles);

class MateInfo extends Component{
  constructor(){
    super();
    this.state = {
      friend : {
        talker: "투머치토커",
        introduction: "안녕 나는 오늘 캄보디아를 가! 매우매우 설레는 여행이야. 가서 소매치기 당하지는 않겠지? 나는 잘 다녀올 거라고 믿어. 하하 올 때 꼭 선물 사올게. 다시 또 만나!",
        age: "27",
        gender: "남성"
      }
    }
  }

  render(){
    const { friend } = this.state;

    return (
      <Fragment>
      <div className={cx("back_circle")}>
        <div className={cx("cir", "cir1")}></div>
        <div className={cx("cir", "cir2")}></div>
        <div className={cx("cir", "cir3")}></div>
      </div>
      <div className={cx("user_wrap")}>
        <div className={cx("big_title")}>
          <div className={cx("title_left")}>
            <span>USER<br/>PROFILE</span>
            <button>친구 추가</button>
            <hr/>
          </div>
          <div className={cx("title_right")}>
            <span>Mate with me:3</span>
          </div>
        </div>
        <div className={cx("user_info")}>
          <div className={cx("user_profile")}>
            <div class={cx("profile_img")}></div>
            <div class={cx("profile_info")}>
              <h2>USER NAME</h2>
              <h3>{friend.talker}</h3>
              <p>{friend.introduction}</p>
              <h2>AGE / GENDER</h2>
              <h3>{friend.age}/{friend.gender}</h3>
            </div>
          </div>
          <ul className={cx("user_style")}>
            스타일입니다.
            {/* {this.makeList()} */}
          </ul>
        </div>
        <div class={cx("user_schedule")}>
          스케쥴입니다.
        </div>
      </div>
      </Fragment>
    );
  }
}

export default MateInfo;