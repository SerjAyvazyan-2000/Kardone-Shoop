import "./style.scss"
import {useState} from "react";

const Counter = ({button,onClick,buttonText,handleClickPlus,handleClickMinus,count}) => {



    return <div className="counter-box">
        <div className="counter-tools">
            <span onClick={handleClickPlus} className="icon-plus"></span>
            <p>{count}</p>
            <span onClick={handleClickMinus} className="icon-minus"></span>
        </div>
        {button ?
            <div className="counter-save">
                <button onClick={onClick}>{buttonText ? "Is in the cart thanqs" : "Add to Cart"}</button>
            </div>

        : null}

    </div>
}
export default Counter