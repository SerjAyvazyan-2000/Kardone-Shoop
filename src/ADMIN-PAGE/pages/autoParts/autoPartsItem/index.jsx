import "./style.scss"
import {NavLink} from "react-router-dom";
import CostumersInput from "../../../../UI/MyInput";
import {useEffect, useState} from "react";
import AddNewProduct from "../../addNewProduct";
import MySelect from "../../../../UI/mySelect";
import EmptyList from "../../emptyList";
import MyButton from "../../../../UI/myButton";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../../../store/reducers/createAutoParts";
import axios from "axios";
import {setEditParts} from "../../../../store/reducers/editAutoParts";
import Loader from "../../../../UI/loader/loader";

const AutoPartsItem = ({carName, autoPartsList, loading,starsList,deleteAutoParts,btnDeleteID}) => {
    const editAutoParts = useSelector(state => state.EditAutoParts.editAutoParts)
    const dispatch = useDispatch()
  const handleEdit = ( element) => {
      dispatch(setEditParts(element))
  }


    return <>
        <div className="auto-parts-box">
            {!loading ?
                <>
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
                                        <p>{element.name}</p>
                                    </div>
                                    <div className="parts-prise-sale-box">
                                        <div className="parts-sales"><p> Sales</p></div>

                                        <div className="parts-prise"><p><i
                                            className="icon-coin-dollar"></i>{element.price}
                                        </p></div>
                                    </div>
                                    <div className="parts-product-tags">
                                        <p>{element.productTags}</p>
                                    </div>
                                    <div className="parts-stars-remove">
                                        {element.starPoints ?
                                            <>

                                                {/*{element.starPoints.length ?*/}
                                                {/*    <>*/}
                                                {/*            <div className="parts-stars">*/}
                                                {/*                {starsList.map((item, index) => {*/}
                                                {/*                    return <span>&#11088;</span>*/}
                                                {/*                })}*/}
                                                {/*            </div>*/}
                                                {/*    </>*/}
                                                {/*    : null}*/}
                                            </>
                                            : null}


                                        <div className="parts-remove">
                                            <MyButton onClick={() => deleteAutoParts(element._id)}
                                                      name={btnDeleteID === element._id ? "Deleting..." : "Remove"}
                                                      bgColor={"red"} hover={"black"}/>
                                        </div>
                                    </div>
                                    <NavLink  to={'/addNewProduct'} state={{editItem:element,carName:element.vehicleType}} className="edit-auto-parts">
                                        <span onClick={()=>handleEdit(element)} className="icon-pencil2"></span>
                                    </NavLink>
                                </div>
                            </div>
                        }) : <EmptyList
                            productType={"Product"}
                            routeName={"/addNewProduct"}
                            carName={carName}
                        />}
                    </div>

                </>

                : <div className="autoParts-loader-box">
                     <Loader/>
                </div>
            }

        </div>
    </>
}
export default AutoPartsItem