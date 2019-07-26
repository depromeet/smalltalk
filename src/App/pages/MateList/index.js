import React, {Component, Fragment} from 'react';
import TicketList from '../../components/TicketList';
import MateListTable from '../../components/MateListTable';
import MenuBtn from '../../components/MenuBtn'

import brazil from 'static/images/ticketImg/brazil.jpg';
import czech from 'static/images/ticketImg/czech.jpg';
import denmark from 'static/images/ticketImg/denmark.jpg';
import greece from 'static/images/ticketImg/greece.jpg';
import mongolia from 'static/images/ticketImg/mongolia.jpg';

import pro1 from 'static/images/profile/p1.png';
import pro2 from 'static/images/profile/p2.png';
import pro3 from 'static/images/profile/p3.png';
import pro4 from 'static/images/profile/p4.png';
import pro5 from 'static/images/profile/p5.png';
import pro6 from 'static/images/profile/p6.png';
import pro7 from 'static/images/profile/p7.png';

import classnames from 'classnames/bind';
import styles from './MateList.module.scss';
import SideMenu from './../../components/Chat/SideMenu';
const cx = classnames.bind(styles);

class MateList extends Component{
  constructor(props){
    super(props);
    this.state = {
      ticketList: [
        {
          id: "0",
          ticketTitle: '도쿄',
          ticketSubTitle: 'Tokyo',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : brazil,
          friends: [
            { 
              id: 0,
              src: pro1,
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: pro2,
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: pro3,
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: pro4,
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: pro5,
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: pro6,
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: pro7,
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
        },
        {
          id: "1",
          ticketTitle: '파리',
          ticketSubTitle: 'Paris',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : czech,
          friends: [
            { 
              id: 2,
              src: pro3,
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 0,
              src: pro1,
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: pro2,
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 4,
              src: pro5,
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 3,
              src: pro4,
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: pro6,
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: pro7,
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
        },
        {
          id: "2",
          ticketTitle: '로스엔젤리스',
          ticketSubTitle: 'LA',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : denmark,
          friends: [
            { 
              id: 1,
              src: pro2,
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: pro3,
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 0,
              src: pro1,
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 5,
              src: pro6,
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: pro5,
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: pro7,
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 3,
              src: pro4,
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
        },
        {
          id: "3",
          ticketTitle: '싱가포르',
          ticketSubTitle: 'Singapore',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : greece,
          friends: [
            { 
              id: 6,
              src: pro7,
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: pro5,
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 1,
              src: pro2,
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: pro3,
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 0,
              src: pro1,
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 5,
              src: pro6,
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 3,
              src: pro4,
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
        },
        {
          id: "4",
          ticketTitle: '파리',
          ticketSubTitle: 'Paris',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : mongolia,
          friends: [
            { 
              id: 3,
              src: pro4,
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 0,
              src: pro1,
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 6,
              src: pro7,
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: pro5,
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 1,
              src: pro2,
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: pro3,
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 5,
              src: pro6,
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
          ]
        }
      ],
      callToIndex: 0
    }
  };

  myCallIndex = (callFromIndex) => {
    this.setState({
      callToIndex: callFromIndex
    })
  }

  render(){
    const { ticketList } = this.state;
    // console.log(this.state.callToIndex);

    return(
      <Fragment>
        <MenuBtn barColor = { "#000" }  boxHidden = { "block" }/>
        <SideMenu />
        <div className={cx('list_wrap')}>
          <h1>친구 추천 리스트</h1>
          <TicketList ticketList = {ticketList} callIndexParent={this.myCallIndex}/>
          <MateListTable ticketList = {ticketList} ticketIndex = {this.state.callToIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default MateList;