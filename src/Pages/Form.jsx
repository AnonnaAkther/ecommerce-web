import React, { useState } from 'react'
import '../styles/form.css';

function Form(props) {
    const [focused, setFocused] = useState(false);
    const { lable,  onChange, id, ...inputProps } = props;

    const handleFocused = (e)=>{
        setFocused(true)
    }

  return (
    <div className='formInput'>
        <label>{lable}</label>
        <input 
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocused}
        focused={focused.toString()}
        />
    </div>
  )
}

export default Form