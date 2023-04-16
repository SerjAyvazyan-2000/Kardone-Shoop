
import "./style.scss"

const MyModal = ({children,onClose}) => {

    return <div className="my-modal-box">
        <div onClick={onClose} className="modal-bg"></div>
             <div className="modal-content">
                 {children}
        </div>
    </div>
}
export default MyModal