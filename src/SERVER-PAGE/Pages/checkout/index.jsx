import "./style.scss"
import React from "react";
import {NavLink} from "react-router-dom";
import useInformation from "../../../hooks/test-information";


const Checkout = () => {
    const {featuredProducts} = useInformation()

    return <div className="checkout-section">
        <div className="checkout-users-info-box">
            <div className="G-container">
                <div className="shipping-info-box">
                    <div className="checkout-users-header">
                        <div className="checkout-users-title"><h2>Kardone</h2></div>
                        <div className="checkout-users-text-title">
                            <NavLink to={"/basket"} style={{color:'#0acece'}}>Cart</NavLink><i className="icon-arrow-right"></i><span>Information</span><i
                            className="icon-arrow-right"></i><span>Shipping</span><i
                            className="icon-arrow-right"></i><span>Payment</span>
                        </div>
                    </div>
                    <div className="checkout-contact-information">
                        <div className="login-contact-info">
                            <h3>Contact information</h3>
                            <p>Already have an account?<NavLink to="/my-account">Log in</NavLink></p>
                        </div>
                        <div className="contact-input-box">
                            <label htmlFor="">
                                <input type="text" placeholder="Email or mobile phone number"/>
                            </label>
                            <label htmlFor="">
                                <input type="checkbox"/><span>Email me with news and offers</span>
                            </label>
                        </div>
                    </div>
                    <div className="shipping-address-box">
                        <div className="shipping-address-title">
                            <h3>Shipping address</h3>
                        </div>
                        <form action="" className="shipping-form-box">
                            <div className="input-box-select">
                                <input type="text" list="cars" placeholder="Select"/>
                                <datalist id="cars">
                                    <option>Volvo</option>
                                    <option>Saab</option>
                                    <option>Mercedes</option>
                                    <option>Audi</option>
                                </datalist>

                            </div>
                            <div className="firstname-lastname-box">
                                <label htmlFor="">
                                    <input type="text" placeholder="firstanem"/>
                                </label>
                                <label htmlFor="">
                                    <input type="text" placeholder="lastname"/>
                                </label>
                            </div>
                            <div className="shipping-address-box">
                                <label htmlFor="">
                                    <input type="text" placeholder="Address"/>
                                </label>
                            </div>

                            <div className="apartment-box">
                                <label htmlFor="">
                                    <input type="text" placeholder="Apartment, suite, etc. (optional)"/>
                                </label>
                            </div>
                            <div className="city-box">
                                <label htmlFor="">
                                    <input type="text" placeholder="City"/>
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox"/><span>Email me with news and offers</span>
                                </label>
                            </div>

                        </form>

                    </div>
                    <div className="form-save-close-tools">
                        <NavLink to={"/basket"}><i className="icon-arrow-left"></i>Return to cart</NavLink>
                        <button>Continue to shipping</button>
                    </div>
                    <div className="checkout-footer">
                        <p>All rights reserved Kardone</p>
                    </div>

                </div>

            </div>

        </div>


        <div className="checkout-product-box">
            {featuredProducts.length ?
                <div className="G-container">
                    <div className="basket-products">
                        {featuredProducts.map((item, index) => {
                            return <div className="basket-products-item">
                                <div style={{backgroundImage: `url(${item.img})`}}
                                     className="basket-products-item-image G-image"></div>
                                <div className="basket-products-item-name">
                                    <p>{item.name}</p>
                                    <p>{item.Color}</p>
                                </div>
                                <div className="basket-products-item-prise"><p>${item.prise}</p></div>
                            </div>
                        })}
                        <div className="subtotal-box">
                            <p>Subtotal</p>
                            <p>$1000(testvi)</p>
                        </div>
                        <div className="shipping-box">
                            <p>Subtotal</p>
                            <p>Free(testvi)</p>
                        </div>
                        <div className="total-box">
                            <p>Total</p>
                            <span>USD $1,660.00(testvi)</span>
                        </div>
                    </div>
                </div>


                :
                <div className="basket-empty">Empty list</div>}
        </div>
    </div>
}

export default Checkout