import "./style.scss"
import {NavLink} from "react-router-dom";

const SliderSection = ({item,buttonName}) => {

    return<div className="slider-image G-image" style={{backgroundImage:`url(${item.img})`}}>
            <div className="slider-title">
                <p>{item.title}</p>
                <h3>{item.description}</h3>
                <p>{item.road}</p>
                <NavLink to={"/home"}>
                    {buttonName}
                </NavLink>
            </div>
    </div>
}
export default SliderSection