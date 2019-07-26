const GET_CITY_LIST = 'common/GET_CITY_LIST';

const initialState = {
  cityList : []
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

