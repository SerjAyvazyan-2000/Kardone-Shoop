import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../hooks/test-information";

const Bmw = () => {
    const {featuredProducts} = useInformation()

    return <div className="bmw-section">
         <AutoParts
             carName={"BMW"}
             autoPartsList={featuredProducts}

         />
    </div>
}
export default Bmw