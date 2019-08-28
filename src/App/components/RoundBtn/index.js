import React from 'react'
import styled from 'styled-components';

const Button = styled.div`
 background-color : ${props => props.backColor ? props.backColor : null};
 background-image: ${props => props.backImage};
 width : ${props => props.width};
 color : ${props => props.color ? props.color : 'white'};
 height : 35px;
 cursor : pointer;
 border: 0;
 border-radius: 29px;
 font-size : 14px;
 font-weight : 500;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom : 10px;
 img {
   height : 28px;
   margin-right : 3px;
 }
`;
const RoundBtn = ({value, onClick, src, ...rest }) => {
  return (
    <Button 
      onClick={onClick}
      {...rest}
    >
      {
        src ? 
        <img src={src} />
        :
        null
      }
      {value}
    </Button>
  )
}

export default RoundBtn
