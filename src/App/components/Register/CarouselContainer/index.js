import React, { Component, Fragment } from 'react'; 
import styled from 'styled-components';
import RegisterStart from './RegisterStart';
import RegisterForm from './RegisterForm';
import RegisterTravelStyles from './RegisterTravelStyles';
import RegisterEnd from './RegisterEnd';

import Carousel from './Carousel';

const Item = styled.div`
//  background : darkorange; 
 position: relative;
 height: 80vh;
`;

class CarouselContainer extends Component {
  render(){
    return(
      <Carousel>
        <Item> dummy </Item>
        <Item> <RegisterStart/> </Item>
        <Item> <RegisterForm/> </Item>
        <Item> <RegisterTravelStyles/> </Item>
        <Item> <RegisterEnd/> </Item>
      </Carousel>
    )
  }
}

export default CarouselContainer;