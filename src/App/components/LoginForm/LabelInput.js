import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  text-align: left;
  margin-bottom: 24px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  color: black;
`;

const Error = styled.div`
  color: $red;
  font-size: 8px;
  margin-left: 10px;
  padding: 4px 10px;
  margin-bottom: 10px;
  border: 1px solid $red;
  border-radius: 24px;
`;

const Main = styled.div`
  input {
    width: 100%;
    height: 35px;
    border: 0;
    border-bottom: 1px solid red;
  }
  div{
    cursor : pointer;
    position: absolute;
    right: 10px;
    top: 28px;
    background-color: #d3d3d3;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    text-align: center;
    color: white;
    font-size: 10px;
    padding: 0;
  }
`;


const LabelInput = 
  ({label, error, value, resetInput, ...rest}) => {
  return (
    <Container>
      <Header>
        <Label> {label} </Label>
        {
          error ? 
          <Error>{error}</Error>
          :
          null
        }
      </Header>
      <Main>
         <input value={value} {...rest} />
         <div onClick={resetInput}>x</div>
      </Main>
    </Container>
  )
}

export default LabelInput
