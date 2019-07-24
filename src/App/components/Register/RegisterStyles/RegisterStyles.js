import React, {Component} from 'react';
import StylePair from './StylePair';
import iconNext from 'images/icon-next.svg';
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
            0: ['계획적', 1],
            1: ['즉흥적', 2]
          }
        },
        {
          id: 2,
          0: false,
          1: true,
          value: {
            0: ['아침형', 3],
            1: ['저녁형', 4]
          }
        },
        {
          id: 3,
          0: true,
          1: false,
          value: {
            0: ['알뜰족', 5],
            1: ['욜로족', 6]
          }
        },
        {
          id: 4,
          0: true,
          1: false,
          value: {
            0: ['뚜벅이', 7],
            1: ['택시파', 8]
          }
        },
        {
          id: 5,
          0: false,
          1: true,
          value: {
            0: ['알콜파', 9],
            1: ['논알콜파', 10]
          }
        },
        {
          id: 6,
          0: true,
          1: false,
          value: {
            0: ['호텔파', 11],
            1: ['게스트하우스파', 12]
          }
        },
        {
          id: 7,
          0: true,
          1: false,
          value: {
            0: ['맛집투어', 13],
            1: ['쇼핑투어', 14]
          }
        },
        {
          id: 8,
          0: false,
          1: true,
          value: {
            0: ['관광파', 15],
            1: ['액티브파', 16]
          }
        },
        {
          id: 9,
          0: true,
          1: false,
          value: {
            0: ['예술투어', 17],
            1: ['휴양족', 18]
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
    const { handleNextBtn } = this.props;
    const { pairs } = this.state;
    const selectedTags = [];
    pairs.forEach( pair => {
      let selectedKey = 0;
      for(let key in pair){
        //  console.log(key);
        if(pair[key] === true){
          selectedKey = key;
        }
      }
      selectedTags.push(pair.value[selectedKey][1]);
    })
    //console.log(selectedTags);
    return this.props.nextBtnClick({ tags : selectedTags});
  }

  render(){
    const { isMovedLeft } = this.props;
    const { pairs } = this.state;
    let className= cx({
    'step-container': true,
    'move-left': isMovedLeft[2]
    });
    return (
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