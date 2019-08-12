export default function validate(values){
  let errors = {};
  if(!values.email){
    errors.email = '이메일은 필수항목 입니다.'
  }else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = '이메일 형식이 아닙니다.'
  }
  if(!values.password){
    errors.password = '비밀번호는 필수항목 입니다.'
  }else if(values.password.length < 8){
    errors.password = '비밀번호는 최소 8자, 숫자 문자 조합입니다.'
  }
  
  return errors.length > 0 ? errors : null;
}