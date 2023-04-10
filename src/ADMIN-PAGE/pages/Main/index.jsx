import "./style.scss"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import  user from "../../../assets/style/images/logo.png"
import {useState} from "react";
import Sidebar from "../sidebar";
import CardBox from "../cardBox";

const Main = () => {
    const [navActive,setNavActive] = useState(false)
    const burgerClick = () => {
          setNavActive(!navActive)
    }

    return <>
        <Sidebar navActive={navActive} />
        <main className={`admin-main  ${navActive ? "active" : ''}`}>
           <header className="admin-header">
                <div className="toggle">
                  <AiOutlineMenu onClick={burgerClick}/>
                </div>

               {/*Search*/}
               <div className="search">
                   <label htmlFor="">
                       <input type="text" placeholder="Search here"/>
                       <AiOutlineSearch/>
                   </label>
               </div>
               {/*userImg*/}
               <div className="user">
                   <img src={user} alt=""/>
               </div>
           </header>
   <CardBox/>

    </main>
        </>
}
export default Main