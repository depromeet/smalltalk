import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterTemplate } from 'App/components/Register/RegisterTemplate';
import { goToNext } from 'App/store/modules/register'; 

class RegisterContainer extends Component{

  handleClick = currentStep => {
    const { goToNext } = this.props; 
    goToNext(currentStep);
  }

  render(){
    const { isMovedLeft } = this.props;
    return (
    <RegisterTemplate
      isMovedLeft={isMovedLeft}
      nextBtnClick={this.handleClick}
    />
    )
  }
}

const mapStateToProps = state => ({
  isMovedLeft : state.register.isMovedLeft
}); 

const mapDispatchToProps = dispatch => ({
  goToNext: nextStep => dispatch(goToNext(nextStep)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);