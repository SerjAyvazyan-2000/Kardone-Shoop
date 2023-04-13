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
import React from "react";


const Sidebar = ({navActive}) => {
    return <div className={`sidebar-container ${navActive ? "active" : ''}`}>
         <div className="sidebar-title">
             <span className="icon"><GiAutoRepair /></span>
             <h1 className="title">Kardone</h1>
         </div>
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to={"/dashboard"}  className="navigation-box">
                        <span className="icon"><AiFillDashboard/></span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/bmw"}  className="navigation-box">
                        <span className="icon"><SiBmw/></span>
                        <span className="title">BMW</span>
                        <span  className="menu-arrow"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/mercedes"} className="navigation-box">
                        <span className="icon"><SiMercedes/></span>
                        <span className="title">MERCEDES</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/toyota"} className="navigation-box">
                        <span className="icon"><SiToyota/></span>
                        <span className="title">TOYOTA</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/opel"} className="navigation-box">
                        <span className="icon"><SiOpel/></span>
                        <span className="title">OPEL</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/signOut"} className="navigation-box">
                        <span className="icon"><GiExitDoor/></span>
                        <span className="title">Sign Out</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
}
export  default Sidebar