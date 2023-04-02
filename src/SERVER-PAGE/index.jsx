import React from "react";
import "./style.scss"
import Home from "./Pages/home";
import Catalog from "./Pages/catalog";
import MyAccount from "./Pages/my-account";
import Sale from "./Pages/sale";
import Basket from "./Pages/basket";
import Footer from "./Pages/footer";
import {Routes, Route, Outlet, Link} from "react-router-dom";


const ServerPage = () => {


    return <div className="server-wrapper">
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="catalog" element={<Catalog/>}/>
            <Route path="sale" element={<Sale/>}/>
            <Route path="my-account" element={<MyAccount/>}/>
            <Route path="basket" element={<Basket/>}/>

        </Routes>
        <Footer/>
    </div>
}


export default ServerPage

