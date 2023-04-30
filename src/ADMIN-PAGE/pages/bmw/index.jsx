import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../hooks/test-information";
import axios from "axios";
import {setCollection} from "../../../store/reducers/collection";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/createAutoParts";
import {useEffect, useState} from "react";

const Bmw = () => {
    const {featuredProducts} = useInformation()
    const bmwAutoParts = useSelector(state => state.CreateAutoParts.autoPartsList)
    const [loading,setLoading] = useState(false)

    const dispatch = useDispatch()
    const getCollection = async () => {
        setLoading(true)
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
        if (result.data) {
           let newResult =  result.data.filter(item => item.vehicleType === "BMW")
            dispatch(setProduct(newResult))
            setLoading(false)

        }
    }
    useEffect(() => {
        getCollection()
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