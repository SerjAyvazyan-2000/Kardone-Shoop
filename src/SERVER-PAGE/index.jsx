import React from "react";
import "./style.scss"
import Home from "./Pages/home";
import Catalog from "./Pages/catalog";
import MyAccount from "./Pages/my-account";
import Sale from "./Pages/sale";
import Basket from "./Pages/basket";
import Footer from "./Pages/footer";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Products from "./Pages/products";
import Checkout from "./Pages/checkout";


const ServerPage = () => {


    return <div className="server-wrapper">
        <Routes>
            <Route index path="*" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="sale" element={<Sale/>}/>
            <Route path="my-account" element={<MyAccount/>}/>
            <Route path="basket" element={<Basket/>}/>
            <Route path="/product/:id" element={<Products/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
        </Routes>
        <Footer/>
        <div className="cssload-main">
            <div className="cssload-heart">
                <span className="cssload-heartL"></span>
                <span className="cssload-heartR"></span>
                <span className="cssload-square"></span>
            </div>
            <div className="cssload-shadow"></div>
        </div>
    </div>
}


export default ServerPage

