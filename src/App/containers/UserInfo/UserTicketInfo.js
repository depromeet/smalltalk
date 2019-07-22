import axios from 'axios';

export function getAPOD(date = '') {
    console.log("Ticket 정보");
    return axios.get(`http://travel-dev.ap-northeast-2.elasticbeanstalk.com/travelinfo/ticket/${date}`, { headers: { 'Authorization': `Token 320e05edcaf069d234458007c87d028f9c6e195a`, 'Content-Type': `application/json`} });
  };