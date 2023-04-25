import "./style.scss"
import {useLocation} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import MyInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import images from "../../../assets/style/images/logo.png"
import MyButton from "../../../UI/myButton";
import {useEffect, useState} from "react";
import {FaCloudUploadAlt} from "react-icons/fa"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {editCollection, setCollection} from "../../../store/reducers/collection";
import 'react-toastify/dist/ReactToastify.css';


const AddNewCollection = ({onClose, editItem}) => {
    const collectionRedux = useSelector((state) => state.Collection)
    const [btnLoading, setBtnLoading] = useState(true)
    const [btnUpdate, setBtnUpdate] = useState(true)
    const [btnUpdateStart, setBtnUpdateStart] = useState(true)


    const dispatch = useDispatch()

    const [newCollection, setNewCollection] = useState({
        name: '',
        img: null
    })
    const [errorText, setErrorText] = useState({
        name: '',
        img: ''
    })
    const validation = () => {
        let validate = true
        const errorString = {
            name: '',
            img: ''
        }
        if (!newCollection.name) {
            errorString.name = "Fill in the required Name"
            validate = false
        }
        if (!newCollection.img) {
            errorString.img = "Fill in the required images"
            validate = false
        }
        setErrorText(errorString)
        return validate
    }
    const handleChange = (event) => {
        setNewCollection({...newCollection, [event.target.name]: event.target.value})
        setErrorText({...errorText, [event.target.name]: ''})
        if (event.target.files !== null) {
            const selectedImage = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setNewCollection({...newCollection, img: reader.result});
            };
            reader.readAsDataURL(selectedImage);
        }

    }

    const createCollection = async () => {
        setBtnLoading(false)
        const result = await axios.post('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection', newCollection)
        if (result.data) {
            await getCollection()
        }

    }
    const upDateCollection = async (id) => {
        const body = newCollection
        delete body._id
        setBtnUpdateStart(false)
        const result = await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection/${id}`, body)
        if (result) {
            await getCollection()
            setBtnUpdateStart(true)
        }

    }
    const getCollection = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection')
        if (result.data) {
            dispatch(setCollection(result.data))
            setBtnLoading(true)

        }
    }

    const saveCollection = async () => {
        if (validation()) {
            if (editItem) {
                await upDateCollection(editItem._id)
                setNewCollection({...newCollection, name: '', img: null})
                onClose()
            } else {
                await createCollection()
                setNewCollection({...newCollection, name: '', img: null})
                onClose()

            }

        }
    }

    useEffect(() => {
        if (editItem !== undefined) {
            setNewCollection(editItem)
            setBtnUpdate(false)
        }
    }, [])
    const buttonName = () => {
        let btnText = 'Save Collection'
        if (btnUpdate === false) {
            btnText = "Update"
        }
        if (btnLoading === false) {
            btnText = "Loading..."

        }
        if (btnUpdateStart === false) {
            btnText = "Updating..."
        }
        return btnText
    }


    return <>
        <div className="add-new-collection-section">
            <div className="add-collection-header">
                <p>Kardone</p>  <i className="icon-arrow-right"></i> <span>Add New Collection</span>
            </div>
            <div className="add-collection-tools">
                <div className="add-collection-name">
                    <MyInput
                        nameText={"Name"}
                        onchange={handleChange}
                        errorText={errorText.name}
                        nameInput={"name"}
                        value={newCollection.name}
                    />

                </div>
                <div className="add-collection-image">
                    <div className="upload-images-box">
                        <label htmlFor="file">Upload Image</label>
                        <input name="img" onChange={handleChange} id="file" type="file"/>
                        <span className="upload-icon">{<FaCloudUploadAlt/>}</span>
                        <p>{errorText.img}</p>
                    </div>
                    {/*UPLOAD ARAT NKARNERNA LINELU*/}
                    {newCollection.img !== null ?
                        <div className="upload-images-box">
                            {newCollection.img &&
                                <img className="images" src={newCollection.img} alt="Selected Image"/>}
                        </div>
                        : null}

                </div>
                <div className="add-collection-btn">
                    <MyButton
                        name={buttonName()}
                        bgColor={"red"}
                        hover={"black"}
                        onClick={saveCollection}
                    />
                </div>
            </div>


        </div>
    </>
}
export default AddNewCollection