import { combineReducers } from 'redux';
import register from './register'; 
import auth from './auth';
import schedule from './schedule';
export default combineReducers({
  register,
  auth,
  schedule
})