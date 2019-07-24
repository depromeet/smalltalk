import axios from 'axios'; 
const API = 'http://travel-dev.ap-northeast-2.elasticbeanstalk.com'

const TAGS_REQUEST_SUCCESS = 'user/TAGS_REQUEST_SUCCESS'; 
const TAGS_REQUEST_FAILURE = 'user/TAGS_REQUEST_FAILURE'; 

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

export const tagsSetRequset = tags => (dispatch, getState) => { 
  // 토큰이랑 같이 header 설정 후 보내기 
  //(1) localStoarge에서 token 가져오기 
  //const token = localStorage.getItem('token');
  const token = getState().auth.token;
  console.log(token);
  const config = {
    headers: {
      "Content-Type": "application/json "
    }
  }
  if(token){
    config.headers["Authorization"]= `Token ${token}`
    return axios.put(`${API}/auth/info/`, tags, config) 
    .then( res => {
      // 여행 스타일 태그 요청 성공했을 때 isTagsSet : false -> true
      dispatch(tagsSuccess());
    }).catch(error => {
      // 실패했을 때. 
      dispatch(tagsFailure());
    })
    }
}

const initialState = {
  isTagsSet : false
} 

export default function user(state = initialState, action){
  switch (action.type) {
    case TAGS_REQUEST_SUCCESS:
      return {
        ...state,
        isTagsSet : true
      }
      case TAGS_REQUEST_SUCCESS:
      return {
        ...state,
        isTagsSet : false
      }
    default:
      return state;
  }
}