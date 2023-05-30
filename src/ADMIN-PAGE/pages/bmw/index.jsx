import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../test-information";
import axios from "axios";
import {setCollection} from "../../../store/reducers/collection";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/createAutoParts";
import {useEffect, useState} from "react";
import useAutoPartsServices from "../../../API/autoPartsServices";

const Bmw = () => {
    const {featuredProducts} = useInformation()
    const bmwAutoParts = useSelector(state => state.CreateAutoParts.autoPartsList)
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()
    const getAutoParts = async () => {
        setLoading(true)
        const result = await useAutoPartsServices.getAutoParts()
        if (result) {
           let newResult =  result.filter(item => item.vehicleType === "BMW")
            dispatch(setProduct(newResult))
            setLoading(false)

        }
    }
    useEffect(() => {
        getAutoParts()
    }, [])

    return <div className="bmw-section">
        <AutoParts
            carName={"BMW"}
            autoPartsList={bmwAutoParts}
            loading={loading}

        />
    </div>
}
export default Bmw