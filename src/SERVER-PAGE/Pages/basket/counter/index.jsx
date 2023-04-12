import "./style.scss"
import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClickPlus = () => {
        setCount(count + 1)
    }
    const handleClickMinus = () => {
        if (count !== 0) {
            setCount(count - 1)

        }
    }

    return <div className="counter-box">
        <div className="counter-tools">
            <span onClick={handleClickPlus} className="icon-plus"></span>
            <p>{count}</p>
            <span onClick={handleClickMinus} className="icon-minus"></span>
        </div>
    </div>
}
export default Counter