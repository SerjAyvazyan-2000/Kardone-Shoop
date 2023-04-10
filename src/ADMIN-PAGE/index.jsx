import "./style.scss"
import Sidebar from "./pages/sidebar";
import React from "react";
import Main from "./pages/Main";

const AdminPage = () => {

    return <div className="AdminPage-wrapper">
        <div className="container-admin">
            <Main />
        </div>
    </div>
}
export default AdminPage