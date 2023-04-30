import "./style.scss"
import Header from "../header";
import React, {useEffect, useMemo, useState} from "react";
import {Link, NavLink, useLocation} from 'react-router-dom'
import useInformation from "../../../hooks/test-information";
import ScrollTop from "../../Components/scrollTop";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import EmptyList from "../../Components/emptyList";


const Sale = () => {
    const [activeNav, setActiveNav] = useState("")
    const [activeIcon, setActiveIcon] = useState("")
    const [autoParts, setAutoParts] = useState([])
    const [loadingParts, setLoadingParts] = useState(false)
    let location = useLocation();
    const getAutoParts = async () => {
        setLoadingParts(true)
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
        if (result.data) {
            if(!location.state){
                let newList = result.data.filter((item,index)=>{
                    return index < 10
                })
                setAutoParts(newList)
                setLoadingParts(false)


            }else {
                let newList = result.data.filter(item => item.productType === location.state.name)
                setAutoParts(newList)
                setLoadingParts(false)
            }


        }
    }
    useEffect(() => {
        getAutoParts()
    },[])
    useEffect(() => {
        if(location.state){
            getAutoParts()
        }

    },[location.state])


    const filterProducts = (name) => {
        if (name === 'all') {
            setActiveNav("all")
        }
        if (name === 'Coupe') {
            setActiveNav("Coupe")
        }
        if (name === 'Hatchback') {
            setActiveNav("Hatchback")
        }
        if (name === 'Sedan') {
            setActiveNav("Sedan")
        }
        if (name === 'Vehicle Body Type') {
            setActiveNav("Vehicle Body Type")
        }
        if (name === 'Wheel Nuts') {
            setActiveNav("Wheel Nuts")
        }
        if (name === 'Year') {
            setActiveNav("Year")
        }

    }
    const handelClick = (name) => {
        if (name === "text") {
            setActiveIcon("text")
        }
        if (name === "textNone") {
            setActiveIcon("textNone")
        }
    }

    return <>
        <Header/>
        <section className="sale-section">
            <div className="sale-header">
                <div className="G-container">
                    <div className="sale-header-text">
                        <h4><NavLink to={"/home"}>HOME</NavLink> <i className="icon-arrow-right"></i> <NavLink
                            to={"/catalog"}>COLLECTIONS</NavLink> <i
                            className="icon-arrow-right"></i><span>
                            {!location.state ? "Exterior" : location.state.name}
                        </span></h4>
                    </div>
                </div>

            </div>
            <div className="G-container">
                <div className="sale-title">
                    <h3> {!location.state ? "Exterior" : location.state.name}</h3>
                </div>
                <div className="sale-catalog-description">
                    <p>  {!location.state ?
                        "     We spend endless hours in traffic jams; we like to eat in a car, like to listen to music and so\n" +
                        "                        on. And you know it is true. We believe that everything must be perfect in our business. We\n" +
                        "                        produce and sell only professional parts - that’s why we have a great number of devoted clients\n" +
                        "                        all over the country and there is nothing better than the happy and satisfied customers. We use\n" +
                        "                        the achievements of progress and provide some new technologies. Car is more than a piece of a\n" +
                        "                        metal, it became a social phenomenon. Our goods are real bestsellers; we are offering a great\n" +
                        "                        list of some unique spare parts that have no analogues. Have you ever noticed that we often try\n" +
                        "                        to\n" +
                        "                        talk to the car as if it was a human? We use the achievements of progress and provide some new\n" +
                        "                        technologies."
                        : location.state.description} </p>
                </div>
                <div className="filter-button-box">
                    <ul>
                        <li onClick={() => filterProducts("all")}
                            className={activeNav === "all" ? "filter-active" : null}>All
                        </li>
                        <li onClick={() => filterProducts("Coupe")}
                            className={activeNav === "Coupe" ? "filter-active" : null}>Coupe
                        </li>
                        <li onClick={() => filterProducts("Hatchback")}
                            className={activeNav === "Hatchback" ? "filter-active" : null}>Hatchback
                        </li>
                        <li onClick={() => filterProducts("Sedan")}
                            className={activeNav === "Sedan" ? "filter-active" : null}>Sedan
                        </li>
                        <li onClick={() => filterProducts("Vehicle Body Type")}
                            className={activeNav === "Vehicle Body Type" ? "filter-active" : null}>Vehicle Body Type
                        </li>
                        <li onClick={() => filterProducts("Wheel Nuts")}
                            className={activeNav === "Wheel Nuts" ? "filter-active" : null}>Wheel Nuts
                        </li>
                        <li onClick={() => filterProducts("Year")}
                            className={activeNav === "Year" ? "filter-active" : null}>Year
                        </li>
                    </ul>
                </div>
                <div className="sort-desqription-products">
                    <div className="control-description">
                        <span onClick={() => handelClick("text")}
                              className={`icon-list2 ${activeIcon === "text" ? "text-active" : null}`}></span>
                        <span onClick={() => handelClick("textNone")}
                              className={`icon-list2 ${activeIcon === "textNone" ? "text-active" : null}`}></span>
                    </div>
                    <div className="sort-products">
                        <div className="select-show">
                            <span>Show</span><select name="" id="">
                            <option value="">4</option>
                            <option value="">6</option>
                            <option value="">8</option>
                            <option value="">10</option>
                        </select>
                        </div>
                        <div className="select-sort">
                            <select name="" id="">
                                <option value="">Featured</option>
                                <option value="">Best Selling</option>
                                <option value="">Name: A – Z</option>
                                <option value="">Name: Z – A</option>
                                <option value="">Price: low to high</option>
                                <option value="">Price: high to low</option>
                                <option value="">Oldest to newest</option>
                                <option value="">Newest to oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
                {!loadingParts ?
                    <>
                        {autoParts.length ?
                            <>
                                <div className="sale-products-list">
                                    {autoParts.map((item, index) => {
                                        return <div className="sale-products-item ">
                                            <Link to={`/product/${item._id}`}
                                                // state={{name: item.name, categories: item.categories}}
                                                  className="item-products-image G-image"
                                            >
                                                {item.productImages.length ?
                                                     <div className="product-images" style={{backgroundImage: `url(${item.productImages[0]})`}}></div>
                                                    : null}
                                                <div className="item-products-info">
                                                    <p>{item.productName}</p>
                                                    <p>{item.price}$</p>
                                                    <button>Add To Cart <span className="icon-cart"></span></button>
                                                </div>

                                            </Link>


                                        </div>
                                    })}

                                </div>
                                <div className="products-API-select">
                                    <div className="G-container">
                                        <div className="products-select-box">
                                            <div className="products-length">
                                                <p>
                                                    of 1 – 8 product(s) {autoParts.length} -es cuyc em talis qanaky
                                                </p>
                                            </div>
                                            <div className="products-Api-count">
                                                <p>

                                                    <span><i className="icon-arrow-left"></i> Previous</span>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>Next  <i className="icon-arrow-right"></i></span>


                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>


                            : <EmptyList/>}

                    </>

                    : <LoaderBox loading={loadingParts}/>}


            </div>

        </section>
        <ScrollTop/>
    </>
}
export default Sale