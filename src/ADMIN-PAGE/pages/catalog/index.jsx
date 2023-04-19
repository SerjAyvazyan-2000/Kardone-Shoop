import "./style.scss"
import {Link, NavLink} from "react-router-dom";
import CostumersInput from "../../../UI/MyInput";
import MySelect from "../../../UI/mySelect";
import useInformation from "../../../hooks/test-information";
import EmptyList from "../emptyList";
import React from "react";

const Collections = () => {
    const {catalog} = useInformation()
    const optionListSort = [
        {name: 'Dropdown link', id: 1},
        {name: 'Dropdown link', id: 2}

    ]

    return <div className="catalog-section-admin">
        <div className="catalog-parts-title">
            <p>Kardone</p>  <i className="icon-arrow-right"></i> <span>COLLECTIONS</span>
        </div>

        <div className="catalog-parts-header">
            <div className="catalog-add-box">
                <button>Add New COLLECTIONS</button>
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
        {catalog.length ?
          <div className="catalog-parts-boxes">
              <div className="collection-title-text"><p>COLLECTIONS</p></div>
              <div className="catalog-boxes-container">
                  {catalog.map((item,index)=>{
                      return <div style={{backgroundImage: `url(${item.img})`}} className="catalog-parts-item G-image">
                          <div className="catalog-tem-bg"></div>
                          <div className="catalog-item-info ">
                              <h3>{item.name}</h3>
                              <p>{item.productsCount} Products</p>
                          </div>
                      </div>
                  })}
              </div>

          </div>

         :
            <EmptyList productType={"Catalog"}/>
        }

    </div>
}
export default Collections
