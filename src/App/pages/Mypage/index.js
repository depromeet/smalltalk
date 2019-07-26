import React, { Component } from 'react'
import { connect } from 'react-redux';
import Mypage from 'App/components/Mypage';
import MenuBtn from '../../components/MenuBtn';
import SideMenu from './../../components/Chat/SideMenu';

class MypageContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      user: this.props.user,
      pairs: [
        {
          id: 1,
          0: true,
          1: false,
          value: {
            0: ['계획적', 1],
            1: ['즉흥적', 2]
          }
        },
        {
          id: 2,
          0: false,
          1: true,
          value: {
            0: ['아침형', 3],
            1: ['저녁형', 4]
          }
        },
        {
          id: 3,
          0: true,
          1: false,
          value: {
            0: ['알뜰족', 5],
            1: ['욜로족', 6]
          }
        },
        {
          id: 4,
          0: true,
          1: false,
          value: {
            0: ['뚜벅이', 7],
            1: ['택시파', 8]
          }
        },
        {
          id: 5,
          0: false,
          1: true,
          value: {
            0: ['알콜파', 9],
            1: ['논알콜파', 10]
          }
        },
        {
          id: 6,
          0: true,
          1: false,
          value: {
            0: ['호텔파', 11],
            1: ['게스트하우스파', 12]
          }
        },
        {
          id: 7,
          0: true,
          1: false,
          value: {
            0: ['맛집투어', 13],
            1: ['쇼핑투어', 14]
          }
        },
        {
          id: 8,
          0: false,
          1: true,
          value: {
            0: ['관광파', 15],
            1: ['액티브파', 16]
          }
        },
        {
          id: 9,
          0: true,
          1: false,
          value: {
            0: ['예술투어', 17],
            1: ['휴양족', 18]
          }
        }
      ]
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.user) {
      this.setState({ user: nextProps.user });
    }
  }

  handleChange = e => {
    this.setState({
      user : {
        ...this.state.user,
        [e.target.name] : e.target.value
      }
    })
  }

  handleStyleCircle = ({pairId, position}) => {
    const copied = [...this.state.pairs];
    copied.forEach(pair => {
      if(pair.id === pairId){
        pair[position] = !pair[position]; 
        if(position === '1'){
          pair['0'] = !pair['0']
        }else if(position === '0'){
          pair['1'] = !pair['1']
        }
      }
    })
     this.setState({ pairs : copied })
  }

  render(){
  const { user, pairs } = this.state;
  // console.log('pages 안', user);
  return (
    <div>
      <SideMenu />
      <MenuBtn barColor = { "#000" } boxHidden = { "block" } />
      <Mypage 
        user={user}
        onChange={this.handleChange}
        pairs={pairs}
        handleStyleCircle={this.handleStyleCircle}
      />
    </div>
  )
  }
}

const mapStateToProps = state => ({
  user : state.auth.user
}); 

export default connect(
  mapStateToProps,
  null
)(MypageContainer)
