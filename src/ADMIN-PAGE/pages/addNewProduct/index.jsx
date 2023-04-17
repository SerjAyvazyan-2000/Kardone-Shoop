import "./style.scss"
import {useLocation} from "react-router-dom";
import CostumersInput from "../../../UI/costumersInput";

const AddNewProduct = ({name}) => {


    return <div className="add-new-product-section">
        <div className="add-product-header">
                 <p>BMW</p>  <i className="icon-arrow-right"></i> <span>Add New Product</span>
        </div>

        <div className="add-product-box">
             <div className="add-product-title"><p>Add New Product</p></div>

            <div className="add-product-tools-box">
                 <div className="product-tools-row-1">
                    <div className="product-title-input">
                         <CostumersInput nameText={"Product Title"}/>
                    </div>
                     <div className="product-description-box">
                         <div className="description-title"><p>Description</p></div>
                         <div className="description-textarea"><textarea/></div>
                     </div>

                     <div className="product-images-box">

                     </div>
                 </div>
                <div className="product-tools-row-2">

                </div>

            </div>
        </div>


    </div>
}
export default AddNewProduct