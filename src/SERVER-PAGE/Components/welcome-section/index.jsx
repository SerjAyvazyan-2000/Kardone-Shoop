import "./style.scss"
import welcome from "../../../assets/style/images/banner.webp";
import {NavLink} from "react-router-dom";


const WelcomeSection = () => {

    return <section className="welcome-shopp">
        <div className="welcome-image G-center-flex-direction G-image" style={{backgroundImage: `url(${welcome})`}}>
            <h3>WELCOME TO OUR STORE!</h3>
            <p>The theme doesn’t just ensure an online store, but it offers an excellent support and marketing system
                that can help website owners overcome technical problems handily and increase sales.</p>
            <NavLink to={"/home"}>
                Read More
            </NavLink>
        </div>
    </section>
}

export default WelcomeSection