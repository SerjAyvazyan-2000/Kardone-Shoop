import "./style.scss"
import {useLocation} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import {FaCloudUploadAlt} from "react-icons/fa"
import MyInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import MyButton from "../../../UI/myButton";

const AddNewProduct = () => {
  const location = useLocation()

    const optionListProductType = [
        {name:'test'},
        {name:'On'},
        {name:'Off'},

    ]
    const optionListVendor = [
        {name:'China'},
        {name:'Russian'},
        {name:'America'},
    ]
    const optionListCollection = [
        {name:'Exterior'},
        {name:'Body Parts'},
        {name:'Lighting'},
    ]

    return <div className="add-new-product-section">
        <div className="add-product-header">
            <p>{location.state ? location.state.carName : null}</p>  <i className="icon-arrow-right"></i> <span>Add New Product</span>
        </div>

        <div className="add-product-box">
            <div className="add-product-title"><p>Add New Product</p></div>

            <div className="add-product-tools-box">
                <div className="product-tools-row-1">
                    <div className="product-title-input">
                        <MyInput nameText={"Product Title"} placeholder={"Enter product title"}/>
                    </div>
                    <div className="product-description-box">
                        <div className="description-title"><p>Description</p></div>
                        <div className="description-textarea"><textarea/></div>
                        <div className="errorText-textarea"><p></p></div>
                    </div>

                    <div className="product-images-box">
                        <div className="product-images-title"><p>Product Images</p></div>
                        <div className="add-images-bpx G-center-flex-direction">
                            <div className="upload-image-icon"><FaCloudUploadAlt/></div>
                            <div className="upload-description"><p>Drag&Drop Your File(s)Here To Upload</p></div>
                            <div className="upload-tools-btn">
                                <label htmlFor="file">or select file to upload</label>
                                <input id="file" type="file"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tools-row-2">
                    <div className="product-price-box">
                        <div className="product-price">
                            <CostumersInput nameText="Price" placeholder={"00:00"}/>
                        </div>
                        <div className="product-compare-price">
                            <CostumersInput nameText="Compare at Price" placeholder={"00:00"}/>
                        </div>

                        <div className="product-price">
                            <CostumersInput  nameText="Cost Per Price" placeholder={"00:00"}/>
                        </div>
                        <div className="product-compare-price">
                            <CostumersInput nameText="Star Points" placeholder={"00:00"}/>
                        </div>
                    </div>
                    {/*====================Select boxes================*/}
                    <div className="product-selected-box">


                        <div className="select-product-type">
                            <p>Product Type</p>
                            <MySelect
                                defaultValue="Wheels & Tires"
                                optionList={optionListProductType}

                            />

                        </div>

                        <div className="select-vendor-type">
                            <p>Vendor</p>
                          <MySelect
                              defaultValue={"Armenia"}
                              optionList={optionListVendor}
                          />

                        </div>
                        <div className="select-collection-type">
                            <p>Collection</p>
                            <MySelect
                                optionList={optionListCollection}
                                defaultValue={"Collection"}
                            />
                        </div>


                    </div>
                    {/*====================Select boxes================*/}
                    <div className="product-weight">
                         <MyInput nameText={"Weight"} placeholder={"Enter Products Weight"}/>
                    </div>
                    <div className="products-tags-box">
                         <MyInput nameText={"Product Tags"} placeholder={"Enter Products Tags"}/>
                    </div>
                    <div className="product-save-box">
                        <MyButton
                            name={"Save Product"}
                            bgColor={"red"}
                            hover={"black"}
                        />
                    </div>


                </div>

            </div>
        </div>


    </div>
}
export default AddNewProduct