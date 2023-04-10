import "./style.scss"
import Header from "../header";
import React, {useState} from "react";
import CostumersInput from "../../Components/costumersInput";
import ScrollTop from "../../Components/scrollTop";

const MyAccount = () => {
    const [openRegister, setOpenRegister] = useState(false)
    const [openForgotPassword, setOpenForgotPassword] = useState(false)


    const handleRegister = () => {
        setOpenRegister(!openRegister)
    }
    const handleForgotPassword = () => {
        setOpenForgotPassword(!openForgotPassword)
    }

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
                        <button onClick={handleRegister}>Create New Account</button>

                    </div>
                    <div className="login-account-box">
                        <div className="login-title"><h3>ALREADY REGISTERED?</h3></div>
                        <form>
                            <div className="login-input-block">
                                <CostumersInput name="Password" type="text"/>
                            </div>
                            <div className="login-input-block">
                                <CostumersInput name="Email" type="text"/>
                            </div>
                        </form>
                        <div className="get-admin-tools">
                            <button>SIGN IN</button>
                            <span onClick={handleForgotPassword} className="forgot-password"> Forgot your password?</span>
                        </div>

                    </div>
                    <div style={openRegister ? {display: 'block'} : null} className="registration-block">
                        <div className="register-title-block">
                            <div className="register-title-text">
                                <h3>CREATE AN ACCOUNT</h3>
                            </div>
                            <div className="register-close">
                                <p onClick={handleRegister} className="register-close-tools"><i
                                    className="icon-cross"></i>Close</p>
                            </div>
                        </div>

                        <div className="register-tools-block">
                            <div className="register-input-block">
                                <div className="register-input-name"><p>FirstName</p></div>
                                <div className="register-input-tools">
                                    <label htmlFor="">
                                        <input type="text"/>
                                        {/*<p>errorText</p>*/}
                                    </label>
                                </div>
                            </div>
                            <div className="register-input-block">
                                <div className="register-input-name"><p>LastName</p></div>
                                <div className="register-input-tools">
                                    <label htmlFor="">
                                        <input type="text"/>
                                        {/*<p>errorText</p>*/}
                                    </label>
                                </div>
                            </div>
                            <div className="register-input-block">
                                <div className="register-input-name"><p>EmailAddress</p></div>
                                <div className="register-input-tools">
                                    <label htmlFor="">
                                        <input type="text"/>
                                        {/*<p>errorText</p>*/}
                                    </label>
                                </div>
                            </div>
                            <div className="register-input-block">
                                <div className="register-input-name"><p>Password</p></div>
                                <div className="register-input-tools">
                                    <label htmlFor="">
                                        <input type="text"/>
                                        {/*<p>errorText</p>*/}
                                    </label>
                                </div>
                            </div>
                            <div className="register-input-block">
                                <div className="register-input-name"><p>ConfirmPassword</p></div>
                                <div className="register-input-tools">
                                    <label htmlFor="">
                                        <input type="text"/>
                                        {/*<p>errorText</p>*/}
                                    </label>
                                </div>
                            </div>
                            <div className="register-save-tools">
                                <button>Register</button>
                                <p onClick={handleRegister}>Cancel</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={openForgotPassword ? {display:'block'} : null} className="forgot-password-box">
                    <div className="forgot-password-title">
                        <div className="forgot-password-text"><h3>RESET PASSWORD</h3></div>
                        <div className="forgot-password-close"><p onClick={handleForgotPassword}><i className="icon-cross"></i>Close</p></div>
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
                            <p onClick={handleForgotPassword}>Cancel</p>
                        </div>
                    </div>
                </div>


            </div>

        </section>
        <ScrollTop/>
    </>

}
export default MyAccount