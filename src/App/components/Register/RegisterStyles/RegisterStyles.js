import React, {Component} from 'react';
import StylePair from './StylePair';
import iconNext from 'images/icon-next.svg';
import line from 'static/images/linedown-dot.svg';
import classnames from 'classnames/bind';
import styles from './RegisterStyles.module.scss';
const cx = classnames.bind(styles); 

class RegisterStyles extends Component {
  constructor(props){
    super(props);
    this.state = {
      pairs: [
        {
          id: 1,
          0: true,
          1: false,
          value: {
            0: '아침형',
            1: '저녁형'
          }
        },
        {
          id: 2,
          0: false,
          1: true,
          value: {
            0: '욜로족',
            1: '알뜰족'
          }
        },
        {
          id: 3,
          0: true,
          1: false,
          value: {
            0: '계획적',
            1: '즉흥적'
          }
        },
        {
          id: 4,
          0: true,
          1: false,
          value: {
            0: '뚜벅이',
            1: '택시파'
          }
        },
        {
          id: 5,
          0: false,
          1: true,
          value: {
            0: '알콜파',
            1: '논알콜파'
          }
        },
        {
          id: 6,
          0: true,
          1: false,
          value: {
            0: '호텔파',
            1: '게스트하우스파'
          }
        },
        {
          id: 7,
          0: true,
          1: false,
          value: {
            0: '맛집투어',
            1: '쇼핑투어'
          }
        },
        {
          id: 8,
          0: false,
          1: true,
          value: {
            0: '관광파',
            1: '액티브파'
          }
        },
        {
          id: 9,
          0: true,
          1: false,
          value: {
            0: '예술투어',
            1: '휴양족'
          }
        }
      ]
    }
  }

  handleStyleCircle = ({pairId, position}) => {
    const copied = [...this.state.pairs];
    copied.forEach(pair => {
      if(pair.id === pairId){
        pair[position] = !pair[position]; 
        if(position === '1'){
          pair['0'] = !pair['0']
        }else if(position === '0'){
          pair['1'] = !pair['1']
        }
      }
    })
     this.setState({ pairs : copied })
  }

  handleNextBtnClick = () => {
    // 로그인에 성공하면 다음으로 넘김 (state가 redux store에 있음) 
    // tagsSetRequset(현재 tags)
  }

  render(){
    const { isMovedLeft, handleNextBtn } = this.props;
    const { pairs } = this.state;
    let className= cx({
    'step-container': true,
    'move-left': isMovedLeft[2]
  })

    return(
    <div className={className}>
      <div className={cx('contents')}>
        <div>
          <h1 className={cx('title')}> 내 여행 스타일 선택</h1>
          <div className={cx('guide')}>
            <p>나와 취향이 맞는 친구들을 찾기 위해</p>
            <p>당신의 여행 스타일을 선택해주세요 :)</p>
          </div>
          <div className={cx('style-container')}>
            <div className={cx('style-column')}>
              {
                pairs.slice(0,3).map(pair => {
                  return <StylePair pair={pair} key={pair.id} handleStyleCircle={this.handleStyleCircle}/>
                })
              }
            </div>
            <div className={cx('line-container')}></div>
            <div className={cx('style-column')}>
              {
                pairs.slice(3,6).map(pair => {
                  return <StylePair pair={pair} key={pair.id} handleStyleCircle={this.handleStyleCircle}/>
                })
              }
            </div>
            <div className={cx('line-container')}></div>
              <div className={cx('style-column')}>
              {
                pairs.slice(6,9).map(pair => {
                  return <StylePair pair={pair} key={pair.id} handleStyleCircle={this.handleStyleCircle}/>
                })
              }
            </div>
          </div>
        </div>
        <div className={cx('next-btn')} onClick={this.handleNextBtnClick}>
          <img src={iconNext} alt="next"/>
        </div>
      </div>
      <div className={cx('bar')}>FIN</div>
    </div>
  )
  }
}

// const RegisterStyles = ({ isMovedLeft, handleNextBtn }) => {
//   let className= cx({
//     'step-container': true,
//     'move-left': isMovedLeft[2]
//   })
//   const pairs = [
//   {
//     id: 1,
//     left: {
//       state: false,
//       value: '계획적'
//     },
//     right : {
//       state: false,
//       value: '즉흥적'
//     },
//     result : null
//   },
//   {
//     id: 2,
//     left: {
//       state: true,
//       value: '아침형'
//     },
//     right : {
//       state: false,
//       value: '저녁형'
//     },
//     result : null
//   },
//   {
//     id: 3,
//     left: {
//       state: false,
//       value: '알뜰족'
//     },
//     right : {
//       state: false,
//       value: '욜로족'
//     },
//     result : null
//   }
// ]

//   return(
//     <div className={className}>
//       <div className={cx('contents')}>
//         <h1> 내 여행 스타일 선택</h1>
//         <div className={cx('style-column')}>
//           {
//             pairs.map(pair => {
//               return <StylePair pair={pair} key={pair.id}/>
//             })
//           }
//         </div>
//         <div onClick={()=> {handleNextBtn(2)}}><img src={iconNext} alt="next"/></div>
//       </div>
//       <div className={cx('bar')}>FIN</div>
//     </div>
//   )
// }

export default RegisterStyles;