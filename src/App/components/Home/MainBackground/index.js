import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
// import SideMenu from 'App/components/SideMenu';

class MainBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 메뉴 뒤에 위치하는 박스 위치
      left1: -30+'vw',
      left2: -30+'vw',
      left3: -30+'vw',
      left4: -30+'vw',
      // 박스 투명도
      opacitiy1: 0,
      opacitiy2: 0,
      opacitiy3: 0,
      opacitiy4: 0,
      circleURL: '/static/media/oval_img2.35d8c249.png',
    };
  }

  // 이미지를 랜덤으로 선택하는 함수
  randomCircleURL = () => {
    const randomCircleArray = [
      'http://5b0988e595225.cdn.sohucs.com/images/20181215/ff0a549dfbee4acf8e73e65da83532d4.jpeg', 
      'https://constantinnautics.ru/wp-content/uploads/2019/05/photo-1527910444160-b1d75c05d593.jpeg', 
      'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ', 
      'https://scontent-lhr3-1.cdninstagram.com/vp/bb68e1a811f8b1b5318137a064e5b069/5D7E7DCD/t51.2885-15/e35/56744736_557166404774285_2235216315258908791_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MjAzODU1NDkxMzIxOTA0OTc4OA%3D%3D.2',
      'http://freedomlab.org/wp-content/uploads/2019/05/raphael-nogueira-519766-unsplash-1024x642.jpg',
      'https://scontent-atl3-1.cdninstagram.com/vp/bf9d074c985a8bf8a6c5ae84c60bb467/5DC6BF99/t51.2885-15/e35/61539030_609570929555367_3975801932052361307_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
      'https://s3.amazonaws.com/churchplantmedia-cms/heartcry_missionary_society_radford_va/pakistan_stock_2.jpg',
      'https://cafebiz.cafebizcdn.vn/2019/6/12/photo-4-1560334321948931912724.jpg',
      'https://s3.amazonaws.com/iwaria/prod/small-thumbs/1503586914222.95.jpeg',
      'https://images.unsplash.com/photo-1484208700296-c827c9112860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      'https://composeclick.com/wp-content/uploads/2018/04/marco-meyer-598648-unsplash-1024x683.jpg',
      'https://pbs.twimg.com/media/D3pGL6LXoAA4qr3.jpg',
      'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?ixlib=rb-1.2.1&w=1000&q=80',
      'https://cdn.zeplin.io/5cfc3a08cb970515fca66b80/assets/322C0BE6-66B1-4BFA-8347-967D04DEFA0A.png',
      // '/static/media/czech.0aeb8bc2.jpg',
  ];
    const i = Math.round(Math.random() * (randomCircleArray.length-1));
    this.setState({circleURL: randomCircleArray[i]})
  }

  componentWillMount() {
    this.randomCircleURL();
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

  render() {
    return(
      <div className="main-home-background">
        <div className="logo"></div>
        {/* 뒤 배경 원들 */}
        <div className="background-circles">
          <div className="circle" id="red-circle-1"></div>
          <div className="circle" id="edge-circle-1"></div>
          <div className="circle" id="green-circle-1"></div>
          <div className="circle" id="green-circle-2"></div>
          <div className="circle" id="picture-circle-1"></div>
          <div className="circle" id="picture-circle-2" 
          style={{backgroundImage: `url(${this.state.circleURL})` }}
          ></div>
          <div className="circle" id="edge-circle-2"></div>
          <div className="circle" id="gradation-circle"></div>
          <div className="circle" id="red-circle-2"></div>
        </div>
        {/* 메뉴 */}
        <div className="menu">
          <Link to="/mypage" className="menu-list" onMouseOver={this.handleMouseOver1} onMouseOut={this.handleMouseOut1}>
          MYPAGE<div className="menu-box" style={{left: this.state.left1, opacity: this.state.opacitiy1}}></div>
          </Link>
          <Link to="/schedule" className="menu-list" onMouseOver={this.handleMouseOver2} onMouseOut={this.handleMouseOut2}>
          SCHEDULE<div className="menu-box" style={{left: this.state.left2, opacity: this.state.opacitiy2}}></div>
          </Link>
          <Link to="/mate" className="menu-list" onMouseOver={this.handleMouseOver3} onMouseOut={this.handleMouseOut3}>
            MATE<div className="menu-box" style={{left: this.state.left3, opacity: this.state.opacitiy3}}></div>
          </Link>
          <Link to="/bigdata" className="menu-list" onMouseOver={this.handleMouseOver4} onMouseOut={this.handleMouseOut4}>
          BIGDATA<div className="menu-box" style={{left: this.state.left4, opacity: this.state.opacitiy4}}></div>
          </Link>
          <div className="menu-box"></div>
        </div>
        {/* 화살표 1 */}
        <div className="lines-1">
          <div className="dashed-arrow"></div>
          <div className="triangles">
            <div className="red-triangle" id="red-triangle-1"></div>
            <div className="red-triangle" id="red-triangle-2"></div>
          </div>
          <div className="introduction">
          전 세계의 친구들을 만날 수
    있는 기회를 잡아보세요!
          </div>
          <div className="line-arrow">
            <div className="red-triangle" id="red-triangle-3"></div>
            <div className="red-triangle" id="red-triangle-4"></div>
            <div className="red-line"></div>
          </div>
        </div>
        {/* 화살표 2 */}
        <div className="lines-2">
          <div className="dashed-line"></div>
          <div className="red-line"></div>
          <div className="white-arrow"></div>
        </div>
        <div className="main-home__phrases"></div>
      </div>
      )  
  }
}

export default MainBackground;
