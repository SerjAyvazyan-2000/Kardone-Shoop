import React from 'react';
import "./style.scss"

const MyInput = ({type,errorText,onchange,nameInput,value,nameText,placeholder}) => {

    const handleChange = (e) => {
        onchange(e)
    }

    return <label className="costumers-input-box">
        <p>{nameText}</p>
        <input value={value} name={nameInput} onChange={handleChange} type={type} placeholder={placeholder}/>
        <p className="form-errorText">{errorText}</p>
    </label>

};

export default MyInput;