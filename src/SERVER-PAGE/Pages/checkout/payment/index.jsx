import "./style.scss"
import {NavLink} from "react-router-dom";

const Payment = ({contact, billing, setOpenPayment}) => {

    const change = () => {
        setOpenPayment(false)
    }
    return <div className="payment-section">
        <div className="contact-billing-box">
            <div className="payment-contact-box">
                <h4>Contact</h4>
                <p>{contact}</p>
                <span onClick={change}>Change</span>
            </div>
            <div className="payment-billing-box">
                <h4>Billing</h4>
                <p>{billing}</p>
                <span onClick={change}>Change</span>
            </div>
        </div>
        <div className="payment-cart-box">
            <div className="payment-title"><h3>Payment</h3></div>
            <div className="payment-description"><p>All transactions are secure and encrypted.</p></div>

            <form action="" className="cart-tools">
                <div className="cart-title"><p>Credit card</p></div>
                <div className="cart-tools-box">
                    <div className="card-number">
                        <label htmlFor="">
                            <input type="text" placeholder="Card Number"/>
                        </label>
                    </div>
                    <div className="name-card">
                        <label htmlFor="">
                            <input type="text" placeholder="Name and Cart"/>
                        </label>
                    </div>
                     <div className="expiry-security-box">
                          <div className="expiry-box">
                              <label htmlFor="">
                                  <input type="text" placeholder="Expiryation date (MM/YY"/>
                              </label>
                          </div>
                          <div className="security-box">
                              <label htmlFor="">
                                  <input type="text" placeholder="Securoty Code"/>
                              </label>
                          </div>
                     </div>
                </div>
            </form>
        </div>
    </div>
};

export default Payment;