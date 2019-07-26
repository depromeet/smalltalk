import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import brazil from 'static/images/ticketImg/brazil.jpg';
import czech from 'static/images/ticketImg/czech.jpg';
import denmark from 'static/images/ticketImg/denmark.jpg';
import greece from 'static/images/ticketImg/greece.jpg';
import mongolia from 'static/images/ticketImg/mongolia.jpg';
import russia from 'static/images/ticketImg/russia.jpg';
import turkey from 'static/images/ticketImg/turkey.jpg';

import classnames from 'classnames/bind';
import styles from './MenuBtn.module.scss';

const cx = classnames.bind(styles);

class MenuBtn extends Component{

  constructor(props) {
    super(props);
    this.state = {
      left1: -30+'vw',
      left2: -30+'vw',
      left3: -30+'vw',
      left4: -30+'vw',
      opacitiy1: 0,
      opacitiy2: 0,
      opacitiy3: 0,
      opacitiy4: 0,
      isToggleOn : false,
      num : 0,
      num2: 1,
      isOn: "none",
      backArray: [brazil, czech, denmark, greece, mongolia, russia, turkey],
      backImg: brazil,
      count: 0
    };
  }
  
  // 메뉴 마우스 오버시 나타나는 애니메이션 함수들
  handleMouseOver1 = () => {
    this.setState({ left1: 0, opacitiy1: 1 });
  }

  handleMouseOut1 = () => {
    this.setState({ left1: -30+'vw', opacitiy1: 0 });
  }
  
  handleMouseOver2 = () => {
    this.setState({ left2: 0, opacitiy2: 1 });
  }

  handleMouseOut2 = () => {
    this.setState({ left2: -30+'vw', opacitiy2: 0 });
  }

  handleMouseOver3 = () => {
    this.setState({ left3: 0, opacitiy3: 1 });
  }

  handleMouseOut3 = () => {
    this.setState({ left3: -30+'vw', opacitiy3: 0 });
  }

  handleMouseOver4 = () => {
    this.setState({ left4: 0, opacitiy4: 1 });
  }

  handleMouseOut4 = () => {
    this.setState({ left4: -30+'vw', opacitiy4: 0 });
  }

  toggleBtn = (active) => {
    if(!active){
      this.setState({
        isToggleOn: true,
        num: 1,
        num2: 0,
        isOn: "block"
      })
    }else{
      this.setState({
        isToggleOn: false,
        num: 0,
        num2: 1,
        isOn: "none"
      })
    }
  }
  toggleMenu = (active) => {
    if(!active){
      return { "left" : "-60vw" }
    }else{
      return { "left" : 0 }
    }
  }
  componentDidMount() {
    setInterval(() => {
      // console.log("바뀜!");
      this.setState({
        backImg: this.state.backArray[Math.floor(Math.random()*this.state.backArray.length)]
      })
    }, 1500)
  }
  
  render(){
    // console.log(this.state.isToggleOn);
    return(
      <Fragment>
        <Link to="/"><div className={cx("logo")}></div></Link>
        <div className={cx("show_box")} style={{display: this.props.boxHidden}}>
          <div className={cx("navi_box")} style={this.toggleMenu(this.state.isToggleOn)}>
            <div className={cx("random_img")}>
              <img src={this.state.backImg} alt=""/>
            </div>
            <div className={cx("menu_box")}>
              <span>Talk<br/>Anywhere</span>
              <div className={cx("menu")}>
                <Link to="/mypage" className={cx("menu-list")} onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
                MYPAGE<div className={cx("menu-box")} style={{left: this.state.left1, opacity: this.state.opacitiy1}}></div>
                </Link>
                <Link to="/schedule" className={cx("menu-list")} onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}>
                SCHEDULE<div className={cx("menu-box")} style={{left: this.state.left2, opacity: this.state.opacitiy2}}></div>
                </Link>
                <Link to="/mate" className={cx("menu-list")} onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}>
                  MATE<div className={cx("menu-box")} style={{left: this.state.left3, opacity: this.state.opacitiy3}}></div>
                </Link>
                <Link to="/bigdata" className={cx("menu-list")} onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}>
                BIGDATA<div className={cx("menu-box")} style={{left: this.state.left4, opacity: this.state.opacitiy4}}></div>
                </Link>
                <div className={cx("menu-box")}></div>
              </div>
              <button className={cx("logout_btn")}>LOGOUT</button>
            </div>
            <button onClick={() => this.toggleBtn(this.state.isToggleOn)} className={cx("navi_btn")}>
              <div className={cx("m_close")} style={{opacity: this.state.num2}}>
                <div className={cx("m_bar")} style={{background: this.props.barColor}}></div>
                <div className={cx("m_bar")} style={{background: this.props.barColor}}></div>
                <div className={cx("m_bar")} style={{background: this.props.barColor}}></div>
                <div className={cx("m_bar")} style={{background: this.props.barColor}}></div>
              </div>
              <div className={cx("m_open")} style={{opacity: this.state.num}}>
                <div className={cx("mx_bar", "bar1")}></div>
                <div className={cx("mx_bar", "bar2")}></div>
              </div>
            </button>
          </div>
          <div className={cx("backCover")} style={{opacity: this.state.num, display: this.state.isOn}}></div>
        </div>
      </Fragment>
    );
  }
}

  export default MenuBtn;