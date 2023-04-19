import "./style.scss"
import useInformation from "../../../hooks/test-information";
import AutoParts from "../autoParts";

const Toyota = () => {
    const {featuredProducts} = useInformation()

    return <div className="toyota-section">
         <AutoParts
          autoPartsList={featuredProducts}
          carName={"TOYOTA"}
         />
    </div>
}
export default Toyota