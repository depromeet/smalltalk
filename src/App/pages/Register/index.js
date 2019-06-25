import React, { Component, Fragment } from 'react';
import { RegisterAnimationBars, CarouselContainer } from 'App/components/Register';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
const cx = classnames.bind(styles);

// 현재 어떤 컨텐츠가 active 인지 알아야함. Register는
class Register extends Component{
  constructor(props){
    super(props);
    this.state ={
      currentSlide: 0
    }
  }

  handleNextButton = () => {
    this.setState({
      currentSlide : this.state.currentSlide+1 // 현재 state에서 +1
    })
  }

  render(){
    const { currentSlide } = this.state;
    return(
      <Fragment>
        <div className={cx('slide-container')}>
          <RegisterAnimationBars currentSlide={currentSlide}/>
          <CarouselContainer 
            currentSlide={currentSlide}
            handleNextButton={this.handleNextButton}
           />
        </div>
      </Fragment>
    )
  }
}

export default Register;