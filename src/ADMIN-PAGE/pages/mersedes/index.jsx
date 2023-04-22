import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../hooks/test-information";

const Mercedes = () => {
    const {featuredProducts} = useInformation()

    return <div className="mercedes-section">
         <AutoParts
             carName={"MERCEDES"}
             autoPartsList={featuredProducts}
         />
    </div>
}
export default Mercedes