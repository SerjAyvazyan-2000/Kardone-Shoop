import "./style.scss"
import {AiFillHome} from "react-icons/ai"
import {SiBmw} from "react-icons/si"
import {GiAutoRepair} from "react-icons/gi"
import {AiFillDashboard} from "react-icons/ai"
import {SiMercedes} from "react-icons/si"
import {SiToyota} from "react-icons/si"
import {SiOpel} from "react-icons/si"
import {GiExitDoor} from "react-icons/gi"

import React, {useState} from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdOutlineCollectionsBookmark} from "react-icons/md"
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link, NavLink} from "react-router-dom";
import MyModal from "../../../UI/myModal";
import SignOut from "../signOut";




const Sidebar = ({navActive}) => {
    const [subMenuBmw ,setSubMenuBmw] = useState(false)
    const [subMenuMers ,setSubMenuMers] = useState(false)
    const [openModal,setOpenModal] = useState(false)


    const openSubMenuBmw = () =>{
        setSubMenuBmw(!subMenuBmw)
    }
    const openSubMenuMers = () =>{
        setSubMenuMers(!subMenuMers)
    }
    const signOut = () => {
        setOpenModal(!openModal)
    }

    return <>
        <div className={`sidebar-container ${navActive ? "active" : ''}`}>
        <div className="sidebar-title">
            <span className="icon"><GiAutoRepair/></span>
            <h1 className="title">Kardone</h1>
        </div>
        <nav className="navigation">
            <ul className="navigation-list">
                <li>
                    <NavLink to={"/dashboard"} className="navigation-box">
                        <span className="icon"><AiFillDashboard/></span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bmw" className="navigation-box">
                        <span className="icon"><SiBmw/></span>
                        <span className="title">BMW</span>
                        <span onClick={openSubMenuBmw}  className={`menu-arrow  ${subMenuBmw ? "rotate-arrow-menu" : ''}`}></span>
                    </NavLink>
                    <ul className={`sub-menu  ${subMenuBmw ? "open-sub-menu" : ''}`}>
                        <li>
                            <NavLink
                                state={{name: "name", description: "description"}}
                                to={"/addNewProduct"}>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Add New Product</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to={"/collection"}>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Collection</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={"/mercedes"} className="navigation-box">
                        <span className="icon"><SiMercedes/></span>
                        <span className="title">MERCEDES</span>
                        <span onClick={openSubMenuMers} className={`menu-arrow  ${subMenuMers ? "rotate-arrow-menu" : ''}`}></span>

                    </NavLink>
                    <ul className={`sub-menu  ${subMenuMers ? "open-sub-menu" : ''}`}>
                        <li>
                            <NavLink
                                state={{name: "name", description: "description"}}
                                to={"/addNewProduct"}>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Add New Product</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to={"/collection"}>
                                <span className="icon"><AiOutlineArrowRight/></span>
                                <span className="title">Collection</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={"/toyota"} className="navigation-box">
                        <span className="icon"><SiToyota/></span>
                        <span className="title">TOYOTA</span>
                        <span className="menu-arrow"></span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/opel"} className="navigation-box">
                        <span className="icon"><SiOpel/></span>
                        <span className="title">OPEL</span>
                        <span className="menu-arrow"></span>

                    </NavLink>
                </li>
                <li>
                    <NavLink to={''} onClick={signOut} className="navigation-box">
                        <span className="icon"><GiExitDoor/></span>
                        <span className="title">Sign Out</span>
                    </NavLink>
                </li>

            </ul>
        </nav>
    </div>
        {openModal ? <MyModal
            onClose={signOut}
            children={<SignOut onClose={signOut}/>}
        /> : null}
        </>
}
export default Sidebar