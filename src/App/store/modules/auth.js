import axios from 'axios';

const AUTH_REGISTER = 'auth/AUTH_REGISTER';
const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE';  

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';

const USER_LOADING = 'auth/USER_LOADING'; 
const USER_LOADED = 'auth/USER_LOAED'; 
const AUTH_ERROR = 'auth/AUTH_ERROR'; 

// const MESSAGE

const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'

export const registerRequest = values => {
  // console.log(values);
  return (dispatch) => {
    dispatch(register()); 
    return axios.post(`${API}/auth/register/`, values)
    .then(res => { 
      console.log(res);
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
// 제일 처음 토큰을 보내고, login되어 있으면 메인, 아니면 start 페이지 보여주게 확인 
export const loadUser = () => (dispatch, getState) =>{
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json "
    }
  }
  if(token){
    config.headers["Authorization"]= `Token ${token}`
    axios.get(`${API}/auth/1/`, config)
    .then(res => {
      dispatch({ 
        type: USER_LOADED,
        payload : res.data
      })
    })
    .catch(err => { 
      // 토큰 있어서 요청했지만 오류난 상태
      localStorage.removeItem('token');
      dispatch({ 
        type : AUTH_ERROR
      })
      console.log(err);
    })
    }
    console.log(config); 
} 

export const loginRequest = (values) => (dispatch) => { 
  const { email, password } = values; 
  return axios.post(`${API}/auth/login/`, {email, password})
    .then((res) => {
      // console.log(res.data.token); 
      localStorage.setItem('token', res.data.token); 
      dispatch({ type: AUTH_LOGIN_SUCCESS })
    }).catch( err => { 
      const err_msg = err.response.data;
      if(err_msg){
        if(err_msg["non_field_errors"]){
          dispatch({ type: AUTH_LOGIN_FAILURE, payload : 2 });
        }else if(err_msg['password'] && err_msg['email']){
          dispatch({type: AUTH_LOGIN_FAILURE, payload : 0})
        }else{
          dispatch({type: AUTH_LOGIN_FAILURE, payload: 1})
        }
        console.log(err.response.data);
      }
    })
}

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated : localStorage.getItem('token') ? true : false, // true로 바꾸면 됨
  // isLoading: false,
  user: null,
  register : {
    status : 'INIT',
    error : -1
  },
  login :{
    status: 'INIT',
    error: -1
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
          // isLoading: true
          login : {
            ...state.login,
            status: 'WAITING'
          }
        }
      case USER_LOADED: 
        return {
          ...state,
          login : {
            ...state.login,
            status: 'SUCCESS'
          },
          isAuthenticated : true,
          user: action.payload
        }
      case AUTH_ERROR: 
        // localStorage.removeItem('token')
        return {
          ...state,
          login: {
            ...state.login,
            status : 'FAILURE',
            error : 1
          },
          isAuthenticated: false,
          user: null,
          token: null
        }
      case AUTH_LOGIN: 
        return {
          ...state,
          login: {
            ...state.login,
            status: 'WAITING'
          }
        }
      case AUTH_LOGIN_SUCCESS: 
        // localStorage.setItem('token', action.payload)
        return {
          ...state,
          isAuthenticated: true,
          // token..? 
          login: {
            status: 'SUCCESS',
          }
        }
      case AUTH_LOGIN_FAILURE: 
        return {
          ...state,
          login : {
            status : "FAILURE",
            error : action.payload
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

