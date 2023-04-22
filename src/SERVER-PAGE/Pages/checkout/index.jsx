import "./style.scss"
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import useInformation from "../../../hooks/test-information";
import Payment from "./payment";
import MyInput from "../../../UI/MyInput";


const Checkout = () => {
    const {featuredProducts} = useInformation()
    const [openPayment, setOpenPayment] = useState(false)

    const continueShipping = (playNow) => {
        if(playNow !== "Play Now"){
            setOpenPayment(!openPayment)
        }
        if(playNow === "payment"){
            setOpenPayment(!openPayment)

        }
    }
    const returnInformation = (name) => {
       if(name === "Return to information"){
            setOpenPayment(false)
       }

    }

    return <div className="checkout-section">
        <div className="checkout-users-info-box">
            <div className="G-container">
                <div className="shipping-info-box">
                    <div className="checkout-users-header">
                        <div className="checkout-users-title"><NavLink to="/home">Kardone</NavLink></div>
                        <div className="checkout-users-text-title">
                            <NavLink to={"/basket"} style={{color: '#0acece'}}>Cart</NavLink><i
                            className="icon-arrow-right"></i><span onClick={()=>returnInformation("Return to information")}>Information</span>
                            <i className="icon-arrow-right"></i><span onClick={()=>continueShipping('payment')}>Payment</span>
                        </div>
                    </div>
                    {!openPayment ?
                        <>
                            <div className="checkout-contact-information">
                                <div className="login-contact-info">
                                    <h3>Contact information</h3>
                                    <p>Already have an account?<NavLink to="/my-account">Log in</NavLink></p>
                                </div>
                                <div className="contact-input-box">
                                    <MyInput placeholder="Email or mobile phone number"/>

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
                                        <select id="cars">
                                            <option>Åland Islands</option>
                                            <option>Armenia</option>
                                            <option>Russian</option>
                                            <option>America</option>
                                            <option>Italia</option>
                                            <option>France</option>


                                        </select>

                                    </div>
                                    <div className="firstname-lastname-box">
                                        <MyInput placeholder="firstname"/>
                                        <MyInput placeholder="lastname"/>

                                    </div>
                                    <div className="shipping-address-box">
                                        <MyInput placeholder="Addres"/>

                                    </div>

                                    <div className="apartment-box">
                                        <MyInput placeholder="Apartment, suite, etc. (optional)"/>

                                    </div>
                                    <div className="city-box">
                                        <MyInput placeholder="City"/>

                                        <label htmlFor="">
                                            <input type="checkbox"/><span>Email me with news and offers</span>
                                        </label>
                                    </div>

                                </form>

                            </div>
                        </>

                        : <Payment
                            setOpenPayment ={setOpenPayment}
                            contact={"ayvazyanserj3@gmail.com"}
                            billing={"davtyan, Erevan, Armenia"}
                        />}

                    <div className="form-save-close-tools">
                        <NavLink onClick={() => returnInformation(openPayment ? "Return to information" : null)}
                                 to={`${!openPayment ? "/basket" : "/checkout"} `}><i
                            className="icon-arrow-left"></i>{!openPayment ? "Return to cart" : "Return to information"}
                        </NavLink>
                        <button
                            onClick={()=>continueShipping(openPayment ? "Play Now" : "Continue to shipping")}>
                            {!openPayment ? "Continue to shipping" : "Play Now"}
                        </button>
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