import "./style.scss"
import {AiFillHome} from "react-icons/ai"
import {SiBmw} from "react-icons/si"
import {GiAutoRepair} from "react-icons/gi"
import {AiFillDashboard} from "react-icons/ai"
import {SiMercedes} from "react-icons/si"
import {SiToyota} from "react-icons/si"
import {SiOpel} from "react-icons/si"
import {GiExitDoor} from "react-icons/gi"
import {NavLink} from "react-router-dom";


const Sidebar = ({navActive}) => {
    return <div className={`navigation ${navActive ? "active" : ''}`}>
         <ul>
             <li>
                 <NavLink>
                     <span className="icon"><GiAutoRepair /></span>
                     <span className="title">Kardone</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink >
                     <span className="icon"><AiFillDashboard/></span>
                     <span className="title">Dashboard</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink>
                     <span className="icon"><SiBmw/></span>
                     <span className="title">BMW</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink>
                     <span className="icon"><SiMercedes/></span>
                     <span className="title">MERCEDES</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink>
                     <span className="icon"><SiToyota/></span>
                     <span className="title">TOYOTA</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink>
                     <span className="icon"><SiOpel/></span>
                     <span className="title">OPEL</span>
                 </NavLink>
             </li>
             <li>
                 <NavLink>
                     <span className="icon"><GiExitDoor/></span>
                     <span className="title">Sign Out</span>
                 </NavLink>
             </li>
         </ul>
    </div>
}
export  default Sidebar