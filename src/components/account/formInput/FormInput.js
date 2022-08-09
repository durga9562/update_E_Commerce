import "./FormInput.css";
import React, { useState } from 'react'


function FormInput(props) {

const [focused,setFocused] = useState(false);
const {label, errorMessage,onChange,onClick,id,...inputProps} = props;

const handleFocus = (e) => {
    setFocused(true);
}


  return (
    <div className='loginFormInput'>
<label className='loginLable'>{label}</label>
<input {...inputProps} onChange={onChange} 
onBlur={handleFocus} 
focused={focused.toString()} className="loginInput"
onFocus={()=> inputProps.name==="Password" && setFocused(true)}/>
<span className='loginSpan'>{errorMessage}</span>
    </div>
  )
}

export default FormInput;