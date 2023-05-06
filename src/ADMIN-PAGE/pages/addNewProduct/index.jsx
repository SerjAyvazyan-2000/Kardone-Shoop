import "./style.scss"
import {json, useLocation} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import {FaCloudUploadAlt} from "react-icons/fa"
import MyInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import MyButton from "../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios, {get} from "axios";
import {setCollection} from "../../../store/reducers/collection";
import useValidateNewProduct from "./validateNewProduct";
import AutoPartsImages from "./autoPartsImages";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAutoPartsServices from "../../API/autoPartsServices";
import useCollectionServices from "../../API/collectionServices";


const AddNewProduct = () => {
    const location = useLocation()
    const {
        validation,
        newAutoParts,
        errorText,
        setNewAutoParts,
        setErrorText,


    } = useValidateNewProduct(location.state.carName)
    const [btnLoading, setBtnLoading] = useState(true)
    const [btnUpdate, setBtnUpdate] = useState(true)
    const [btnUpdating, setBtnUpdating] = useState(true)

    const collectionList = useSelector(state => state.Collection.collectionList)
    const dispatch = useDispatch()

    const optionListVendor = [
        {name: 'Armenia'},
        {name: 'China'},
        {name: 'Russian'},
        {name: 'America'},
    ]
    const optionListTags = [
        {name: "Coupe"},
        {name: "Hatchback"},
        {name: "Sedan"},
        {name: "Headlight"},
        {name: " Wheel Nuts"},
    ]

    const getCollection = async () => {
        const result = await useCollectionServices.getCollection()
        if (result) {
            dispatch(setCollection(result))
        }

    }

    useEffect(() => {
        getCollection()
    }, [])

    const handelChange = (e) => {
        setNewAutoParts({...newAutoParts, [e.target.name]: e.target.value})
        setErrorText({...errorText, [e.target.name]: ''})

        if (e.target.files) {
            const selectedImage = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                newAutoParts.productImages.push(reader.result)
                setErrorText({...errorText, productImages: ''})
                setNewAutoParts(newAutoParts);
                localStorage.setItem("newAutoParts", JSON.stringify(newAutoParts))
            };
            reader.readAsDataURL(selectedImage);
        }
    }

    const handelChangeSelect = (name, nameOptionList) => {
        if (nameOptionList === "collectionList") {
            setNewAutoParts({...newAutoParts, productType: name})
            setErrorText({...errorText, productType: ''})

        }
        if (nameOptionList === "optionListVendor") {
            setNewAutoParts({...newAutoParts, vendor: name})
            setErrorText({...errorText, vendor: ''})
        }
        if (nameOptionList === 'optionListTags') {
            setNewAutoParts({...newAutoParts, productTags: name})
            setErrorText({...errorText, productTags: ''})
        }
    }


    const deletePartsImage = (index) => {
        newAutoParts.productImages.forEach((item, i) => {
            if (index === i) {
                newAutoParts.productImages.splice(index, 1)
                setNewAutoParts({...newAutoParts})

            }
        })

    }

    const createAutoParts = async () => {
        setBtnLoading(false)
        const result = await useAutoPartsServices.createAutoParts(newAutoParts)
        if (result) {
            setBtnLoading(true)
            await getCollection()
            toast.success("the product has been shipped")
        }
    }
    const updateAutoParts = async (id) => {
        const body = newAutoParts
        delete body._id
        setBtnUpdating(false)
        const result = await useAutoPartsServices.updateAutoParts(id, body)
        await getCollection()
        toast.success("Updating ok")
        setBtnUpdating(true)
    }
    const handleClick = async () => {
        if (validation()) {
            if (location.state.editItem) {
                await updateAutoParts(newAutoParts._id)
                setNewAutoParts({
                    ...newAutoParts,
                    productTags: '',
                    price: '',
                    starPoints: '',
                    name: '',
                    weight: '',
                    description: '',
                    vehicleType: '',
                })
                newAutoParts.productImages.forEach((item, index) => {
                    newAutoParts.productImages.splice(item, newAutoParts.productImages.length + 1)
                })
            } else {
                await createAutoParts()
                // setProductCollection(newAutoParts)
                setNewAutoParts({
                    ...newAutoParts,
                    productTags: '',
                    price: '',
                    starPoints: '',
                    name: '',
                    weight: '',
                    description: '',
                    vehicleType: '',
                })
                newAutoParts.productImages.forEach((item, index) => {
                    newAutoParts.productImages.splice(item, newAutoParts.productImages.length + 1)
                })

            }
        }
    }
    const buttonName = () => {
        let btnText = 'Save Collection'

        if (btnLoading === false) {
            btnText = "Loading..."

        }
        if (btnUpdate === false) {
            btnText = "Update"

        }
        if (btnUpdating === false) {
            btnText = "Updating..."

        }
        return btnText
    }

    useEffect(() => {
        if (location.state.editItem) {
            setNewAutoParts(location.state.editItem)
            setBtnUpdate(false)
        }
    }, [])

    // const updateCollection = async (id) => {
    //      const result = await useCollectionServices.updateCollection(id)
    //     console.log(result,"fsyo update exav")
    // }
    // function setProductCollection (newAutoParts) {
    //     collectionList.forEach((item,index)=>{
    //          if(item.name === newAutoParts.productType){
    //             item.productList.push(newAutoParts)
    //              updateCollection(item._id)
    //          }
    //     })
    // }

    return <>
        <div className="add-new-product-section">
            <div className="add-product-header">
                <p>{location.state ? location.state.carName : null}</p>  <i className="icon-arrow-right"></i>
                <span>{location.state.editItem ? `Update Auto Parts` : "Add New Product"}</span>
            </div>

            <div className="add-product-box">
                <div className="add-product-title">
                    <p>{location.state.editItem ? `Update Auto Parts ` : "Add New Product"}</p></div>

                <div className="add-product-tools-box">
                    <div className="product-tools-row-1">
                        <div className="product-title-input">
                            <MyInput
                                nameText={"Product Name"}
                                placeholder={"Enter product name"}
                                nameInput={"name"}
                                onchange={handelChange}
                                value={newAutoParts.name}
                                errorText={errorText.name}

                            />
                        </div>
                        <div className="product-description-box">
                            <div className="description-title"><p>Description</p></div>
                            <div className="description-textarea">
                                <textarea value={newAutoParts.description} name={"description"}
                                          onChange={handelChange}/>
                            </div>
                        </div>

                        <div className="product-images-box">
                            <div className="product-images-title"><p>Product Images</p></div>
                            <div className="add-images-bpx G-center-flex-direction">
                                <div className="upload-image-icon"><FaCloudUploadAlt/></div>
                                <div className="upload-description"><p>Drag&Drop Your File(s)Here To Upload</p></div>
                                <div className="upload-tools-btn">
                                    <label htmlFor="file">or select file to upload</label>
                                    <input onChange={handelChange} id="file" type="file"/>
                                </div>

                                {newAutoParts.productImages.length ?
                                    <div className="upload-images-box">
                                        {newAutoParts.productImages.map((item, index) => {
                                            return <AutoPartsImages key={index}
                                                                    deletePartsImage={deletePartsImage}
                                                                    item={item}
                                                                    index={index}
                                            />
                                        })}
                                    </div>

                                    : null}

                            </div>
                            <div className="images-errorText">
                                <p>{errorText.productImages}</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-tools-row-2">
                        <div className="product-price-box">
                            <div className="product-price">
                                <MyInput
                                    nameText="Price"
                                    placeholder={"00:00"}
                                    nameInput={'price'}
                                    onchange={handelChange}
                                    value={newAutoParts.price}
                                    errorText={errorText.price}
                                />
                            </div>
                            {/*временно, пусть останется здесь и напишите максимально возможную цену со скидкой*/}
                            {/*<div className="product-compare-price">*/}
                            {/*    <CostumersInput nameText="Compare at Price" placeholder={"00:00"}/>*/}
                            {/*</div>*/}
                            {/*временно, пусть останется здесь и напишите максимально возможную цену со скидкой*/}

                            <div className="product-compare-price">
                                <MyInput
                                    nameText="Star Points"
                                    placeholder={"00:00"}
                                    type={"number"}
                                    nameInput={'starPoints'}
                                    onchange={handelChange}
                                    value={newAutoParts.starPoints}
                                    errorText={errorText.starPoints}
                                />
                            </div>
                        </div>
                        {/*====================Select boxes================*/}
                        <div className="product-selected-box">


                            <div className="select-product-type">
                                <p>Product Type</p>
                                <MySelect
                                    defaultValue="Product Type"
                                    optionList={collectionList}
                                    onchange={handelChangeSelect}
                                    nameOptionList={"collectionList"}
                                    errorText={errorText.productType}
                                />
                            </div>

                            <div className="select-vendor-type">
                                <p>Vendor</p>
                                <MySelect
                                    defaultValue="Country"
                                    optionList={optionListVendor}
                                    onchange={handelChangeSelect}
                                    nameOptionList={"optionListVendor"}
                                    errorText={errorText.vendor}
                                />
                            </div>


                        </div>
                        {/*====================Select boxes================*/}
                        <div className="product-weight">
                            <MyInput
                                nameText={"Weight"}
                                placeholder={"Enter Products Weight"}
                                nameInput={'weight'}
                                onchange={handelChange}
                                value={newAutoParts.weight}
                                errorText={errorText.weight}

                            />
                        </div>
                        <div className="products-tags-box">
                            <p>Product Tags</p>
                            <MySelect
                                defaultValue={"Coupe"}
                                optionList={optionListTags}
                                onchange={handelChangeSelect}
                                nameOptionList={"optionListTags"}
                                errorText={errorText.productTags}

                            />
                        </div>
                        <div className="products-vehicle-box">
                            <MyInput
                                nameText={"Vehicle  Type"}
                                nameInput={"vehicleType"}
                                placeholder={location.state.carName}
                                value={newAutoParts.vehicleType}
                                onchange={handelChange}
                                errorText={errorText.vehicleType}
                            />
                        </div>

                        <div className="product-save-box">
                            <MyButton
                                name={buttonName()}
                                bgColor={"red"}
                                hover={"black"}
                                onClick={handleClick}
                            />
                        </div>


                    </div>

                </div>
            </div>


        </div>
        <ToastContainer/>

    </>
}
export default AddNewProduct