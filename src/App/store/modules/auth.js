import { createAction, handleActions } from 'redux-actions'; 
import produce from 'immer';

const CHANGE_REGISTER_FORM = 'auth/CHANGE_REGISTER_FORM'; 
// 액션 생성자
export const changeRegisterForm = createAction(
  CHANGE_REGISTER_FORM // { registerForm: {email, password, nickname, gender, age, shortBio}}
) 

const initialState = {
  registerForm : {
    email: '',
    password: '',
    nickname: '',
    gender: '',
    age: 0,
    shortBio: ''
  },
  error: null
}

// 리듀서 (initialState를 state로 가짐, action.payload.)
export default handleActions({
  [CHANGE_REGISTER_FORM]: (state, action) => {
    const { 
      payload: { name, value }
    } = action; 
    return produce(state, draft => {
      draft.registerForm[name] = value;
    })
  }
}, initialState); 

