import "./style.scss"
import Header from "../header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import featuredProducts from "../../Components/Featured-products";
import useInformation from "../../../hooks/test-information";
import product3 from "../../../assets/style/images/product3.avif";
import Counter from "../basket/counter";

const Products = () => {
    const id = useParams()
    const location = useLocation()
    const {featuredProducts, catalog} = useInformation()

    const [idProduct, setIdProduct] = useState({
        img: null,
        name: "",
        prise: 0,
        Color: "",
        ProductType: "",
        Vendor: "",
        Weight: "",
        description: "",
        categories: "",
        id: 0,
        video: ''
    })

    useEffect(() => {
        featuredProducts.forEach((item, index) => {
            if (item.id === +id.id) {
                setIdProduct(item)
            }
        })
    }, [])

    useEffect(() => {
    }, [idProduct])
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return <section className="product-section">
        <Header/>
        <div className="product-header">
            <div className="G-container">
                <div className="product-header-text">
                    <h4>HOME<i className="icon-arrow-right"></i> COLLECTIONS <i className="icon-arrow-right"></i>
                        {!location.state ? "Exterior" : location.state.categories}<i
                            className="icon-arrow-right"></i>
                        <span>{location.state.name}</span>

                    </h4>
                </div>
            </div>
        </div>
        {featuredProducts.length ?
            <div className="products-information-box">
                <div className="G-container">
                    <div className="product-container">
                        <div className="slider-box-product">
                            <Slider {...settings}>
                                <div>
                                    <div className="product-slider-image G-image "
                                         style={{backgroundImage: `url(${idProduct.img})`}}></div>
                                </div>

                                <div>
                                    <div className="product-slider-image G-image"
                                         style={{backgroundImage: `url(${idProduct.img})`}}></div>
                                </div>
                            </Slider>
                        </div>
                        <div className="product-info-block">
                            <div className="product-info-name"><h2>{idProduct.name}</h2>
                                {/*hnaravora lini <SELECT-TEG></SELECT-TEG>*/}
                            </div>

                            <div className="product-info">
                                <div className="product-info-pages">
                                    <p>Weight:span <span>{idProduct.Weight}</span></p>
                                    <p>SKU: <span>(create-Admin)</span></p>
                                    <p>Barcode: <span>(create-Admin)</span></p>
                                    <div className="collections-title">
                                        <p>Collections:</p>
                                        {catalog.length ? catalog.map((item, index) => {
                                            return <NavLink to={`/${item.name}`}>{item.name},</NavLink>
                                        }) : null}
                                    </div>
                                <p>ProductType: <span>{idProduct.ProductType}</span></p>
                                <p>Tags: <span>{idProduct.Vendor}</span></p>
                                <p>Vendor: <span>{idProduct.Vendor}</span></p>
                            </div>
                            <div className="product-info-pages">
                                <p>Availability: <i className="Availability-color">{idProduct.Vendor}</i></p>
                                <h2>${idProduct.prise}</h2>
                                <div className="quantity-counter">Quantity:
                                    <Counter/>
                                </div>
                                <div className="product-icons-contact">
                                    <a href="https://www.facebook.com/" className="icon-facebook"></a>
                                    <a href="https://twitter.com/?lang=ru" className="icon-twitter"></a>
                                    <a href="" className="icon-github"></a>
                                    <a href="https://www.youtube.com/" className="icon-youtube2"></a>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            </div>
            : <div className="product-empty">Empty List</div>}

{
    idProduct.descriptionTitle ?
        <div className="product-description-box">
            <div className="G-container">
                <div className="description-container">
                    <div className="product-description-title"><h3>{idProduct.descriptionTitle}</h3></div>
                    <div className="product-description">
                        <p>{idProduct.description}</p>
                    </div>
                </div>
            </div>

        </div>
        : null
}
{
    idProduct.video ?
        <div className="product-video">
            <iframe src={idProduct.video}></iframe>
        </div>
        : null
}
</section>
}

export default Products