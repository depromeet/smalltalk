import axios from 'axios';
/**
login 요청
*/
const API = 'http://localhost:3231';
export const loginRequest = form => (
  axios.post(`${API}/auth/register/`, form))
  
