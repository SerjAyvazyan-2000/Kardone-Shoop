import {useState} from "react";


const useRegisterValidate = () => {
    const [registerUser, setRegisterUser] = useState({
        FirstName:'',
        LastName:'',
        EmailAddress:'',
        Password:'',
        ConfirmPassword:''
    })
    const [errorText, setErrorText] = useState({
        FirstName:'',
        LastName:'',
        EmailAddress:'',
        Password:'',
        ConfirmPassword:''
    })

    const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const validation = () => {
        let validate = true
        let errorString = {
            FirstName:'',
            LastName:'',
            EmailAddress:'',
            Password:'',
            ConfirmPassword:''
        }
        if(!registerUser.FirstName.trim().length){
            validate = false
            errorString.FirstName = "Fill in the required FirstName"
        }
        if(!registerUser.LastName.trim().length){
            validate = false
            errorString.LastName = "Fill in the required LastName"

        }
        if(!registerUser.EmailAddress.trim().length){
            validate = false
            errorString.EmailAddress = "Fill in the required EmailAddress"

        }else if(!validateMail.test(registerUser.EmailAddress)){
             validate = false
            errorString.EmailAddress = "Fill in the email"

        }
        if(!registerUser.Password.trim().length){
            validate = false
            errorString.Password = "Fill in the required Password"

        }
        if(!registerUser.ConfirmPassword.trim().length){
            validate = false
            errorString.ConfirmPassword = "Fill in the required ConfirmPassword"

        }else if(registerUser.ConfirmPassword !== registerUser.Password){
            validate = false
            errorString.ConfirmPassword = "Password and ConfirmPassword are not equal to each other"

        }
        setErrorText(errorString)
        return validate
    }



  return {validation,registerUser,setRegisterUser,errorText,setErrorText}
}

export default useRegisterValidate