import "./style.scss"
import AutoParts from "../autoParts";
import useInformation from "../../../hooks/test-information";

const Opel = () => {
    const {featuredProducts} = useInformation()

    return <div className="opel-section">
        <AutoParts
         carName={"OPEL"}
         autoPartsList={featuredProducts}

        />
    </div>
}
export default Opel