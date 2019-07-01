import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RegisterTemplate } from 'App/components/Register/RegisterTemplate';
import * as registerActions from 'App/store/modules/register';
import * as authActions from 'App/store/modules/auth';

class RegisterContainer extends Component{

  handleClick = currentStep => {
    const { RegisterActions } = this.props; 
    RegisterActions.goToNext(currentStep);
  }
  // 액션 생성자 함수에 실제 user가 interaction하는 값을 넣어줌.
  onFormChange = (e) => { 
    const { value, name } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeRegisterForm({
      name,
      value
    }); 
    // 왜 AuthActions를 부르고, 이건 뭐지? 
    // 특정 모듈 안의 action 생성자를 다 가져왔고 이를 bindActionCreator를 이용해서 dispatch 함수랑 바인딩 시킴 
    // 그 후 그 안의 action 생성자 함수를 사용
  }

  render(){
    const { onFormChange } = this
    const { isMovedLeft } = this.props;
    return (
    <RegisterTemplate
      isMovedLeft={isMovedLeft}
      nextBtnClick={this.handleClick}
      onFormChange={onFormChange}
    />
    )
  }
}

// const mapStateToProps = state => ({
//   isMovedLeft : state.register.isMovedLeft
// }); 
// // 액션함수를 정의할 땐
// const mapDispatchToProps = dispatch => ({
//   goToNext: currentStep => dispatch(goToNext(currentStep)), // props로 사용할 함수
//   changeRegisterForm: (name, value) => dispatch(changeRegisterForm(name,value))
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RegisterContainer);

export default connect(
  (state) => ({
    isMovedLeft : state.register.isMovedLeft
  }),
  (dispatch) => ({
    RegisterActions : bindActionCreators(registerActions, dispatch),
    AuthActions : bindActionCreators(authActions, dispatch)
  })
)(RegisterContainer);