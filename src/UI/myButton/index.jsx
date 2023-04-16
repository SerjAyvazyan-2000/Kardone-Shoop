

import "./style.scss"

const MyButton = ({hover,color,bgColor,children,name}) => {

    return <button   className={`my-button ${hover} ${color} ${bgColor} `} >
        {name}
    </button>
}
export default MyButton