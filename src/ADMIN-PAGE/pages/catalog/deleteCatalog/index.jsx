import "./style.scss"
import MyButton from "../../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import {deleteCollection} from "../../../../store/reducers/collection";
import axios from "axios";
import {useEffect, useState} from "react";

const DeleteCollection = ({name, onClose, id}) => {
    const collectionRedux = useSelector(state => state.Collection.collectionList)
    const [btnDelete,setBtnDelete] = useState(true)

    const dispatch = useDispatch()
    const deleteCollectionRedux = async () => {
        dispatch(deleteCollection(id))
        await deleteCollectionCrud()

    }
    const btnDeleteText = () => {
         let newTextBtn = 'Yes'
        if(btnDelete === false){
            newTextBtn = 'Deleting...'
        }
        return newTextBtn

    }


    const deleteCollectionCrud = async () => {
        setBtnDelete(false)
        const result = await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection/${id}`)
        if (result) {
            setBtnDelete(true)
        }


    }


    return <div className="delete-product-box">
        <div className="delete-text"><h3>Are you sure you want to delete {name}?</h3></div>
        <div className="delete-tools">
            <MyButton onClick={deleteCollectionRedux} name={btnDeleteText()} bgColor={"red"} hover={"black"}/>
            <MyButton onClick={onClose} name={"No"} bgColor={"red"} hover={"black"}/>
        </div>
    </div>
}

export default DeleteCollection