import React, { Component, Fragment } from 'react'; 
import styled from 'styled-components';

const CarouselBox = styled.div`
 display: flex;
 margin: 0 0 0px 0px;
 transition: ${props => props.sliding ? 'none': 'transform 1s ease'};
 transform : ${props => {
   if(!props.sliding) return 'translateX(calc(-100%))'
   return 'translateX(0%)'
 }};
`;

const CarouselSlot = styled.div`
 flex: 1 0 100%;
 margin-right : 0px;
 order: ${props => props.order};
 height: 80vh;
 
`;

const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  overflow: hidden;
  margin: 100px 100px 0px 100px;
  
`

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state={
      position: 0,
      sliding: false
    }
  }

  doSliding = position => {
    this.setState({
      sliding : true
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50);
  }

  getOrder(itemIndex){
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state;
    const { children } = this.props; 
    const numItems = children.length || 1;

    this.setState({
      position : position === numItems-1 ? 0 : position+1
    })
    this.doSliding(position === numItems - 1 ? 0 : position + 1);
  }
  render() {
    const { title, children } = this.props
    console.log(children);
    return (
      <div>
        <Wrapper>
          <CarouselBox 
            sliding={this.state.sliding}
          >
              { children.map((child, index) => (
                <CarouselSlot
                  key={index}
                  order={this.getOrder(index)}
                >
                {child}
                </CarouselSlot>
              ))}
          </CarouselBox>
          <button onClick={() => this.nextSlide()}>Next</button>
        </Wrapper>
        
      </div>
    )
  }
}

export default Carousel;