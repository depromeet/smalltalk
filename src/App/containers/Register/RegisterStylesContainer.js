import React, { Component } from 'react';
import { RegisterStyles } from 'App/components/Register/RegisterStyles';
import { connect } from 'react-redux';
import * as userAction from 'App/store/modules/user';

class RegisterStylesContainer extends Component{

  nextBtnClick = (tags) => {
    // tags 받아서 redux에 있는 setTagsRequest 요청하고 
    // 성공하면 this.props.handleNextBtn(2)
    const { handleNextBtn, tagsSetRequest } = this.props;
    // return tagsSetRequest(tags)
    // .then(() => {
    //   console.log('성공쓰')
    //   handleNextBtn(2)
    // })
    handleNextBtn(2);
  }

  render(){
    const { isMovedLeft, handlePrevBtn } = this.props; 
    return (
    <RegisterStyles
      isMovedLeft = {isMovedLeft}
      nextBtnClick = {this.nextBtnClick}
      handlePrevBtn={handlePrevBtn}
    />
    )
  }
}

// const mapStateToProps = state => ({
//   status : state.auth.register.status,
//   registerError : state.auth.register.error
// }); 

const mapDispatchToProps = dispatch => ({
  tagsSetRequest : (tags) => dispatch(userAction.tagsSetRequset(tags))
  // registerRequest: ({ email, password, nickname, gender, age, introduction }) => 
  // dispatch(authAction.registerRequest({ email, password, nickname, gender, age, introduction })),
})

export default connect(
  null,
  mapDispatchToProps
)(RegisterStylesContainer);

