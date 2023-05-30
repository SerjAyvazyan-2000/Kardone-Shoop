import React, {useEffect, useState} from "react";
import "./style.scss"
import Header from "../header";
import ScrollTop from "../../Components/scrollTop";
import useInformation from "../../../test-information";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import {useSelector} from "react-redux";
import EmptyList from "../../Components/emptyList";
import {useFetching} from "../../../hooks/useFetching";
import useCollectionServices from "../../../API/collectionServices";
import Loader from "../../../UI/loader/loader";


const Catalog = () => {
    const [catalog, setCatalog] = useState([])
    const  [fetching,loading,error] = useFetching(async ()=>{
        const result = await useCollectionServices.getCollection()
        setCatalog(result)
    })



    useEffect(() => {
        fetching()
    }, [])

    return <>
        <ScrollTop/>
        <Header/>
        <section className="catalog-section">
            <div className="catalog-header">
                <div className="G-container">
                    <div className="catalog-header-text">
                        <h4><NavLink to={"/home"}>HOME</NavLink> <i className="icon-arrow-right"></i>
                            <span>COLLECTIONS</span></h4>
                    </div>
                </div>
            </div>
            <div className="G-container">
                <div className="catalog-title">
                    <h3>COLLECTIONS</h3>
                </div>
            </div>
            <div className="G-container">
                {!loading ?
                <>
                    {catalog.length?
                        <div className="catalog-pages">
                            {catalog.map((item, index) => {

                                return <Link
                                    state={{name: item.name, description: item.description}}
                                    to="/sale"
                                    key={index}
                                    className="catalog-item G-image "
                                    style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="catalog-tem-bg"></div>
                                    <div className="catalog-item-info ">
                                        <h3>{item.name}</h3>
                                        <p></p>
                                    </div>
                                </Link>
                            })}
                        </div>

                    : <EmptyList/>}

                </>
                :
                    <Loader loading={loading}/>
                  }

            </div>

        </section>
        <ScrollTop/>
    </>
}
export default Catalog