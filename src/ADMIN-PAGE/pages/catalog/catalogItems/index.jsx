import "./style.scss"
import MyButton from "../../../../UI/myButton";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import MyModal from "../../../../UI/myModal";
import DeleteCollection from "../deleteCatalog";
import AddNewCollection from "../../addNewCollection";

const CatalogItems = ({item}) => {
    const collectionRedux = useSelector(state => state.Collection.collectionList)
    const [openModal, setOpenModal] = useState(false)
    const [openDeleteModal, setOpeDeleteModal] = useState(false)
    const [openEditModal, setOpenEditDeleteModal] = useState(false)

    const editCollection = () => {
        setOpenEditDeleteModal(!openEditModal)
    }
    const deleteCollectionModal = () => {
        setOpeDeleteModal(!openDeleteModal)
    }
    return <>
        <div style={{backgroundImage: `url(${item.img})`}}
             className="catalog-parts-item G-image">
            <div className="catalog-tem-bg"></div>
            <div className="catalog-item-info ">
                <h4>{item.name}</h4>
                <p>{collectionRedux.length} Products</p>
            </div>
            <div className="catalog-item-remove">
                <MyButton
                    name={"Remove"}
                    bgColor={"red"}
                    hover={"black"}
                    onClick={deleteCollectionModal}
                />
            </div>
            <div className="catalog-item-edit"><span onClick={editCollection} className="icon-pencil2"></span></div>
        </div>
        {openDeleteModal ? <MyModal onClose={deleteCollectionModal}>
            <DeleteCollection onClose={deleteCollectionModal}
                              id={item._id}
                              name={item.name}
            /> </MyModal> : null}
        {openEditModal ? <MyModal
            children={<AddNewCollection
                editItem={item}
                onClose={editCollection}/>} onClose={editCollection}></MyModal> : null}
    </>
}
export default CatalogItems