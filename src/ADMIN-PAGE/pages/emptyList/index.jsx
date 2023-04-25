
import "./style.scss"
import {NavLink} from "react-router-dom";

const EmptyList = ({productType,routeName,carName,handleClick}) => {

    return <div className="empty-list">
        <h3>Hello, nice to see you!</h3>
        <p>You are now minutes away from creativity than ever before. Enjoy!</p>
        <NavLink to={routeName}
                 className="empty-box"
                  state={{carName}}
         >
            <button onClick={handleClick}>Add New {productType}</button>
            <span className="icon-plus"></span>
        </NavLink>

            {/*<IconLabelButtons*/}
            {/*    onClick={onClick}*/}
            {/*    icon={<AddIcon/>}*/}
            {/*    variant="contained" color="success"*/}
            {/*    text="Create my first campaign"/>*/}



    </div>
}
export default EmptyList