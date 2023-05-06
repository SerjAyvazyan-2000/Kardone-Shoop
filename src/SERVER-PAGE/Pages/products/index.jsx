import "./style.scss"
import Header from "../header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import featuredProducts from "../../Components/Featured-products";
import useInformation from "../../../test-information";
import product3 from "../../../assets/style/images/product3.avif";
import Counter from "../basket/counter";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/basketProduct";
import {countMinus, countPlus} from "../../../store/reducers/autoPartsCount";


const Products = () => {
    const id = useParams()
    // let {homeSliderInfo} = useInformation()
    const partsCount = useSelector(state => state.AutoPartsCount.partsCount)
    const location = useLocation()
    const [loadingParts, setLoadingParts] = useState(false)
    const basketList = useSelector(state => state.BasketProduct.basketList)
    const dispatch = useDispatch()
    const [autoParts, setAutoParts] = useState([])
    const [catalog, setCatalog] = useState([])
    const [wentBasket, setWentBasket] = useState(false)


    const getAutoParts = async () => {
        setLoadingParts(true)
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
        if (result.data) {
            setLoadingParts(false)
            setAutoParts(result.data)
        }
    }
    const getCatalog = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection')
        if (result.data) {
            setCatalog(result.data)
        }
    }
    useEffect(() => {
        getCatalog()
        getAutoParts()
    }, [])
    const [idProduct, setIdProduct] = useState({
        productName: '',
        description: '',
        productImages: [],
        price: '',
        starPoints: '',
        productType: '',
        vendor: "",
        weight: '',
        productTags: '',
        vehicleType: '',
        id: ''
    })

    useEffect(() => {
        autoParts.forEach((item, index) => {
            if (item._id === id.id) {
                setIdProduct(item)

            }
        })
    })


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleClick = () => {
        dispatch(setProduct(idProduct))
        localStorage.setItem("wentBasket", JSON.stringify(idProduct))
        setWentBasket(true)
        setTimeout(() => {
            setWentBasket(false)
        }, 2000)

    }

    const handleClickPlus = () => {
        dispatch(countPlus(1))
    }
    const handleClickMinus = () => {
        if (partsCount !== 0) {
            dispatch(countMinus(1))
        }


    }


    return <section className="product-section">
        <Header/>
        <div className="product-header">
            <div className="G-container">
                <div className="product-header-text">
                    <h4><NavLink to={"/home"}>Home</NavLink> <i className="icon-arrow-right"></i> <NavLink
                        to={`/catalog`}>Collections</NavLink> <i className="icon-arrow-right"></i>
                        <NavLink>  {idProduct.productType ? "Exterior" : idProduct.productType}</NavLink>
                        <i className="icon-arrow-right"></i>
                        <span>{idProduct.name}</span>

                    </h4>
                </div>
            </div>
        </div>
        {!loadingParts ?
            <>
                {featuredProducts.length ?
                    <div className="products-information-box">
                        <div className="G-container">
                            <div className="product-container">
                                <div className="slider-box-product">
                                    <Slider {...settings}>
                                        {idProduct.productImages.length ? idProduct.productImages.map((item, index) => {
                                            return <div>
                                                <div className="product-slider-image G-image "
                                                     style={{backgroundImage: `url(${item})`}}></div>
                                            </div>
                                        }) : null}
                                    </Slider>
                                </div>
                                <div className="product-info-block">
                                    <div className="product-info-name"><h2>{idProduct.productName}</h2>
                                        {/*hnaravora lini <SELECT-TEG></SELECT-TEG>*/}
                                    </div>

                                    <div className="product-info">
                                        <div className="product-info-pages">
                                            <p>Weight:span <span>{idProduct.weight}</span></p>
                                            <p>SKU: <span>(create-Admin)</span></p>
                                            <p>Barcode: <span>(create-Admin)</span></p>
                                            <div className="collections-title">
                                                <p>Collections:</p>
                                                {catalog.length ? catalog.map((item, index) => {
                                                    return <span>{item.name},</span>
                                                }) : null}
                                            </div>
                                            <p>ProductType: <span>{idProduct.productType}</span></p>
                                            <p>Tags: <span>{idProduct.vendor}</span></p>
                                            <p>Vendor: <span>{idProduct.vendor}</span></p>
                                        </div>
                                        <div className="product-info-pages">
                                            <p>Availability: <i className="Availability-color">{idProduct.vendor}</i>
                                            </p>
                                            <h2>${idProduct.price}</h2>
                                            <div className="quantity-counter">Quantity:
                                                <Counter
                                                    handleClickMinus={handleClickMinus}
                                                    handleClickPlus={handleClickPlus}
                                                    count={partsCount}
                                                    onClick={handleClick}
                                                    button={"button"}
                                                    buttonText={wentBasket}/>
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


                    : <div>Empty List</div>}


                {
                    idProduct.description ?
                        <div className="product-description-box">
                            <div className="G-container">
                                <div className="description-container">
                                    <div className="product-description-title"><h3>{idProduct.descriptionTitle}</h3>
                                    </div>
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
            </>
            : <LoaderBox loading={loadingParts}/>}

    </section>
}

export default Products