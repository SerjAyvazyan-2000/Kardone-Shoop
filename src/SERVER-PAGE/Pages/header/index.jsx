import "./stle.scss"
import logo from "../../../assets/style/images/logo.png"
import React, {useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

// export function Layout() {
//     return <div>
//
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/catalog">catalog</Link>
//                 </li>
//                 <li>
//                     <Link to="/sale">sale</Link>
//                 </li>
//             </ul>
//         </nav>
//
//         <Outlet/>
//     </div>
// }

const Header = () => {
    const [subMenu, setSubMenu] = useState(false)
    const openSubMenu = () => {
        setSubMenu(!subMenu)
    }

    return <header className="header-section">
        <div className="header-content-row-1">
            <div className="G-container">
                <div className="row-1-content">
                    <div className="my-account-navigation">
                        <ul>
                            <li>
                                <NavLink to="/my-account"><i className="icon-users"></i>My Account</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="basket-search">
                        <ul>
                            <li className="search-block">
                                <label>
                                    <input type="text" placeholder="Search Store..."/>
                                </label>
                            </li>
                            <li className="basket-navigation">
                                <NavLink to="/basket"><i className="icon-cart"></i></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="select-money">
                        <select name="" id="">
                            <option value="">USD</option>
                            <option value="">AMD</option>
                            <option value="">RUB</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-content-row-2">
            <div className="G-container">
                <div className="row-2-block">
                    <div className="header-logo">
                        <NavLink to="/home">
                            <div className="logo-block">
                                <img src={logo} alt=""/>
                                <h1><span>KAR</span>DONE</h1>
                            </div>
                        </NavLink>
                    </div>
                    <nav className="header-menu">
                        <ul className="menu-list">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li className="catalog-sub-navigation">
                                <NavLink to="/catalog">Catalog
                                    <span onClick={openSubMenu} className="menu-arrow"></span>
                                </NavLink>
                                <ul className={"sub-menu-list-catalog"}>
                                    <p>Catalog</p>
                                    <li>
                                        <NavLink to="/catalog"> Body Parts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalog">Exterior</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalog">Interior</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalog">Lighting</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalog">Sale</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="sale-sub-navigation">
                                <NavLink to="/sale">Sale
                                    <span onClick={openSubMenu} className="menu-arrow"></span>
                                </NavLink>
                                <ul className="sub-menu-list-sale">
                                    <li>
                                        <div>Img</div>
                                    </li>
                                    <li>
                                        <div>Img</div>
                                    </li>
                                    <li>
                                        <div>Img</div>
                                    </li>
                                    <li>
                                        <div>Img</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="burger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>

    </header>


}
export default Header