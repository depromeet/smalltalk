import React, { Component } from 'react'
import { connect } from 'react-redux';
import Mypage from 'App/components/Mypage';

class MypageContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      user: this.props.user
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
  render(){
  const { user } = this.state;
  return (
    <div>
      <Mypage 
        user={user}
        onChange={this.handleChange}
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
