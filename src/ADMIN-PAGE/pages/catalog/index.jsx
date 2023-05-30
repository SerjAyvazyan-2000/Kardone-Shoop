import "./style.scss"
import {Link, NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import useInformation from "../../../test-information";
import EmptyList from "../emptyList";
import React, {useEffect, useMemo, useState} from "react";
import MyModal from "../../../UI/myModal";
import AddNewProduct from "../addNewCollection";
import AddNewCollection from "../addNewCollection";
import axios from "axios";
import MyButton from "../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import {setCollection} from "../../../store/reducers/collection";
import DeleteProduct from "./deleteCatalog";
import DeleteCollection from "./deleteCatalog";
import CatalogItems from "./catalogItems";
import {setProduct} from "../../../store/reducers/createAutoParts";
import usePartsCollectionServices from "../../../API/collectionServices";
import Loader from "../../../UI/loader/loader";
import {useFetching} from "../../../hooks/useFetching";
import {useProducts} from "../../../hooks/useSortProducts";
import useCollectionServices from "../../../API/collectionServices";
import useAutoPartsServices from "../../../API/autoPartsServices";

const Collections = () => {
    const collectionRedux = useSelector(state => state.Collection.collectionList)
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [sortAndSearch, setSortAndSearch] = useState({
        sort: '',
        query: ''

    })
    const [autoPartsList,setAutoPartsList] = useState([])
    const sortedAndSearchedProductList =  useProducts(collectionRedux,sortAndSearch.sort,sortAndSearch.query)

    const [fetching, loading, error] = useFetching(async () => {
        const result = await useCollectionServices.getCollection()
        dispatch(setCollection(result))
    })

    useEffect(() => {
        fetching()
    }, [])



    const handleClick = () => {
        setOpenModal(!openModal)
    }
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
                        <CostumersInput
                            onchange={(e)=>setSortAndSearch({...sortAndSearch,query: e.target.value})}
                            placeholder="Search Here"
                        />
                        <span className="icon-search"></span>
                    </div>
                    <div className="sort-select-box">
                        <MySelect
                            defaultValue={"Sort"}
                            value={sortAndSearch.sort}
                            optionList={[
                                {value: 'name', name: 'Name', id: 1},
                                {value: 'img', name: 'Count', id: 1},
                            ]}
                            onchange={(sortValue) => (setSortAndSearch({...sortAndSearch, sort: sortValue}))}
                        />
                    </div>
                </div>
            </div>
            {!loading ?
                <>
                    {sortedAndSearchedProductList.length ?
                        <div className="catalog-parts-boxes">
                            <div className="collection-title-text"><p>COLLECTIONS</p></div>
                            <div className="catalog-boxes-container">
                                {sortedAndSearchedProductList.map((item, index) => {
                                    return <CatalogItems
                                        item={item}
                                        key={index}
                                    />

                                })}
                            </div>

                        </div>
                        : <EmptyList handleClick={handleClick} productType={"Catalog"}/>}
                </>
                : <div className="loading-collection">
                    <Loader/>
                </div>
            }


        </div>
        {openModal ?
            <MyModal children={<AddNewCollection onClose={handleClick}/>} onClose={handleClick}></MyModal> : null}

    </>
}
export default Collections
