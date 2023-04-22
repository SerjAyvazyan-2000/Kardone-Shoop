import "./style.scss"
import {Link, NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import useInformation from "../../../hooks/test-information";
import EmptyList from "../emptyList";
import React, {useEffect, useState} from "react";
import MyModal from "../../../UI/myModal";
import AddNewProduct from "../addNewCollection";
import AddNewCollection from "../addNewCollection";
import axios from "axios";
import MyButton from "../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import { setCollection} from "../../../store/reducers/collection";
import DeleteProduct from "./deleteCatalog";
import DeleteCollection from "./deleteCatalog";
import CatalogItems from "./catalogItems";

const Collections = () => {
    const collectionRedux = useSelector(state => state.Collection.collectionList)
    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false)
    // const [openDeleteModal, setOpeDeleteModal] = useState(false)
    // const [openEditModal, setOpenEditDeleteModal] = useState(false)

    const optionListSort = [
        {name: 'Dropdown link', id: 1},
        {name: 'Dropdown link', id: 2}

    ]

    const handleClick = () => {
        setOpenModal(!openModal)
    }
    const getCollection = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection')
         if(result.data){
             dispatch(setCollection(result.data))
         }
    }
    useEffect(() => {
        getCollection()
    }, [])

    // const editCollection = () => {
    //     setOpenEditDeleteModal(!openEditModal)
    //
    // }
    // const deleteCollectionModal = () => {
    //     setOpeDeleteModal(!openDeleteModal)
    // }


    return <>
        <div className="catalog-section-admin">
            <div className="catalog-parts-title">
                <p>Kardone</p>  <i className="icon-arrow-right"></i> <span>COLLECTIONS</span>
            </div>

            <div className="catalog-parts-header">
                <div className="catalog-add-box">
                    <button onClick={handleClick}>Add New COLLECTIONS</button>
                    <span className="icon-plus"></span>
                </div>

                <div className="filter-catalog-box">
                    <div className="search-filter">
                        <CostumersInput placeholder="Search Here"/>
                        <span className="icon-search"></span>
                    </div>
                    <div className="sort-select-box">
                        <MySelect
                            optionList={optionListSort}
                            defaultValue={"Sort"}
                        />
                    </div>
                </div>
            </div>
            {collectionRedux.length ?
                <div className="catalog-parts-boxes">
                    <div className="collection-title-text"><p>COLLECTIONS</p></div>
                    <div className="catalog-boxes-container">
                        {collectionRedux.map((item, index) => {
                            return <CatalogItems
                                item={item}
                                key={index}
                            />
                            // return <div style={{backgroundImage: `url(${item.img})`}}
                            //             className="catalog-parts-item G-image">
                            //     <div className="catalog-tem-bg"></div>
                            //     <div className="catalog-item-info ">
                            //         <h3>{item.name}</h3>
                            //         <p>{collectionRedux.length} Products</p>
                            //     </div>
                            //     <div className="catalog-item-remove">
                            //         <MyButton
                            //             name={"Remove"}
                            //             bgColor={"red"}
                            //             hover={"black"}
                            //             onClick={deleteCollectionModal}
                            //         />
                            //     </div>
                            //     <div className="catalog-item-edit"><span onClick={editCollection} className="icon-pencil2"></span></div>
                                {/*=====================MODAL BOXES=============================*/}
                                // {openDeleteModal ? <MyModal onClose={deleteCollectionModal}><DeleteCollection onClose={deleteCollectionModal}
                                //                                               id={item._id}
                                //                                               name={item.name}
                                //  /> </MyModal> : null}
                                // {openEditModal ? <MyModal
                                //     children={<AddNewCollection
                                //         editItem={item}
                                //         onClose={editCollection}/>} onClose={editCollection}></MyModal> : null}

                                {/*=====================MODAL BOXES=============================*/}
                            // </div>

                        })}
                    </div>

                </div>

                :
                <EmptyList productType={"Catalog"}/>
            }

        </div>
        {openModal ?
            <MyModal children={<AddNewCollection onClose={handleClick}/>} onClose={handleClick}></MyModal> : null}

    </>
}
export default Collections
