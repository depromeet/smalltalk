import React, { Fragment, PureComponent } from 'react'; 
import { CSSTransitionGroup } from 'react-transition-group'
import letsgo from 'images/letsgo.svg';
import lineRight from 'images/line-right.svg';
import google from 'images/google.png';
import click from 'images/click.svg';
import classnames from 'classnames/bind';
import styles from './RegisterStart.module.scss';
const cx = classnames.bind(styles);

// 일단 페이지 넘버는 component 안에 두는 것으로 결정, Redux 말고
class RegisterStart extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      moveToLeft : false
    }
  }

  handleClick = () => {
    this.props.handleNextButton(1);
    this.setState({
      moveToLeft: true
    })
  }

  render(){
    let className = cx({
      'step-container': true,
      'move-left': this.state.moveToLeft
      // 1이 아니면 바로 바뀜
    })

    return(
    <Fragment>
      <div className={className}> 
        <div className={cx('contents')}>
          <div className={cx('left')}>
            <p className={cx('left-title')}>간단한 개인정보를 </p>
            <p className={cx('left-title')}>입력하고 스몰토크를</p>
            <p className={cx('left-title')}>시작해보세요!</p>
            <button className={cx('button')}> 
              <img src={google} alt="google"/>
              <div> 구글로 회원가입  </div>
            </button>
          </div>
          <div className={cx('arrow')}>
            <img src={lineRight} alt="lineToRight"/>
          </div>
          <div className={cx('circle')}></div>
          <div className={cx('letsgo-img')}>
            <img src={letsgo} alt="letsgo"/>
          </div>
          <div onClick={this.handleClick}> <img src={click} alt="click"/></div>
        </div>
        <div className={cx('bar')}> STEP 1 </div>
      </div>
    </Fragment>
  )
  }
}
// const RegisterStart = ({}) => {
//   return(
//     <Fragment>
//       <div className={cx('step-container')}> 
//         <div className={cx('contents')}>
//           <div className={cx('left')}>
//             <p className={cx('left-title')}>간단한 개인정보를 </p>
//             <p className={cx('left-title')}>입력하고 스몰토크를</p>
//             <p className={cx('left-title')}>시작해보세요!</p>
//             <button className={cx('button')}> 
//               <img src={google} alt="google"/>
//               <div> 구글로 회원가입  </div>
//             </button>
//           </div>
//           <div className={cx('arrow')}>
//             <img src={lineRight} alt="lineToRight"/>
//           </div>
//           <div className={cx('circle')}></div>
//           <div className={cx('letsgo-img')}>
//             <img src={letsgo} alt="letsgo"/>
//           </div>
//           <div onClick={() => {}}> <img src={click} alt="click"/></div>
//         </div>
//         <div className={cx('bar')}> STEP 1 </div>
//       </div>
//     </Fragment>
//   )
// }

export default RegisterStart;