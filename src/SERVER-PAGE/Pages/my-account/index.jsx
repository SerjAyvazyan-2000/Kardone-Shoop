import "./style.scss"
import Header from "../header";
import React, {useState} from "react";
import CostumersInput from "../../../UI/MyInput";
import ScrollTop from "../../Components/scrollTop";
import useRegisterValidate from "./regis]trationBox/registerValidate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from "./regis]trationBox";
import LoginForm from "./loginForm";

const MyAccount = () => {
    const [openRegister, setOpenRegister] = useState(false)
    const [openForgotPassword, setOpenForgotPassword] = useState(false)

    const getForgotPassword = () => {
        setOpenForgotPassword(!openForgotPassword)
    }
    const getRegister = () => {
        setOpenRegister(!openRegister)
    }

    // }

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
                <div style={openRegister ? {minHeight: '500px'} : null} className="form-container">
                    <div className="create-account-box">
                        <h3>NEW HERE?</h3>
                        <h4>Registration is free and easy!</h4>
                        <div className="create-account-box-info">
                            <p><i className="icon-checkbox-checked"></i>Faster checkout</p>
                            <p><i className="icon-checkbox-checked"></i>Save multiple shipping addresses</p>
                            <p><i className="icon-checkbox-checked"></i>View and track orders and more</p>
                        </div>
                        <button onClick={getRegister}>Create New Account</button>

                    </div>
                    <LoginForm
                        getForgotPassword={getForgotPassword}
                    />
                    <RegisterForm
                        openRegister={openRegister}
                        setOpenRegister={setOpenRegister}
                        getRegister={getRegister}
                    />
                </div>
                <div style={openForgotPassword ? {display: 'block'} : null} className="forgot-password-box">
                    <div className="forgot-password-title">
                        <div className="forgot-password-text"><h3>RESET PASSWORD</h3></div>
                        <div className="forgot-password-close"><p onClick={getForgotPassword}><i
                            className="icon-cross"></i>Close</p></div>
                    </div>
                    <div className="forgot-password-description"><p>We will send you an email to reset your password</p>
                    </div>
                    <div className="forgot-password-email">
                        <div className="forgot-input-block">
                            <div className="forgot-input-name"><p>EmailAddress</p></div>
                            <div className="forgot-input-tools">
                                <label htmlFor="">
                                    <input type="text"/>
                                    {/*<p>errorText</p>*/}
                                </label>
                            </div>
                        </div>
                        <div className="forgot-input-save">
                            <button>Submit</button>
                            <p onClick={getForgotPassword}>Cancel</p>
                        </div>
                    </div>
                </div>


            </div>

        </section>
        <ScrollTop/>
        <ToastContainer />

    </>

}
export default MyAccount