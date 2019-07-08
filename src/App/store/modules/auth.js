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
// 제일 처음 들어왔을 떄 에러를 어떻게 처리해야하지? 
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
    config.headers["Authorization"]= `Token ${token}`
  }
  console.log(config);
  axios.get(`${API}/auth/1/`, config)
  .then(res => {
    dispatch({ 
      type: USER_LOADED,
      payload : res.data
    })
  })
  .catch(err => { 
    dispatch({ 
      type : AUTH_ERROR
    })
    console.log(err);
  })
} 

export const loginRequest = (values) => (dispatch) => { 
  const { email, password } = values; 
  /*
   1. AUTH_LOGIN 
   login : { status : 'INIT' } -> { status : 'WAITING }
   axios.post('API', {email, password})
   2. AUTH_SUCCESS 
   login : { status : 'WAITING" } => {status : 'SUCCESS'}
   localStorage.setItem('token', res.data.token)
   자동으로 넘어가나
   3. AUTH_FAILURE 
   login : { status : 'WAITING' } -> {status : 'FAILURE'}
   error 메세지 출력.
   */
  // 이메일, 비밀번호 보내기 (1) AUTH_LOGIN 
  // 보내고 localStorage에 저장하기 (2)
  dispatch({ type: AUTH_LOGIN }); 
  return axios.post(`${API}/auth/login/`, {email, password})
  .then((res) => {
    // console.log(res.data.token); 
    localStorage.setItem('token', res.data.token); 
    dispatch({ type: AUTH_LOGIN_SUCCESS })
  }).catch( err => {
    dispatch({type: AUTH_LOGIN_FAILURE});
    console.log(err);
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
        localStorage.removeItem('token')
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
            status : "FAILURE"
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

