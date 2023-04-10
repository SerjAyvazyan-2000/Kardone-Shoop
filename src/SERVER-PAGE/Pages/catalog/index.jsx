import React from "react";
import "./style.scss"
import Header from "../header";
import ScrollTop from "../../Components/scrollTop";
import useInformation from "../../../hooks/test-information";
import {Link, NavLink} from "react-router-dom";


const Catalog = () => {
    const {catalog} = useInformation()

    return <>
        <ScrollTop/>
        <Header/>
        <section className="catalog-section">
            <div className="catalog-header">
                <div className="G-container">
                    <div className="catalog-header-text">
                        <h3>HOME <span>COLLECTIONS</span></h3>
                    </div>
                </div>
            </div>
            <div className="G-container">
                <div className="catalog-title">
                    <h3>COLLECTIONS</h3>
                </div>
            </div>
            <div className="G-container">
                {catalog.length ?
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
                                    <p>{item.productsCount} Products</p>
                                </div>
                            </Link>
                        })}
                    </div>


                    :
                    <div>Null</div>
                }
            </div>

        </section>
        <ScrollTop/>
    </>
}
export default Catalog