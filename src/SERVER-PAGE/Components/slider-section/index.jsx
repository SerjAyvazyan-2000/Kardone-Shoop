import "./style.scss"
import {NavLink} from "react-router-dom";
import MyButton from "../../../UI/myButton";

const SliderSection = ({item,buttonName}) => {

    return<div className="slider-image G-image" style={{backgroundImage:`url(${item.img})`}}>
            <div className="slider-title">
                <p>{item.title}</p>
                <h3>{item.description}</h3>
                <p>{item.road}</p>
                <MyButton
                    name={"Read More"}
                    color={"white"}
                    hover={"black"}
                    bgColor={"red"}
                />
            </div>
    </div>
}
export default SliderSection