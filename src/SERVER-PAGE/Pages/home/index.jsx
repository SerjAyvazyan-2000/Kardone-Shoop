import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../header";
import useInformation from "../../../test-information";
import WelcomeSection from "../../Components/welcome-section";
import SliderSection from "../../Components/slider-section";
import useSettings from "../../Components/slider-section/setings";
import FeaturedProducts from "../../Components/Featured-products";
import banner1 from "../../../assets/style/images/banner1.webp"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import ScrollTop from "../../Components/scrollTop";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/getAutoParts";
import useAutoPartsServices from "../../../ADMIN-PAGE/API/autoPartsServices";
import Loader from "../../../UI/loader/loader";

const Home = () => {
    let {homeSliderInfo} = useInformation()
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    let {settings} = useSettings()
    const getAutoParts = async () => {
        setLoading(true)
        const result = await useAutoPartsServices.getAutoParts()
        if (result) {
            // dispatch(setProduct(result.data))
            setLoading(false)
            let newData = result.filter((item,index)=>{
              return index < 6
            })
            setFeaturedProducts(newData)
        }
    }
    useEffect(() => {
        getAutoParts()
    }, [])
    return <>
        <Header/>
        <main className="home-section">
            <ScrollTop/>
            <section className="slider-block">
                <Slider {...settings}>
                    {homeSliderInfo.length ? homeSliderInfo.map((item, index) => {
                            return <div>
                                <SliderSection
                                    item={item}
                                    key={index}
                                    buttonName="Read More"
                                />
                            </div>
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
                        : <div className="home-loader">
                            <LoaderBox loading={loading}/>
                             <Loader/>
                        </div>}
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