import React from 'react';
import "./style.scss"

const CostumersInput = ({name,type,errorText}) => {

    return <label className="costumers-input-box">

        <p>{name}</p>
        <input type={type} placeholder=""/>
        {/*<p className="form-errorText">{errorText}sss</p>*/}
    </label>

};

export default CostumersInput;