import "./style.scss"
import {AiFillHome} from "react-icons/ai"
import {SiBmw} from "react-icons/si"
import {GiAutoRepair} from "react-icons/gi"
import {AiFillDashboard} from "react-icons/ai"
import {SiMercedes} from "react-icons/si"
import {SiToyota} from "react-icons/si"
import {SiOpel} from "react-icons/si"
import {GiExitDoor} from "react-icons/gi"

import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdOutlineCollectionsBookmark} from "react-icons/md"
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link, NavLink} from "react-router-dom";




const Sidebar = ({navActive}) => {
    return <div className={`sidebar-container ${navActive ? "active" : ''}`}>
        <div className="sidebar-title">
            <span className="icon"><GiAutoRepair/></span>
            <h1 className="title">Kardone</h1>
        </div>
        <nav className="navigation">
            <ul className="navigation-list">
                <li>
                    <Link to={"/dashboard"} className="navigation-box">
                        <span className="icon"><AiFillDashboard/></span>
                        <span className="title">Dashboard</span>
                    </Link>

                </li>
                <li>
                    <Link
                        state={{name: "name", description: "description"}}
                        to="/bmw"
                        className="navigation-box">
                        <span className="icon"><SiBmw/></span>
                        <span className="title">BMW</span>
                        <span className="menu-arrow"></span>
                    </Link>
                    <ul className="sub-menu-bwm">
                        <li>
                            <NavLink to={"addNewProduct"}>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Add New Product</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Product</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Collection</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={"/mercedes"} className="navigation-box">
                        <span className="icon"><SiMercedes/></span>
                        <span className="title">MERCEDES</span>
                        <span className="menu-arrow"></span>

                    </Link>
                </li>
                <li>
                    <Link to={"/toyota"} className="navigation-box">
                        <span className="icon"><SiToyota/></span>
                        <span className="title">TOYOTA</span>
                        <span className="menu-arrow"></span>

                    </Link>
                </li>
                <li>
                    <Link to={"/opel"} className="navigation-box">
                        <span className="icon"><SiOpel/></span>
                        <span className="title">OPEL</span>
                        <span className="menu-arrow"></span>

                    </Link>
                </li>
                <li>
                    <Link to={"/signOut"} className="navigation-box">
                        <span className="icon"><GiExitDoor/></span>
                        <span className="title">Sign Out</span>
                        <span className="menu-arrow"></span>

                    </Link>
                </li>
            </ul>
        </nav>
    </div>
}
export default Sidebar