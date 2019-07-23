import axios from 'axios';

const MOVE_TO_NEXT = 'auth/MOVE_TO_NEXT';

const AUTH_REGISTER = 'auth/AUTH_REGISTER';
const AUTH_REGISTER_SUCCESS = 'auth/AUTH_REGISTER_SUCCESS';
const AUTH_REGISTER_FAILURE = 'auth/AUTH_REGISTER_FAILURE';  

const AUTH_LOGIN = 'auth/AUTH_LOGIN';
const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';

const USER_LOADING = 'auth/USER_LOADING'; 
const USER_LOADED = 'auth/USER_LOAED'; 
const AUTH_ERROR = 'auth/AUTH_ERROR'; 

const TAGS_REQUEST_SUCCESS = 'user/TAGS_REQUEST_SUCCESS'; 
const TAGS_REQUEST_FAILURE = 'user/TAGS_REQUEST_FAILURE'; 

const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'

export function moveToNext(nextNum){
  return {
    type: MOVE_TO_NEXT,
    payload : nextNum
  }
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
      console.log(res);
      dispatch(registerSuccess());
    })
    .catch(error => { 
      if(error.response.data.email){
        console.log('이미 존재하는 이메일');
        dispatch(registerFailure(1));
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
} 

export const loginRequest = (values) => (dispatch) => { 
  const { email, password } = values; 
  return axios.post(`${API}/auth/login/`, {email, password})
    .then((res) => {
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

export const tagsSetRequset = tags => dispatch => {
  return axios.post(`${API}/`, tags) 
  .then( res => {
    // 여행 스타일 태그 요청 성공했을 때 isTagsSet : false -> true
    dispatch(tagsSuccess());
  })
  .catch(error => {
    // 실패했을 때. 
    dispatch(tagsFailure());
  })
}

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated : localStorage.getItem('token') ? true : false, // true로 바꾸면 됨
  isTagsSet : false,
  user: null,
  register : {
    step: 0,
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
    case MOVE_TO_NEXT: 
      return {
        ...state,
        register : {
          ...state.register,
          step: action.payload
        }
      }
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
      case TAGS_REQUEST_SUCCESS: 
        return {
          ...state,
          isTagsSet: true
        }
      case TAGS_REQUEST_FAILURE: 
        return {
          ...state,
          isTagsSet: false
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

