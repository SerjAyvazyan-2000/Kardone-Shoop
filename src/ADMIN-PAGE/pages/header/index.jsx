import "./style.scss"
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import user from "../../../assets/style/images/logo.png";

const Header = ({setNavActive,navActive}) => {
    const burgerClick = () => {
        setNavActive(!navActive)
    }
    return <header className="admin-header">
        <div className="toggle">
            <AiOutlineMenu onClick={burgerClick}/>
        </div>

        {/*Search*/}
        <div className="search">
            <label htmlFor="">
                <input onChange={()=>(alert("Search is in Process Sorry)"))} type="text" placeholder="Search here"/>
                <AiOutlineSearch/>
            </label>
        </div>
        {/*userImg*/}
        <div className="user">
            <img src={user} alt=""/>
        </div>
    </header>
}
export default Header