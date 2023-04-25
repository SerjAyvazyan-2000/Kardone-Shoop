import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../hooks/test-information";
import axios from "axios";
import {setCollection} from "../../../store/reducers/collection";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../../../store/reducers/bmwAutoParts";
import {useEffect} from "react";

const Bmw = () => {
    const {featuredProducts} = useInformation()
    const bmwAutoParts = useSelector(state => state.BmwAutoParts.BmwProductList)
    const dispatch = useDispatch()
    const getCollection = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/newAutoParts')
        if (result.data) {
            dispatch(setProduct(result.data))
        }
    }
    useEffect(() => {
        getCollection()
    }, [])

    return <div className="bmw-section">
        <AutoParts
            carName={"BMW"}
            autoPartsList={bmwAutoParts}

        />
    </div>
}
export default Bmw