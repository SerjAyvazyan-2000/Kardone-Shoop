import React from 'react';
import "./style.scss"

const CostumersInput = ({type,errorText,onchange,nameInput,value,nameText}) => {

    const handleChange = (e) => {
        onchange(e)
    }

    return <label className="costumers-input-box">
        <p>{nameText}</p>
        <input value={value} name={nameInput} onChange={handleChange} type={type} placeholder=''/>
        <p className="form-errorText">{errorText}</p>
    </label>

};

export default CostumersInput;