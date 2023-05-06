import "./style.scss"
import useInformation from "../../../test-information";
import AutoParts from "../autoParts";
import axios from "axios";
import {setProduct} from "../../../store/reducers/createAutoParts";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Toyota = () => {
    // const {featuredProducts} = useInformation()
    const bmwAutoParts = useSelector(state => state.CreateAutoParts.autoPartsList)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const getCollection = async () => {
        setLoading(true)
        const result = await axios.get(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts?`)
        if (result.data) {
            let newResult =  result.data.filter(item => item.vehicleType === "TOYOTA")
            dispatch(setProduct(newResult))
            setLoading(false)

        }
    }
    useEffect(() => {
        getCollection()
    }, [])

    return <div className="toyota-section">
         <AutoParts
          autoPartsList={bmwAutoParts}
          carName={"TOYOTA"}
          loading={loading}
         />
    </div>
}
export default Toyota