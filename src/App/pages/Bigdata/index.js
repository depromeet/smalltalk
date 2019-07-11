import React, { Component, Fragment } from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
const cx = classnames.bind(styles);

class Bigdata extends Component{
//   constructor(props){
//     super(props);
//   }

  render(){
    return(
        <div className={cx("bigdata")}>
            {/* 스몰토크 로고 */}
            <div className="logo"></div>
            {/* 검색 바 */}
            <div className={cx("search-bar")}>
                <input className={cx("input")} placeholder="나라 / 도시 검색"></input>
                <div className={cx("drop-down-button")}></div>
            </div>
            <div className={cx("default-value")}>
                <div className={cx("phrases-1")}>나라/도시를<br></br>검색해주세요</div>
                <div className={cx("phrases-2")}>
                    <div className={cx("phrases-black")}>현재 가장 많은</div>
                    <div className={cx("phrases-2-2")}>
                        <div className={cx("phrases-red")}>토커</div><div className={cx("phrases-black")}>가 있는 도시</div>
                    </div>
                </div>
                <div className={cx("arrow")}></div>
            </div>
            {/* 나라 리스트 */}
            <div className={cx("country-list")}>
                <div className={cx("box")}>
                    <img src="https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/90CD9AE9-4B90-4787-89C4-0629DDE52E9F.png" className={cx("picture")} alt="country"></img>
                    <div className={cx("left-row")}>
                        <div className={cx("country-name")}>리스본</div>
                        <div className={cx("content")}>
                            <div className={cx("phrases")}>현재</div>
                            <div className={cx("number")}>50명</div>
                            <div className={cx("phrases")}>이 여행중입니다</div>
                        </div>
                    </div>
                    <div className={cx("right-row")}>
                        <div className={cx("text")}>바로보기</div>
                    </div>
                </div>
            </div>
            {/* 친구 리스트, 채팅 버튼 */}
            <div className="buttons">
                <div className="list-button" 
                // onClick={handleListClick}
                ></div>
                <div className="chat-button" 
                // onClick={handleChatClick}
                ></div>
            </div>
        </div>
        )
    }
}

export default Bigdata;