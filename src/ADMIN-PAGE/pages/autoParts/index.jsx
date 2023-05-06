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
import useAutoPartsServices from "../../API/autoPartsServices";
import {useProducts} from "../../../hooks/useSortProducts";

const AutoParts = ({carName, autoPartsList, loading}) => {
    const dispatch = useDispatch()
    const [starsList, setStartsList] = useState([])
    const [btnDeleteID, setBtnDeleteID] = useState('')
    const [search, setSearch] = useState('')
    const [sortAndSearch, setSortAndSearch] = useState({
        sort:'',
        query:''
    })
    // const sortedAndSearchedList = useProducts(autoPartsList,sortAndSearch.sort,sortAndSearch.query)

    const deleteAutoParts = async (id) => {
        setBtnDeleteID(id)
        const result = await useAutoPartsServices.deleteAutoParts(id)
        setBtnDeleteID('')
        dispatch(deleteProduct(id))

    }

    const sortedAndSearchedList =  useMemo(() => {
        if (sortAndSearch.sort) {
            return [...autoPartsList].sort((a, b) => a[sortAndSearch.sort].localeCompare(b[sortAndSearch.sort]))
        }
        if(sortAndSearch.query){
            return  autoPartsList.filter(item => item.name.includes(sortAndSearch.query))
        }
        return autoPartsList
    }, [sortAndSearch.sort,autoPartsList,sortAndSearch.query])




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
                        <CostumersInput
                            onchange={(e) => setSortAndSearch({...sortAndSearch,query: e.target.value})}
                            placeholder="Search Here"
                        />
                        <span className="icon-search"></span>
                    </div>
                    <div className="sort-select-box">
                        <MySelect
                            defaultValue={"Sort by"}
                            optionList={[
                                {value: 'name', name: 'Name', id: 1},
                                {value: 'productTags', name: 'Tags', id: 2},
                            ]}
                            onchange={(sort)=>setSortAndSearch({...sortAndSearch,sort: sort})}
                            value={sortAndSearch.sort}

                        />
                    </div>

                </div>
            </div>
            <AutoPartsItem starsList={starsList}
                           deleteAutoParts={deleteAutoParts}
                           loading={loading}
                           carName={carName}
                           autoPartsList={sortedAndSearchedList}
                           btnDeleteID={btnDeleteID}
            />


        </div>
    </>
}
export default AutoParts