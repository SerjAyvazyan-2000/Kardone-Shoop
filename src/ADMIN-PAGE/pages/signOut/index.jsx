import "./style.scss"


const SignOut = ({onClose}) => {
    const userToken = localStorage.getItem('userToken')

    const signOut = () => {
        localStorage.setItem('userToken','')
        window.location.reload()
    }


    return <div className="sign-out-box">
        <div className="ask-again-box">
            <h3>Are you sure you want to go out?</h3>
        </div>
        <div className="yes-no-tools">
            <button onClick={signOut}>Yes</button>
            <button onClick={onClose}>No</button>
        </div>
    </div>
}
export default SignOut