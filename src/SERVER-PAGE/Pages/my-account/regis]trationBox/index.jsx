import "./style.scss"
import CostumersInput from "../../../../UI/costumersInput";
import React from "react";
import useRegisterValidate from "./registerValidate";
import {toast} from "react-toastify";

const RegisterForm = ({openRegister,getRegister}) => {

    const {
        validation,
        registerUser,
        errorText,
        setRegisterUser,
        setErrorText
    } = useRegisterValidate()



    const handleChange = (e) => {
        setRegisterUser({...registerUser,[e.target.name]:e.target.value})
        setErrorText({...errorText,[e.target.name]:''})
    }
    const handleClick = () => {
        if(validation()){

            localStorage.setItem('newUser',JSON.stringify(registerUser))
            toast.success("Congratulations, you have registered!")
            setRegisterUser({...registerUser, FirstName:'', LastName:'', EmailAddress:'', Password:'', ConfirmPassword:''})

        }else {
            toast.error("Please comply with all requirements")
        }
    }

    return <>
        <div style={openRegister ? {display: 'block'} : null} className="registration-block">
        <div className="register-title-block">
            <div className="register-title-text">
                <h3>CREATE AN ACCOUNT</h3>
            </div>
            <div className="register-close">
                <p onClick={getRegister} className="register-close-tools"><i
                    className="icon-cross"></i>Close</p>
            </div>
        </div>

        <div className="register-tools-block">
            <div className="register-input-block">
                <div className="register-input-name"><p>FirstName</p></div>
                <div className="register-input-tools">
                    <CostumersInput
                        onchange={handleChange}
                        nameInput={"FirstName"}
                        errorText={errorText.FirstName}
                        value={registerUser.FirstName}

                    />
                </div>
            </div>
            <div className="register-input-block">
                <div className="register-input-name"><p>LastName</p></div>
                <div className="register-input-tools">
                    <CostumersInput
                        onchange={handleChange}
                        nameInput={"LastName"}
                        errorText={errorText.LastName}
                        value={registerUser.LastName}


                    />

                </div>
            </div>
            <div className="register-input-block">
                <div className="register-input-name"><p>EmailAddress</p></div>
                <div className="register-input-tools">
                    <CostumersInput
                        onchange={handleChange}
                        nameInput={"EmailAddress"}
                        errorText={errorText.EmailAddress}
                        value={registerUser.EmailAddress}

                    />

                </div>
            </div>
            <div className="register-input-block">
                <div className="register-input-name"><p>Password</p></div>
                <div className="register-input-tools">
                    <CostumersInput
                        onchange={handleChange}
                        nameInput={"Password"}
                        errorText={errorText.Password}
                        value={registerUser.Password}

                    />

                </div>
            </div>
            <div className="register-input-block">
                <div className="register-input-name"><p>ConfirmPassword</p></div>
                <div className="register-input-tools">
                    <CostumersInput
                        onchange={handleChange}
                        nameInput={"ConfirmPassword"}
                        errorText={errorText.ConfirmPassword}
                        value={registerUser.ConfirmPassword}

                    />

                </div>
            </div>
            <div className="register-save-tools">
                <button onClick={handleClick}>Register</button>
                <p onClick={getRegister}>Cancel</p>
            </div>

        </div>
    </div>
        </>

};

export default RegisterForm;