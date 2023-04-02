import "./style.scss"
import {NavLink} from "react-router-dom";

const Footer = () => {

    const handleClick = () => {
        alert("der patrast chi")
    }

    return <footer className="footer-section">
        <div className="G-container">
            <div className="footer-block">
                <div className="main-menu">

                    <div className="main-list">
                        <div className="main-title">
                            <h3>Main Menu</h3>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={"home"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"catalog"}>Catalog</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="catalog-footer">
                    <div className="catalog-title-footer">
                        <h3>Catalog</h3>
                    </div>
                    <ul>
                        <li>
                            <NavLink to={"home"}>Body Parts</NavLink>
                        </li>
                        <li>
                            <NavLink to={"home"}>Exterior</NavLink>
                        </li>
                        <li>
                            <NavLink to={"home"}>Interior</NavLink>
                        </li>
                        <li>
                            <NavLink to={"home"}>Lighting</NavLink>
                        </li>
                        <li>
                            <NavLink to={"home"}>Sale</NavLink>
                        </li>
                    </ul>

                </div>
                <div className="our-shop">
                    <div className="our-shop-title">
                        <h3>OUR SHOP</h3>
                    </div>
                    <div className="our-shop-info">
                        <h4>Address</h4>
                        <p>4578 Marmora St, San Francisco D04 89GR</p>
                        <h4>Phone</h4>
                        <p>1-800-1234-567</p>
                    </div>

                </div>
                <div className="newsletter">
                    <div className="newsletter-title">
                        <h3>NEWSLETTER</h3>
                    </div>
                    <p>Join our mailing list</p>
                    <label>
                        <input type="text" placeholder="Enter your Email"/>
                        <NavLink onClick={handleClick} to={"challenge"}>
                            <i className="icon-arrow-right"></i>
                        </NavLink>

                    </label>
                </div>
            </div>
            <div className="main-icon">
                <a href="https://ru-ru.facebook.com/">
                    <i className="icon-facebook"></i>
                </a>
                <a href="https://twitter.com/?lang=ru">
                    <i className="icon-twitter"></i>
                </a>
                <a href="https://tv.youtube.com/welcome/?utm_servlet=prod">
                    <i className="icon-youtube2"></i>
                </a>
            </div>

        </div>
    </footer>
}

export default Footer