import React, {useEffect, useState} from "react";
import "./style.scss"
import Header from "../header";
import ScrollTop from "../../Components/scrollTop";
import useInformation from "../../../hooks/test-information";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import LoaderBox from "../../Components/loaderBox";
import {useSelector} from "react-redux";


const Catalog = () => {
    // const {catalog} = useInformation()
    const [catalog, setCatalog] = useState([])
    const [autoParts, setAutoParts] = useState([])
    const [autoPartsCount, setAutoPartsCount] = useState([])

    const [loading, setLoading] = useState(false)
    const autoPartsListRedux = useSelector(state => state.GetAutoParts.autoPartsList)

    const getAutoParts = async () => {
        setLoading(true)
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
        if (result.data) {
            // handleAutoPartsCount()
            setLoading(false)
            setAutoParts(result.data)

        }
    }
    // const handleAutoPartsCount = () => {
    //     if(catalog.length){
    //         catalog.forEach((element,index)=>{
    //             let newList = autoParts.filter(item => item.productType === element.name)
    //
    //         })
    //     }
    // }

    const getCatalog = async () => {
        setLoading(true)
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newCollection')
        if (result.data) {
            setLoading(false)
            setCatalog(result.data)

        }
    }
    useEffect(() => {
        getCatalog()
        getAutoParts()

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
                                        <p></p>
                                    </div>
                                </Link>
                            })}
                        </div>

                    : <div>EMPTY LIST</div>}



                </>
                : <LoaderBox loading={loading}/>}

            </div>

        </section>
        <ScrollTop/>
    </>
}
export default Catalog