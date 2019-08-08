/* useState로 state를 계속 track 할것임 */
import { useState, useEffect } from 'react'; 

const useForm = (callback, validate) => {
  const [values, setValues] = useState({}); // 현재 값
  const [errors, setErrors] = useState({}); // 여기에 현재 error 
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){ 
      // error 가 없을 때 요청
      callback();
    } 
  }, [errors, isSubmitting])


  const handleSubmit = event => {
    if(event) event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
  }
  const handleChange = event => {
    event.persist(); // why ? 
    setValues(values => ({
      ...values, [event.target.name] : event.target.value
      })
    )
  }
  const resetClick = event => {
    event.persist();
    setValues(values => ({
      ...values, [event.target.name] : ''
      })
    )
  }
  return {
    resetClick,
    handleChange,
    handleSubmit,
    values,
    errors
  }
}; 

export default useForm;