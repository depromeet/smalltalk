import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
 width: 100px;
 height: 100px;
 background-color: ${props => props.state ? `#fb3e1d` : `#efefef`};
 color : ${props => props.state ? `white` : `black`};
 border-radius: 50%;
 margin-right: 7px;
 text-align : center;
 padding-top : 42px;
 &:hover{
  background-color: #fd9e8d;
  color: white;
 }
`
const StyleCircle = ({
  pair,
  state,
  position,
  value,
  pairId,
  handleClick
  }) => {
    // console.log(pair[position]);
  return (
    <Circle 
      state={pair[position]} 
      onClick={() => handleClick({pairId, position})}>
      {value}
    </Circle>
  )
}

export default StyleCircle;