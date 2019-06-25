import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames/bind';
import styles from './Bar.module.scss';
const cx = classnames.bind(styles); 

const setBackColor = index => {
  if(index=== 1){
    return "#fb3e1d";
  }else if(index=== 2){
    return "white"
  }else if(index===3){
    return "#e1ff01";
  }
}

const setFontColor = index => {
  if(index === 1){
    return "white";
  }else {
    return "#fb3e1d";
  }
}

const moveToLeft = keyframes`
 from {
   transform : translateX(0px); 
 }
 to {
   transform : translateX(-300px);
 }
`

const StyledBar = styled.div`
  width: 55px;
  height: 100%;
  background-color: ${props => setBackColor(props.index)}
  color: ${props => setFontColor(props.index)}
  font-weight: 300;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: center;
  padding-right: 20px;
`

class Bar extends Component {
  render(){
    // console.log(this.props.currentSlide);
    const { step, index, currentSlide } = this.props;
    return(
      <StyledBar
        index={index}
        currentSlide={currentSlide}
      >
        <p> {step} </p>
      </StyledBar>
    )
  }
}

export default Bar;