import "./style.scss"
import {NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import {useEffect, useState} from "react";
import AddNewProduct from "../addNewProduct";
import MySelect from "../../../UI/mySelect";
import EmptyList from "../emptyList";
import MyButton from "../../../UI/myButton";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../../store/reducers/bmwAutoParts";
import axios from "axios";

const AutoParts = ({carName, autoPartsList}) => {
    const dispatch = useDispatch()
    const [starsList, setStartsList] = useState([])
    const [btnDelete, setBtnDelete] = useState(false)

    const optionListSort = [
        {name: 'Dropdown link', id: 1},
        {name: 'Dropdown link', id: 2}

    ]

    const startsFunc = (number) => {
        for (let i = 0; i <= number; i++) {
            starsList.push(i)
        }
    }

    useEffect(() => {
        if (!starsList.length && autoPartsList) {
            autoPartsList.forEach((item, index) => {
                if (item.starPoints && item.starPoints > 0) {
                    startsFunc(item.starPoints)
                }
            })
        }
    })
    const deleteCollectionCrud = async (id) => {
        setBtnDelete(true)
        const result = await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts/${id}`)
        if (result) {
            setBtnDelete(false)
            dispatch(deleteProduct(id))
        }

    }
    const deleteAutoParts = async (id) => {
        await deleteCollectionCrud(id)
    }
    const btnTextFunc = () => {
        let btnText = "Remove"
        if (btnDelete) {
            btnText = "Deleting..."
        }
        return btnText
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
                        <CostumersInput placeholder="Search Here"/>
                        <span className="icon-search"></span>
                    </div>
                    <div className="sort-select-box">
                        <MySelect
                            defaultValue={"Sort"}
                            optionList={optionListSort}
                        />
                    </div>

                </div>

            </div>
                <div className="auto-parts-products">
                    {autoPartsList.length ? autoPartsList.map((element, index) => {
                        return <div className="auto-parts-item ">
                            {element.productImages ?
                                <>
                                    {element.productImages.length ?
                                        <div className="auto-parts-image-box">
                                            {element.productImages.map((image, index) => {
                                                return <div style={{backgroundImage: `url(${image})`}}
                                                            className="auto-parts-image G-image"></div>
                                            })}
                                        </div>
                                        : null}
                                </>
                                : null
                            }

                            <div className="auto-parts-information">
                                <div className="parts-name-box">
                                    <p>{element.productName}</p>
                                </div>
                                <div className="parts-prise-sale-box">
                                    <div className="parts-sales"><p><span>{autoPartsList.length}</span> Sales</p></div>
                                    <div className="parts-prise"><p><i className="icon-coin-dollar"></i>{element.price}
                                    </p></div>
                                </div>
                                <div className="parts-stars-remove">
                                    {element.starPoints ?
                                        <>
                                            {element.starPoints.length ?
                                                <>
                                                    {starsList.length ?
                                                        <div className="parts-stars">
                                                            {starsList.map((item, index) => {
                                                                return <span>&#11088;</span>
                                                            })}
                                                        </div>

                                                        : null}
                                                </>
                                                : null}
                                        </>
                                        : null}


                                    <div className="parts-remove">
                                        <MyButton onClick={() => deleteAutoParts(element._id)} name={btnTextFunc()}
                                                  bgColor={"red"} hover={"black"}/>
                                    </div>
                                </div>
                                <div className="edit-auto-parts">
                                    <span className="icon-pencil2"></span>
                                </div>
                            </div>
                        </div>
                    }) : <EmptyList
                        productType={"Product"}
                        routeName={"/addNewProduct"}
                        carName={carName}
                    />}
                </div>

        </div>
    </>
}
export default AutoParts