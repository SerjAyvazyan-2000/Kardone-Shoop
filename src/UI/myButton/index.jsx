

import "./style.scss"

const MyButton = ({hover,color,bgColor,children,name ,onClick}) => {

    return <button onClick={onClick}  className={`my-button ${hover} ${color} ${bgColor} `} >
        {name}
    </button>
}
export default MyButton