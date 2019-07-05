import { createAction, handleActions } from 'redux-actions'; 
import produce from 'immer';
import axios from 'axios';

const AUTH_REGISTER = 'auth/AUTH_REGISTER'
const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE';  

const USER_LOADING = 'auth/USER_LOADING'; 
const USER_LOADED = 'auth/USER_LOAED'; 
const AUTH_ERROR = 'auth/AUTH_ERROR'; 

// const MESSAGE

const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'

export const registerRequest = values => {
  const { email, password, nickname, age, sex, shortBio } = values; 
  console.log(values);
  return (dispatch) => {
    dispatch(register()); 
    return axios.post(`${API}/auth/register/`, {email, password,age,nickname})
    .then(response => {
      dispatch(registerSuccess());
    })
    .catch(error => { 
      console.error(error);
      // dispatch(registerFailure(error.response.data.code));
    })
  };
}

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
// user 정보 받을 액션
export const loadUser = () => (dispatch, getState) =>{
  dispatch({ type: USER_LOADING });
  // 위의 requestRegister엔 왜 return 을 썼을까 
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json "
    }
  }
  if(token){
    config.headers["Authentication"]= `Token ${token}`
  }
  axios.get(`${API}/auth/user`, config)
  .then(res => {
    dispatch({ 
      type: USER_LOADED,
      payload : res.data
    })
  })
  .catch(err => { 
    // 에러 메세지 처리 action 
    dispatch({ 
      type : AUTH_ERROR
    })
  })
}

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated : null, 
  isLoading: false, // login loading이라고 따로 객체를 만드는게 낫나? 
  user: null,
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
        };
      case USER_LOADING: 
        return {
          ...state,
          isLoading: true
        }
      case USER_LOADED: 
        return {
          ...state,
          isLoading: false,
          isAuthenticated : true,
          user: action.payload
        }
      case AUTH_ERROR: 
        localStorage.removeItem('token')
        return {
          ...state,
          isLoading : false,
          isAuthenticated: false,
          user: null,
          token: null
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

