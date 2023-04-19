import "./style.scss"
import React, {useEffect, useState} from "react";
import useEmailValidate from "./loginValidate";
import {toast} from "react-toastify";
import MyInput from "../../../../UI/MyInput";

const LoginForm = ({getForgotPassword}) => {

    const {validation, loginUser, setLoginUser, errorText, setErrorText} = useEmailValidate()
    let newUser = JSON.parse(localStorage.getItem("newUser",))


    const signAdmin = () => {
        if (validation() && newUser.EmailAddress === loginUser.Email && newUser.Password === loginUser.Password ) {
            localStorage.setItem('userToken',loginUser.Email+loginUser.Password)
            window.location.reload()
            toast.success("kayfota")
        } else {
            toast.error(  "check if you are registered")

        }
    }
    const handleChange = (e) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
        setErrorText({...errorText, [e.target.name]: ''})
    }

    return <>
        <div className="login-account-box">
            <div className="login-title"><h3>ALREADY REGISTERED?</h3></div>
            <form>
                <div className="login-input-block">
                    <MyInput
                        nameText="Password"
                        type="text"
                        onchange={handleChange}
                        value={loginUser.Password}
                        nameInput={"Password"}
                        errorText={errorText.Password}

                    />
                </div>
                <div className="login-input-block">
                    <MyInput
                        nameText="Email"
                        type="text"
                        onchange={handleChange}
                        value={loginUser.Email}
                        nameInput={"Email"}
                        errorText={errorText.Email}
                    />


                </div>
            </form>
            <div className="get-admin-tools">
                <button onClick={signAdmin}>SIGN IN</button>
                <span onClick={getForgotPassword}
                      className="forgot-password"> Forgot your password?</span>
            </div>

        </div>

    </>

};

export default LoginForm;