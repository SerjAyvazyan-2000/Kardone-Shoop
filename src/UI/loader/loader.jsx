import React from 'react';
import "./style.scss"

const Loader = () => {
    return <>
        <div className="loader-box">
            <div className="loader"></div>
            <span className="loader-text">Loading...</span>
        </div>

    </>
};
export default Loader;