import "./style.scss"
import {NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import {useEffect, useMemo, useState} from "react";
import AddNewProduct from "../addNewProduct";
import MySelect from "../../../UI/mySelect";
import EmptyList from "../emptyList";
import MyButton from "../../../UI/myButton";
import {useDispatch} from "react-redux";
import {deleteProduct, setProduct} from "../../../store/reducers/createAutoParts";
import axios from "axios";
import AutoPartsItem from "./autoPartsItem";

const AutoParts = ({carName, autoPartsList, loading}) => {
    const dispatch = useDispatch()
    const [starsList, setStartsList] = useState([])
    const [btnDeleteID, setBtnDeleteID] = useState('')
    const [search, setSearch] = useState('')
    const [sortValue,setSortValue] = useState('')



    const optionListSort = [
        {value: 'productName',name:'Name', id: 1},
        {value: 'productTags',name:'Tags', id: 1},

    ]
    const deleteAutoParts = async (id) => {
        setBtnDeleteID(id)
        const result = await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts/${id}`)
        if (result) {
            setBtnDeleteID('')
            dispatch(deleteProduct(id))
        }

    }
    useEffect(()=>{
        if(search){
            let newList =  autoPartsList.filter(item => item.productName.includes(search))
            dispatch(setProduct(newList))
        }
    },[search])

    useMemo(()=>{
         if(sortValue){
             let newSortList = [...autoPartsList].sort((a,b)=>a[sortValue].localeCompare(b[sortValue]))
             dispatch(setProduct(newSortList))
         }
    },[sortValue])

    const handleSort = (sort) => {
        setSortValue(sort)


    }




    return <>
        <div className="auto-parts-box">
            <div className="auto-parts-title">
                <p>{carName}</p>  <i className="icon-arrow-right"></i> <span>Products</span>
            </div>
            <div className="auto-parts-header">
                <div className="route-add-product">
                    <NavLink to={"/addNewProduct"} state={{carName}}>New Product
                        <span className="icon-plus"></span>
                    </NavLink>

                </div>
                <div className="filter-parts-box">
                    <div className="search-filter">
                        <CostumersInput onchange={(e)=>setSearch(e.target.value)} placeholder="Search Here"/>
                        <span className="icon-search"></span>
                    </div>
                    <div className="sort-select-box">
                        <MySelect
                            defaultValue={"Sort by"}
                            optionList={optionListSort}
                            onchange={handleSort}
                            value={sortValue}

                        />
                    </div>

                </div>

            </div>
            <AutoPartsItem starsList={starsList}
                           deleteAutoParts={deleteAutoParts}
                           loading={loading}
                           carName={carName}
                           autoPartsList={autoPartsList}
                           btnDeleteID={btnDeleteID}
            />


        </div>
    </>
}
export default AutoParts