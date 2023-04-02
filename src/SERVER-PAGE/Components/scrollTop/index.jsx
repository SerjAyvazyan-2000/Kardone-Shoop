import "./style.scss"
import {useState} from "react";
import useInformation from "../../../hooks/test-information";
import useSettings from "../slider-section/setings";


const ScrollTop = () => {

    const [scroll,setScroll] = useState(false)
    let {homeSliderInfo, featuredProducts} = useInformation()
    let {settings} = useSettings()

    window.onscroll = () => {
        if(window.scrollY > 700){
            setScroll(true)
        }else {
            setScroll(false)
        }
    }
    const scrollClick = () => {
        window.scrollTo(0,0)
    }
    return <div onClick={scrollClick} className={`scroll-top izShowBtn  ${!scroll ? "izShowBtn_hide" : null}`}>
        <i className="icon-arrow-up"></i>
    </div>
}
export default ScrollTop