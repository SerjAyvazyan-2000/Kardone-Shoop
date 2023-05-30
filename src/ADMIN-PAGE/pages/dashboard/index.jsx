import "./style.scss"
import CardBox from "../cardBox";
import {useEffect} from "react";
import InProcess from "../../../utils/InProcess";

const Dashboard = () => {

    useEffect(()=>{
         alert("Dashboard is in process")
    },[])

    return <div className="dashboard-section">
         <InProcess/>
    </div>
}
export default Dashboard