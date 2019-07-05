// 액션 타입 정의 
const GOTO_NEXT = 'register/GOTO_NEXT';

// 액션 생성자 함수 정의 
export const goToNext = currentStep => ({ type: GOTO_NEXT, currentStep});

const initialState = {
  isMovedLeft : {
    0: false,
    1: false,
    2: false
  }
};  

// 각 컴포넌트별로 이미 보여졌으면 seen : { 0 : true, 1: false,..} 이런 state 를 둬야하나 ? 
export default function register(state= initialState, action){
  switch (action.type) {
    case GOTO_NEXT:
      return {
        ...state,
        isMovedLeft: {
          ...state.isMovedLeft,
          [action.currentStep]: true
        }
      };
    default:
      return state;
  }
}

