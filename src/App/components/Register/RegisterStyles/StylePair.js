import React from 'react';
import styled from 'styled-components';
import StyleCircle from './StyleCircle';
// state 여야함. 바뀌어야 하니까

const Pair = styled.div`
 display: flex;
 margin-bottom : 10px;
`

const StylePair = ({pair, handleStyleCircle}) => {
  /*
  {
    id: 3,
    0: true,
    1: false,
    value: {
      0: '계획적',
      1: '즉흥적'
    }
  }
  */
  return (
    <Pair>
      <StyleCircle 
        pair={pair}
        position='0'
        value={pair.value[0]}
        pairId={pair.id}
        handleClick={handleStyleCircle}
      />
      <StyleCircle 
        pair={pair}
        position='1'
        value={pair.value[1]}
        pairId={pair.id}
        handleClick={handleStyleCircle}
      />
    </Pair>
  )
}

export default StylePair;