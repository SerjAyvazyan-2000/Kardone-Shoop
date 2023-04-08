import "./style.scss"
import Header from "../header";
import React from "react";

const MyAccount = () => {

    return <>
        <Header/>
        <section className="MyAccount-section">
            <div className="my-account-header">
                <div className="G-container">
                    <div className="my-account-header-text">
                        HOME <i className="icon-arrow-right"></i> <span>ACCOUNT</span>
                    </div>
                </div>
            </div>
            <div className="G-container">
                <div className="my-account-title"><h3>ACCOUNT</h3></div>
            </div>

            <div className="G-container">
                <div className="form-container">
                    <div className="create-account-box">
                        Create Account
                    </div>
                    <div className="login-account-box">
                        Login Account
                    </div>
                </div>
            </div>

        </section>
    </>

}
export default MyAccount