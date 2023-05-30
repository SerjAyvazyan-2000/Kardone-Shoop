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
import Counter from "../../Components/counter";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/basketProduct";
import {useFetching} from "../../../hooks/useFetching";
import useAutoPartsServices from "../../../API/autoPartsServices";
import Loader from "../../../UI/loader/loader";
import useCollectionServices from "../../../API/collectionServices";


const Products = () => {
    const params = useParams()
    const basketList = useSelector(state => state.BasketProduct.basketList)
    const dispatch = useDispatch()
    const [autoParts, setAutoParts] = useState([])
    const [catalog, setCatalog] = useState([])
    const [basketPath, setBasketPath] = useState(false)
    const [idProduct, setIdProduct] = useState(null)

    const [fetchingProduct, loading, error] = useFetching(async () => {
        const response = await useAutoPartsServices.getProductId(params.id)
        setIdProduct(response)
    })
    const getCatalog = async () => {
        const result = await useCollectionServices.getCollection()
        if (result) {
            setCatalog(result)
        }
    }
    useEffect(() => {
        getCatalog()
        fetchingProduct()
    }, [])


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleClick = () => {
        dispatch(setProduct(idProduct))

    }

    useEffect(()=>{
        if(idProduct){
            basketList.forEach((item, index) => {
                if (item._id === idProduct._id) {
                    setBasketPath(true)
                }
            })
        }

    },[basketList])


    return <section className="product-section">
        <Header/>

        {idProduct !== null && !loading ?
            <>
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
                                            <Counter/>
                                            <div className="product-save">
                                                {basketPath ? <NavLink to={'/basket'}>Get Basket</NavLink> :
                                                    <button onClick={handleClick}>Add to Cart</button>
                                                }

                                            </div>
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


            : <div className="product-loader">
                <Loader/>
            </div>
        }


    </section>
}

export default Products