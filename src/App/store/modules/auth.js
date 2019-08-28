import axios from 'axios';

const AUTH_REGISTER = 'auth/AUTH_REGISTER';
const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE';  

const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

const USER_LOADING = 'auth/USER_LOADING'; 
const USER_LOADED = 'auth/USER_LOAED'; 
const AUTH_ERROR = 'auth/AUTH_ERROR'; 

const TAGS_REQUEST_SUCCESS = 'user/TAGS_REQUEST_SUCCESS'; 
const TAGS_REQUEST_FAILURE = 'user/TAGS_REQUEST_FAILURE'; 

const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'

export function register(){
  return {
    type : AUTH_REGISTER
  }
} 

export function registerSuccess(payload){
  return {
    type : AUTH_REGISTER_SUCCESS,
    payload
  }
} 

export function registerFailure(error){
  return {
    type : AUTH_REGISTER_FAILURE,
    error
  }
} 

export function logOut(){
  return {
    type : AUTH_LOGOUT
  }
}

export function tagsSuccess(){
  return {
    type : TAGS_REQUEST_SUCCESS
  }
}

export function tagsFailure(){
  return {
    type: TAGS_REQUEST_FAILURE
  }
}

export const registerRequest = values => {
  return (dispatch) => {
    dispatch(register()); 
    return axios.post(`${API}/auth/register/`, values)
    .then(res => { 
      localStorage.setItem('token', res.data.token); 
      dispatch(registerSuccess(res.data));
    })
    .catch(error => { 
      if(error.response.data.email){
        //console.log('이미 존재하는 이메일');
        dispatch(registerFailure(1));
      }
      if(error.response.data.non_field_errors){
        let word = error.response.data.non_field_errors[0].slice(0,4);
        if(word==='비밀번호'){
          dispatch(registerFailure(2))
        }
        // console.log(error.response.data.non_field_errors[0].slice(0,3))
      }
      // 비밀번호가 너무 일상적인 단어면 non_fields_error가 나옴 
      // dispatch(registerFailure(error.response.data));
    })
  };
}


export const loadUser = () => (dispatch, getState) =>{
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json "
    }
  }
  if(token){
    config.headers["Authorization"]= `Token ${token}`
    axios.get(`${API}/auth/info/`, config)
    .then(res => {
      //console.log('user-loaded', res.data);
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
} 

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated : localStorage.getItem('token') ? true : false, // true로 바꾸면 됨
  // isTagsSet : false,
  user: {},
  register : {
    step: 0,
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
          },
          token : action.payload.token,
          user: action.payload.user,
          isAuthenticated : true
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
      case AUTH_LOGOUT:
        return {
          ...state,
          user: {},
          isAuthenticated: false,
          token: ''
        }
    default: 
      return state;
  }
}

