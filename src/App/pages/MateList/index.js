import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import TicketList from '../../components/TicketList';
import MateListTable from '../../components/MateListTable';

import classnames from 'classnames/bind';
import styles from './MateList.module.scss';
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
          ticketImage : '../../static/images/ticket_img.png',
          friends: [
            { 
              id: 0,
              src: '../../static/images/talker.png',
              talker: 'ㄱi염둥이0',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: '../../static/images/talker.png',
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: '../../static/images/talker.png',
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: '../../static/images/talker.png',
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: '../../static/images/talker.png',
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: '../../static/images/talker.png',
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: '../../static/images/talker.png',
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
          ticketImage : '../../static/images/ticket_img.png',
          friends: [
            { 
              id: 0,
              src: '../../static/images/talker.png',
              talker: 'ㄱi염둥이1',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: '../../static/images/talker.png',
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: '../../static/images/talker.png',
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: '../../static/images/talker.png',
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: '../../static/images/talker.png',
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: '../../static/images/talker.png',
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: '../../static/images/talker.png',
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
          ticketImage : '../../static/images/ticket_img.png',
          friends: [
            { 
              id: 0,
              src: '../../static/images/talker.png',
              talker: 'ㄱi염둥이2',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: '../../static/images/talker.png',
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: '../../static/images/talker.png',
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: '../../static/images/talker.png',
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: '../../static/images/talker.png',
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: '../../static/images/talker.png',
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: '../../static/images/talker.png',
              talker: '웅엥웅',
              info: '30대 남성', 
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
          ticketImage : '../../static/images/ticket_img.png',
          friends: [
            { 
              id: 0,
              src: '../../static/images/talker.png',
              talker: 'ㄱi염둥이3',
              info: '20대 남성', 
              tag: ['#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: '../../static/images/talker.png',
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형','#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: '../../static/images/talker.png',
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: '../../static/images/talker.png',
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: '../../static/images/talker.png',
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: '../../static/images/talker.png',
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: '../../static/images/talker.png',
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
        },
        {
          id: "4",
          ticketTitle: '도쿄',
          ticketSubTitle: 'Tokyo',
          startDate: '2019.06.08',
          endDate: '2019.06.15',
          ticketImage : '../../static/images/ticket_img.png',
          friends: [
            { 
              id: 0,
              src: '../../static/images/talker.png',
              talker: 'ㄱi염둥이',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
            },
            { 
              id: 1,
              src: '../../static/images/talker.png',
              talker: '같이 여행해용',
              info: '20대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
            },
            { 
              id: 2,
              src: '../../static/images/talker.png',
              talker: '반지하',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
            },
            { 
              id: 3,
              src: '../../static/images/talker.png',
              talker: '재현공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 4,
              src: '../../static/images/talker.png',
              talker: '황희공주',
              info: '20대 여성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 5,
              src: '../../static/images/talker.png',
              talker: '몸짱남',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            },
            { 
              id: 6,
              src: '../../static/images/talker.png',
              talker: '웅엥웅',
              info: '30대 남성', 
              tag: ['#즉흥적', '#저녁형', '#알뜰족']  
            }
          ]
          },
          {
            id: "5",
            ticketTitle: '파리',
            ticketSubTitle: 'Paris',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png',
            friends: [
              { 
                id: 0,
                src: '../../static/images/talker.png',
                talker: 'ㄱi염둥이',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
              },
              { 
                id: 1,
                src: '../../static/images/talker.png',
                talker: '같이 여행해용',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
              },
              { 
                id: 2,
                src: '../../static/images/talker.png',
                talker: '반지하',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
              },
              { 
                id: 3,
                src: '../../static/images/talker.png',
                talker: '재현공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 4,
                src: '../../static/images/talker.png',
                talker: '황희공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 5,
                src: '../../static/images/talker.png',
                talker: '몸짱남',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 6,
                src: '../../static/images/talker.png',
                talker: '웅엥웅',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              }
            ]
          },
          {
            id: "6",
            ticketTitle: '로스엔젤리스',
            ticketSubTitle: 'LA',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png',
            friends: [
              { 
                id: 0,
                src: '../../static/images/talker.png',
                talker: 'ㄱi염둥이',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
              },
              { 
                id: 1,
                src: '../../static/images/talker.png',
                talker: '같이 여행해용',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
              },
              { 
                id: 2,
                src: '../../static/images/talker.png',
                talker: '반지하',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
              },
              { 
                id: 3,
                src: '../../static/images/talker.png',
                talker: '재현공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 4,
                src: '../../static/images/talker.png',
                talker: '황희공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 5,
                src: '../../static/images/talker.png',
                talker: '몸짱남',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 6,
                src: '../../static/images/talker.png',
                talker: '웅엥웅',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              }
            ]
          },
          {
            id: "7",
            ticketTitle: '싱가포르',
            ticketSubTitle: 'Singapore',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png',
            friends: [
              { 
                id: 0,
                src: '../../static/images/talker.png',
                talker: 'ㄱi염둥이',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
              },
              { 
                id: 1,
                src: '../../static/images/talker.png',
                talker: '같이 여행해용',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
              },
              { 
                id: 2,
                src: '../../static/images/talker.png',
                talker: '반지하',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
              },
              { 
                id: 3,
                src: '../../static/images/talker.png',
                talker: '재현공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 4,
                src: '../../static/images/talker.png',
                talker: '황희공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 5,
                src: '../../static/images/talker.png',
                talker: '몸짱남',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 6,
                src: '../../static/images/talker.png',
                talker: '웅엥웅',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              }
            ]
          },
          {
            id: "8",
            ticketTitle: '도쿄',
            ticketSubTitle: 'Tokyo',
            startDate: '2019.06.08',
            endDate: '2019.06.15',
            ticketImage : '../../static/images/ticket_img.png',
            friends: [
              { 
                id: 0,
                src: '../../static/images/talker.png',
                talker: 'ㄱi염둥이',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
              },
              { 
                id: 1,
                src: '../../static/images/talker.png',
                talker: '같이 여행해용',
                info: '20대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
              },
              { 
                id: 2,
                src: '../../static/images/talker.png',
                talker: '반지하',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
              },
              { 
                id: 3,
                src: '../../static/images/talker.png',
                talker: '재현공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 4,
                src: '../../static/images/talker.png',
                talker: '황희공주',
                info: '20대 여성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 5,
                src: '../../static/images/talker.png',
                talker: '몸짱남',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              },
              { 
                id: 6,
                src: '../../static/images/talker.png',
                talker: '웅엥웅',
                info: '30대 남성', 
                tag: ['#즉흥적', '#저녁형', '#알뜰족']  
              }
            ]
            },
            {
              id: "9",
              ticketTitle: '파리',
              ticketSubTitle: 'Paris',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png',
              friends: [
                { 
                  id: 0,
                  src: '../../static/images/talker.png',
                  talker: 'ㄱi염둥이',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
                },
                { 
                  id: 1,
                  src: '../../static/images/talker.png',
                  talker: '같이 여행해용',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
                },
                { 
                  id: 2,
                  src: '../../static/images/talker.png',
                  talker: '반지하',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
                },
                { 
                  id: 3,
                  src: '../../static/images/talker.png',
                  talker: '재현공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 4,
                  src: '../../static/images/talker.png',
                  talker: '황희공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 5,
                  src: '../../static/images/talker.png',
                  talker: '몸짱남',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 6,
                  src: '../../static/images/talker.png',
                  talker: '웅엥웅',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                }
              ]
            },
            {
              id: "10",
              ticketTitle: '로스엔젤리스',
              ticketSubTitle: 'LA',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png',
              friends: [
                { 
                  id: 0,
                  src: '../../static/images/talker.png',
                  talker: 'ㄱi염둥이',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
                },
                { 
                  id: 1,
                  src: '../../static/images/talker.png',
                  talker: '같이 여행해용',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
                },
                { 
                  id: 2,
                  src: '../../static/images/talker.png',
                  talker: '반지하',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
                },
                { 
                  id: 3,
                  src: '../../static/images/talker.png',
                  talker: '재현공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 4,
                  src: '../../static/images/talker.png',
                  talker: '황희공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 5,
                  src: '../../static/images/talker.png',
                  talker: '몸짱남',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 6,
                  src: '../../static/images/talker.png',
                  talker: '웅엥웅',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                }
              ]
            },
            {
              id: "11",
              ticketTitle: '싱가포르',
              ticketSubTitle: 'Singapore',
              startDate: '2019.06.08',
              endDate: '2019.06.15',
              ticketImage : '../../static/images/ticket_img.png',
              friends: [
                { 
                  id: 0,
                  src: '../../static/images/talker.png',
                  talker: 'ㄱi염둥이',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어', '#핵인싸', '#즉흥적', '#저녁형']  
                },
                { 
                  id: 1,
                  src: '../../static/images/talker.png',
                  talker: '같이 여행해용',
                  info: '20대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파', '#예술투어']  
                },
                { 
                  id: 2,
                  src: '../../static/images/talker.png',
                  talker: '반지하',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족', '#알콜파']  
                },
                { 
                  id: 3,
                  src: '../../static/images/talker.png',
                  talker: '재현공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 4,
                  src: '../../static/images/talker.png',
                  talker: '황희공주',
                  info: '20대 여성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 5,
                  src: '../../static/images/talker.png',
                  talker: '몸짱남',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                },
                { 
                  id: 6,
                  src: '../../static/images/talker.png',
                  talker: '웅엥웅',
                  info: '30대 남성', 
                  tag: ['#즉흥적', '#저녁형', '#알뜰족']  
                }
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
    console.log(this.state.callToIndex);

    return(
      <div className={cx('list_wrap')}>
        <h1>친구 추천 리스트</h1>
        <TicketList ticketList = {ticketList} callIndexParent={this.myCallIndex}/>
        <MateListTable ticketList = {ticketList} ticketIndex = {this.state.callToIndex}/>
      </div>
    )
  }
}

export default MateList;