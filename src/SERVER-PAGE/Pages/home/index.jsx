import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../header";
import useInformation from "../../../hooks/test-information";
import WelcomeSection from "../../Components/welcome-section";
import SliderSection from "../../Components/slider-section";
import useSettings from "../../Components/slider-section/setings";
import FeaturedProducts from "../../Components/Featured-products";
import banner1 from "../../../assets/style/images/banner1.webp"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import ScrollTop from "../../Components/scrollTop";

const Home = () => {
    let {homeSliderInfo, featuredProducts} = useInformation()
    let {settings} = useSettings()

    return <>
        <Header/>
        <main className="home-section">
            <ScrollTop/>
            <section className="slider-block">
                <Slider {...settings}>
                    {homeSliderInfo.length ? homeSliderInfo.map((item, index) => {
                            return <SliderSection
                                item={item}
                                key={index}
                                buttonName="Read More"
                            />
                        })
                        : null}
                </Slider>
            </section>
            <WelcomeSection/>
            <section className="featured-section">
                <div className="G-container">
                    <div className="featured-title"><h3>FEATURED <span>PRODUCTS</span></h3></div>
                    {featuredProducts.length ?
                    <div className="featured-products">
                        {featuredProducts.length ? featuredProducts.map((item, index) => {
                            return <FeaturedProducts item={item} key={index}/>
                        }) : null}
                    </div>
                        : <div>EMPTY LIST</div>}
                </div>
            </section>
            <section className="section-about">
                <div className="about-image G-image G-center-flex-direction"
                     style={{backgroundImage: `url(${banner1})`}}>
                    <h3>ABOUT OUR STORE</h3>
                    <p>The theme doesn’t just ensure an online store, but it offers an excellent support and
                        marketing system that can help website owners overcome
                        technical problems handily and increase sales.</p>
                    <NavLink to={"/home"}>
                        Read More
                    </NavLink>
                </div>
            </section>

        </main>
    </>
}
export default Home