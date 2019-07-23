
/* 
 1. 여행지 설정할 때, 여행 국가 이름, 날짜 설정 후 완료하면 위의 목록에 추가됨 .
 2. 여행이 스케쥴 완료되면 서버로 submit
*/ 

const SCHEDULE_ADD_SPOT = 'schedule/SCHEDULE_ADD_SPOT';

const initialState = {
  travelList : []
} 

export function addSpot(spotInfo){
  console.log(spotInfo);
  return {
    type: SCHEDULE_ADD_SPOT,
    payload: spotInfo
  }
}

export default function schedule(state= initialState, action){
  switch (action.type) {
    case SCHEDULE_ADD_SPOT:
      return {
        ...state,
        travelList : [...state.travelList, action.payload]
      }
  
    default:
      return state;
  }
}

