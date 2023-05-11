import "./style.scss"
import Sidebar from "./pages/sidebar";
import React, {useState} from "react";
import Header from "./pages/header";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Bmw from "./pages/bmw";
import Mercedes from "./pages/mersedes";
import Opel from "./pages/opel";
import Toyota from "./pages/toyota";
import Collections from "./pages/catalog";
import AddNewCollection from "./pages/addNewCollection";
import AddNewProduct from "./pages/addNewProduct";

const AdminPage = () => {
    const [navActive,setNavActive] = useState(false)

    return <div className="AdminPage-wrapper">
        <Sidebar navActive={navActive} />
        <div className={`admin-section  ${navActive ? "active" : ''}`}>
            <Header setNavActive={setNavActive} navActive={navActive}/>
            <main className="scroll-container">
                <div className="routing-container">
                    <Routes>
                        <Route index path="*" element={<Collections/>}/>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="bmw" element={<Bmw/>}/>
                        <Route path="mercedes" element={<Mercedes/>}/>
                        <Route path="toyota" element={<Toyota/>}/>
                        <Route path="opel" element={<Opel/>}/>
                        <Route path={"/addNewProduct"} element={<AddNewProduct/>}/>
                        <Route path="collections" element={<Collections/>}/>
                    </Routes>
                </div>

            </main>
        </div>
    </div>
}
export default AdminPage