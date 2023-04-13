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

const AdminPage = () => {
    const [navActive,setNavActive] = useState(false)

    return <div className="AdminPage-wrapper">
        <Sidebar navActive={navActive} />
        <div className={`admin-section  ${navActive ? "active" : ''}`}>
            <Header setNavActive={setNavActive} navActive={navActive}/>
            <main className="scroll-container">
                <Routes>
                    <Route path={"*"} element={<Dashboard/>}/>
                    <Route path={"dashboard"} element={<Dashboard/>}/>
                    <Route path={"bmw"} element={<Bmw/>}/>
                    <Route path={"mercedes"} element={<Mercedes/>}/>
                    <Route path={"toyota"} element={<Toyota/>}/>
                    <Route path={"opel"} element={<Opel/>}/>
                </Routes>
            </main>
        </div>
    </div>
}
export default AdminPage