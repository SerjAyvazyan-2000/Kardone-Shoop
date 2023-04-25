
import "./style.scss"

const AutoPartsImages = ({item,deletePartsImage,index}) => {

    return <div style={{backgroundImage:`url(${item})`}} className="upload-autoParts-image G-image">
         <span onClick={()=>deletePartsImage(index)} className="icon-cross"></span>
    </div>

}
export default AutoPartsImages