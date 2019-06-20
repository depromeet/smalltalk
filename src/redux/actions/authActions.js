// 데이터 요청을 action에서 하나 ? 

import axios from 'axios'; 
import setAuthToken from '../utils/setAuthToken'; 
import jwt_decode from 'jwt_decode'; 

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from './actionTypes';  

/* userData는 email, pw, nickname, 자기소개 등 */
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
  .then(res => history.push('/login'))
  .catch(err => {
    type: GET_ERRORS,
    payloadL err.response.data
  })
}