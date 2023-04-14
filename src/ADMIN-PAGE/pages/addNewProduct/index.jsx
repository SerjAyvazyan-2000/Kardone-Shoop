import "./style.scss"
import {useLocation} from "react-router-dom";

const AddNewProduct = () => {
    let location = useLocation()
    console.log(location.state)

    return <div className="add-new-product-section">
         hello AddNewProduct
    </div>
}
export default AddNewProduct