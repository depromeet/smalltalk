import { createAction, handleActions } from 'redux-actions'; 
import produce from 'immer';
import axios from 'axios';

// const CHANGE_REGISTER_FORM = 'auth/CHANGE_REGISTER_FORM'; 
// // 액션 생성자
// export const changeRegisterForm = createAction(
//   CHANGE_REGISTER_FORM // { registerForm: {email, password, nickname, gender, age, shortBio}}
// ) 

const AUTH_REGISTER = 'auth/AUTH_REGISTER'
const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE'; 

const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'
export function registerRequest(values){
  const { email, password, nickname, age, sex, shortBio } = values; 
  console.log(values);
  return (dispatch) => {
    dispatch(register()); 
    return axios.post("http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/register/",{email, password,age,nickname})
    .then( response => {
      dispatch(registerSuccess());
    }).catch( error => { 
      console.error(error);
      // dispatch(registerFailure(error.response.data.code));
    })
  };
}

// 액션 생성자. 이렇게 type만 있는 객체는 무슨 역할..? : 액션 객체를 reducer로 전달하면  
// 해당 type에 맞게 reducer가 state를 변경함 
export function register(){
  return {
    type : AUTH_REGISTER
  }
} 

export function registerSuccess(){
  return {
    type : AUTH_REGISTER_SUCCESS
  }
} 

export function registerFailure(error){
  return {
    type : AUTH_REGISTER_FAILURE,
    error
  }
}

const initialState = {
  register : {
    status : 'INIT',
    error : -1
  }
}

export default function authentication(state = initialState, action){
  switch (action.type) {
    case AUTH_REGISTER:
      return {
        ...state, 
        register : {
          status : 'WAITING',
          error : -1
        }
      };
      case AUTH_REGISTER_SUCCESS: 
        return {
          ...state, 
          register : {
            ...state.register,
            status : 'SUCCESS'
          }
        };
      case AUTH_REGISTER_FAILURE: 
        return {
          ...state,
          register: {
            status : 'FAILURE',
            error : action.error
          }
        }
    default: 
      return state;
  }
}

// 리듀서 (initialState를 state로 가짐, action.payload.)
// export default handleActions({
//   [AUTH_REGISTER]: (state, action) => {
//     const { 
//       payload: { name, value }
//     } = action; 
//     return produce(state, draft => {
//       draft.registerForm[name] = value;
//     })
//   }
// }, initialState); 

