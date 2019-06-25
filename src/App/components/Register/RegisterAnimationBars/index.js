import React, { Component, Fragment } from 'react';
import Bar from './Bar';
import classnames from 'classnames/bind';
import styles from './RegisterAnimationBars.module.scss';
const cx = classnames.bind(styles); 

// currentSlide : 0,1,2,3 
class RegisterAnimationBars extends Component {
  render(){
    const { currentSlide } = this.props;
    return(
      <div className={cx('bar__container')}>
        {['STEP 1', 'STEP 2', 'FIN'].map( (step, index) => {
          console.log(step);
          return <Bar 
            step={step} 
            index={index+1}
            currentSlide={currentSlide}
            key={`bar-${index+1}`}
            />
        }
        )}
      </div>
    )
  }
}

export default RegisterAnimationBars;