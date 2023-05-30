import "./style.scss"
import MyButton from "../../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import {deleteCollection} from "../../../../store/reducers/collection";
import axios from "axios";
import {useEffect, useState} from "react";
import usePartsCollectionServices from "../../../../API/collectionServices";
import useCollectionServices from "../../../../API/collectionServices";

const DeleteCollection = ({name, onClose, id}) => {
    const collectionRedux = useSelector(state => state.Collection.collectionList)
    const [btnDelete, setBtnDelete] = useState(true)

    const dispatch = useDispatch()
    const deleteCollectionRedux = async () => {
        dispatch(deleteCollection(id))
        await deleteCollectionCrud()
        onClose()

    }
    const btnDeleteText = () => {
        let newTextBtn = 'Yes'
        if (btnDelete === false) {
            newTextBtn = 'Deleting...'
        }
        return newTextBtn

    }

    const deleteCollectionCrud = async () => {
        setBtnDelete(false)
        const result = await useCollectionServices.deleteCollection(id)
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