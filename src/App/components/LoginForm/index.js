import React from 'react';
import useForm from './useForm';
import validate from './LoginFormValidationRules';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import google from 'images/google.png';
import classnames from 'classnames/bind';
import styles from './LoginForm.module.scss'; 
import * as authAction from 'App/store/modules/auth';
const cx = classnames.bind(styles);

const LoginForm = ({isAuthenticated,loginRequest}) => {
  const { 
   values,
   resetClick,
   handleChange,
   handleSubmit,
   errors
  } = useForm(login, validate); 

  function login(){
    console.log('validation 에러 없고 요청 고고');
    loginRequest(values)
  }
  if(isAuthenticated){
    return <Redirect to="/" />;
  }

  return(
      <div className={cx('login__container')}>
        <div className={cx('login__header')}>
          <h1 className={cx('login__title')}> Log in </h1>
          <p className={cx('login__info')}> 아직 스몰토크의 친구가 아니신가요? </p>
          <p className={cx('login__info')}> 세계인의 친구가 되어보세요! </p>
        </div>
        <form onSubmit={handleSubmit} className={cx('login__form')} noValidate>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}> Email </label>
            {errors.email && <p> {errors.email} </p>}
            <input
              className={cx('login__input')}
              type="text"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <button
              className={cx('login__input-x')}
              onClick={resetClick}
              name="email"> x
            </button>
          </div>
          <div className={cx('login__input-container')}>
            <label className={cx('login__input-label')}>Password</label>
            <div> 
              {errors.password && <p> {errors.password} </p>}
            </div>
            <input
              className={cx('login__input')}
              type="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <div
             className={cx('login__input-x')}
            //  onClick={this.resetInputClick}
             name="password"
             > x</div>
          </div>
          <input
            className={cx('login__button', 'normal')}
            type="submit"
            value="로그인하기"
            // onSubmit={handleSubmit}
          />
          <div className={cx('button__container')}>
            <div className={cx('column')}>
              <img className={cx('google-img')} src={google} alt="google"/>
            </div>
              <input
                className={cx('login__button','google')}
                type="submit"
                value="구글로 시작하기"
                // onSubmit={this.handleSubmit}
              />
          </div>
        </form>
      </div>
  )
}
// export default LoginForm;
const mapStateToProps = state => ({
  // status : state.auth.login.status,
  // error : state.auth.login.error,
  isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  loginRequest : ( value ) => dispatch(authAction.loginRequest(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

// class LoginForm extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   handleInputChange = event => {
//     const { target: { value, name } } = event
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = event => {
//     console.log('clicked');
//     event.preventDefault(); 
//     const { loginRequest } = this.props; 
//     const { email, password } = this.state; 
//     loginRequest({email, password})
//     .then(
//       () => {
//         if(this.props.status === 'SUCCESS'){
//           console.log('successfully logged in');
//           // this.props.history.push('/')
//           // 메인페이지로 이동
//         }else if(this.props.status === 'FAILURE'){
//           console.log('log in fail');
//            this.setState({
//             password : ''
//           })
//         }
//       }
//     )
//   }

//   resetInputClick = (e) => {
//     const target = e.target.getAttribute('name');
//     this.setState({[target]:''})
//   }
//   // makeErrMsg = (name) => ({
//   //     0: `${name}은 필수항목입니다.`,
//   //     2: `${name}을(를) 다시 확인하세요!`
//   //   })

//   render(){
//     if (this.props.isAuthenticated) {
//       return <Redirect to="/" />;
//     }
    
//     return(
//       <div className={cx('login__container')}>
//         <div className={cx('login__header')}>
//           <h1 className={cx('login__title')}> Log in </h1>
//           <p className={cx('login__info')}> 아직 스몰토크의 친구가 아니신가요? </p>
//           <p className={cx('login__info')}> 세계인의 친구가 되어보세요! </p>
//         </div>
//         <form onSubmit={handleSubmit} className={cx('login__form')}>
//           <div className={cx('login__input-container')}>
//             <label className={cx('login__input-label')}> Email </label>
//             <div> 
//               {/* {typeof(this.props.error) === 'object' && this.props.error.email ? `${this.props.error.email[0]}` : ""} 
//               {this.makeErrMsg('이메일')[this.props.error]} */} 
//               {/* {errors.email} */}
//             </div>
//             <input
//               className={cx('login__input')}
//               type="text"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               required
//             />
//             <div 
//               className={cx('login__input-x')}
//               onClick={this.resetInputClick}
//               name="email"
//             >x</div>
//           </div>
//           <div className={cx('login__input-container')}>
//             <label className={cx('login__input-label')}>Password</label>
//             <div> 
//               {/* {
//                 typeof(this.props.error) === 'object' && this.props.error["non_field_errors"] ?
//                 `${this.props.error["non_field_errors"][0]}` 
//                 : ""
//               } 
//               {this.makeErrMsg('비밀번호')[this.props.error]} */}
//               {/* {errors.password} */}
//             </div>
//             <input
//               className={cx('login__input')}
//               type="password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//               required
//             />
//             <div
//              className={cx('login__input-x')}
//              onClick={this.resetInputClick}
//              name="password"
//              > x</div>
//           </div>
//           <div
//             className={cx('login__button', 'normal')}
//             type="submit"
//             value="로그인하기"
//             onClick={this.handleSubmit}
//           />
//           <div className={cx('button__container')}>
//             <div className={cx('column')}>
//               <img className={cx('google-img')} src={google} alt="google"/>
//             </div>
//               <input
//                 className={cx('login__button','google')}
//                 type="submit"
//                 value="구글로 시작하기"
//                 onSubmit={this.handleSubmit}
//               />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

