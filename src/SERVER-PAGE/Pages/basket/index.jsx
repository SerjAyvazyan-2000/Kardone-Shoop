import "./style.scss"
import Header from "../header";
import useInformation from "../../../test-information";
import React, {useEffect, useState} from "react";
import Counter from "../../Components/counter";
import ScrollTop from "../../Components/scrollTop";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {localProduct, setProduct} from "../../../store/reducers/basketProduct";

const Basket = () => {
    const dispatch = useDispatch()
    const {featuredProducts} = useInformation()
    const basketList = useSelector(state => state.BasketProduct.basketList)
    const [totalPrise,setTotalPrise] = useState(0)
    const [totalWeight,setTotalWeight] = useState(0)

    
    useEffect(()=>{
        let price = 0
        let weight = 0
        if(basketList.length){
              basketList.forEach((item,index)=>{
                  price += +item.price
                  weight+= +item.weight
                  setTotalPrise(price)
                  setTotalWeight(weight)

              })
         }
    },[])


    return <>
        <ScrollTop/>
        <Header/>
        <section className="basket-section">
            <div className="basket-header">
                <div className="G-container">
                    <div className="basket-header-text">
                        <h3><NavLink to={"/home"}>HOME</NavLink> <i className="icon-arrow-right"></i> <span>YOUR SHOPPING CART</span></h3>
                    </div>
                </div>
            </div>
            <div className="G-container">
                <div className="basket-title">
                    <h3> YOUR SHOPPING CART</h3>
                </div>
                {basketList.length ?
                    <>
                        <div className="products-table">
                            <div className="table-title">
                                <div className="product-title"><p>Product </p></div>
                                <div className="prise-title"><p>Prise </p></div>
                                <div className="quantity-title"><p>Quantity </p></div>
                                <div className="total-title"><p>Total </p></div>
                            </div>
                            {basketList.map((item, index) => {
                                return <>
                                    <div className="table-content">
                                        <div className="product-content">
                                            <div className="product-basket-image G-image"
                                                 style={{backgroundImage: `url(${item.productImages[0]})`}}>
                                            </div>
                                            <div className="product-basket-info">
                                                <NavLink to={"products"}>
                                                    {item.productName}
                                                </NavLink>
                                                <p>
                                                    <span>Color</span>: {item.Color}
                                                </p>
                                                <p>
                                                    <span>Count</span>
                                                </p>
                                                <p>
                                                    <span>ProductType</span>: {item.productType}
                                                </p>
                                                <p>
                                                    <span>Vendor</span>: {item.vendor}
                                                </p>
                                                <p>
                                                    <span>Weight</span>: {item.weight}
                                                </p>
                                                <div className="remove-product">
                                                    <button>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="prise-content">
                                            <h3>${item.price}</h3>
                                        </div>
                                        <div className="quantity-content">
                                            <Counter/>
                                        </div>
                                        <div className="total-content">
                                            <h3>${item.price}</h3>
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
                        <>
                            <div className="total-weight-box">
                                <div className="total-weight-text"><p>Total weight</p></div>
                                <div className="total-wight-number"><p>{totalWeight} lb</p></div>
                            </div>
                            <div className="total-prise-box">
                                <div className="total-prise-text"><p>Total Prise</p></div>
                                <div className="total-prise-number"><span>${totalPrise}</span></div>
                            </div>
                            <div className="message-tools-box">
                                <div className="message-tools-text">Add a note to your order</div>
                                <div className="message-tools-textarea">
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="kardone-process">
                                <p>KARDONE process all orders in USD. Shipping & taxes calculated at checkout.</p>
                            </div>
                            <div className="shopp-checkout-box">
                                <div className="continue-shoop-tools"><NavLink to={"/catalog"}>Continue Shopping</NavLink></div>
                                <div className="proceed-checkout"><NavLink to={"/checkout"}>Proceed Checkout</NavLink></div>
                            </div>
                        </>
                    </>
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

