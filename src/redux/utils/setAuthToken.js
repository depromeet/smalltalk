import axios from 'axios';

const setAuthToken = token => {
  if(token){
    // 만약 로그인 했으면 모든 요청에 authorization token 부여 
    axios.defaults.headers.common['Authorization'] = token;
  }else{
    delete axios.defaults.headers.common['Authorization'];
  }
}; 

export default setAuthToken;