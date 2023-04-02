import "./style.scss"
import Header from "../header";
import useInformation from "../../../hooks/test-information";
import React, {useState} from "react";
import Counter from "./counter";
import ScrollTop from "../../Components/scrollTop";
import {NavLink} from "react-router-dom";

const Basket = () => {
    const {featuredProducts} = useInformation()

    return <>
        <ScrollTop/>
        <Header/>
        <section className="basket-section">
            <div className="basket-header">
                <div className="G-container">
                    <div className="basket-header-text">
                        <h3>HOME <i className="icon-arrow-right"></i> <span>YOUR SHOPPING CART</span></h3>
                    </div>
                </div>
            </div>
            <div className="G-container">
                <div className="basket-title">
                    <h3> YOUR SHOPPING CART</h3>
                </div>
                {featuredProducts.length ?
                    <div className="products-table">
                        <div className="table-title">
                            <div className="product-title"><p>Product </p></div>
                            <div className="prise-title"><p>Prise </p></div>
                            <div className="quantity-title"><p>Quantity </p></div>
                            <div className="total-title"><p>Total </p></div>
                        </div>
                        {featuredProducts.map((item, index) => {
                            return <>
                                <div className="table-content">
                                <div className="product-content">
                                    <div className="product-basket-image G-image"
                                         style={{backgroundImage: `url(${item.img})`}}>
                                    </div>
                                    <div className="product-basket-info">
                                        <NavLink to={"products"}>
                                            {item.name}
                                        </NavLink>

                                        <p>
                                            <span>Color</span>: {item.Color}
                                        </p>
                                        <p>
                                            <span>ProductType</span>: {item.ProductType}
                                        </p>
                                        <p>
                                            <span>Vendor</span>: {item.Vendor}
                                        </p>
                                        <p>
                                            <span>Weight</span>: {item.Weight}
                                        </p>
                                        <div className="remove-product">
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="prise-content">
                                    <h3>${item.prise}</h3>
                                </div>
                                <div className="quantity-content">
                                    <Counter/>
                                </div>
                                <div className="total-content">
                                    <h3>${item.prise}</h3>
                                </div>

                            </div>
                                <div className="media-block">
                                     <div className="media-counter">
                                         <Counter/>
                                     </div>
                                </div>
                           </>
                        })}

                    </div>

                    :
                    <div className="null-box">
                        <div className="null-text">
                            <p> It appears that your cart is currently empty.
                                <NavLink to={"catalog"}>Browse collections to find the products you are
                                    interested.</NavLink>
                            </p>
                        </div>
                    </div>

                }
            </div>

        </section>
    </>
}
export default Basket