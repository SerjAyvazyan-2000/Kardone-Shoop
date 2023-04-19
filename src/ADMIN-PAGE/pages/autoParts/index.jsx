
import "./style.scss"
import {NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import {useState} from "react";
import AddNewProduct from "../addNewProduct";
import MySelect from "../../../UI/mySelect";
import EmptyList from "../emptyList";

const AutoParts = ({carName,autoPartsList}) => {
    const optionListSort = [
        {name:'Dropdown link',id:1},
        {name:'Dropdown link',id:2}

    ]

    return <>
     <div className="auto-parts-box">
          <div className="auto-parts-title">
              <p>{carName}</p>  <i className="icon-arrow-right"></i> <span>Products</span>
          </div>
       <div className="auto-parts-header">
             <div className="route-add-product">
                 <NavLink to={"/addNewProduct"} state={{carName}} >New Product
                     <span className="icon-plus"></span>
                 </NavLink>

             </div>
             <div className="filter-parts-box">
                 <div className="search-filter">
                     <CostumersInput placeholder="Search Here" />
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
         {autoPartsList ?
             <div className="auto-parts-products">
                 {autoPartsList.map((item,index)=> {
                     return <div className="auto-parts-item ">
                          <div style={{backgroundImage:`url(${item.img})`}} className="auto-parts-image G-image"></div>
                         <div className="auto-parts-information">
                             <div className="parts-name-box">
                                 <p>{item.name}</p>
                             </div>
                             <div className="parts-prise-sale-box">
                                 <div className="parts-sales"><p><span>{autoPartsList.length}</span> Sales</p></div>
                                 <div className="parts-prise"><p>{item.prise}</p></div>
                             </div>
                             <div className="parts-stars">
                                 <span>&#11088;</span>
                                 <span>&#11088;</span>
                                 <span>&#11088;</span>
                                 <span>&#11088;</span>
                                 <span>&#11088;</span>
                             </div>
                         </div>
                     </div>
                 })}
             </div>


          :
           <EmptyList
               productType={"Product"}
               routeName={"/addNewProduct"}
               carName={carName}
           />
         }

     </div>
        </>
}
export default AutoParts