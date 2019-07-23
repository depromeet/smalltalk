import axios from 'axios';

export function getAPOD(date = '') {
    console.log("친구 정보");
    return axios.get(`http://travel-dev.ap-northeast-2.elasticbeanstalk.com/auth/5/?with_tickets=true${date}`, { headers: { 'Authorization': `Token 320e05edcaf069d234458007c87d028f9c6e195a`, 'Content-Type': `application/json`} });
  };