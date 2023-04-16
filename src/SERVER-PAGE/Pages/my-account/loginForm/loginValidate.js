import {useState} from "react";


const useEmailValidate = () => {
    const [loginUser, setLoginUser] = useState({
        Password: '',
        Email: ''
    })
    const [errorText, setErrorText] = useState({
        Password: '',
        Email: ''
    })

    const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const validation = () => {
        let validate = true
        let errorString = {
            Password: '',
            Email:''
        }
        if (!loginUser.Password.trim().length) {
            validate = false
            errorString.Password = "Fill in the required Password"
        }
        if (!loginUser.Email.trim().length) {
            validate = false
            errorString.Email = "Fill in the required LastName"
        }else if(!validateMail.test(loginUser.Email)){
            validate = false
            errorString.Email = "Fill in the email"

        }
        setErrorText(errorString)
        return validate

    }
    return {validation,loginUser,setLoginUser,errorText,setErrorText}
}
export default useEmailValidate