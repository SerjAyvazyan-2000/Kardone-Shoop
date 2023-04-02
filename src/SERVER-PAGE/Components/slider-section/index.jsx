import "./style.scss"
import {NavLink} from "react-router-dom";

const SliderSection = ({item,buttonName}) => {

    return <div>
        <div className="slider-image">
            <img src={item.img} alt=""/>
            <div className="slider-title">
                <p>{item.title}</p>
                <h3>{item.description}</h3>
                <p>{item.road}</p>
                <NavLink to={"/home"}>
                    {buttonName}
                </NavLink>
            </div>
        </div>
    </div>
}
export default SliderSection