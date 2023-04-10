import "./style.scss"
import {AiFillEye} from "react-icons/ai"
import {AiFillWechat} from "react-icons/ai"
import {AiFillDollarCircle} from "react-icons/ai"
import {BsFillCartDashFill} from "react-icons/bs"



const CardBox = () => {

    return <div className="card-box">
         <div className="card">

             <div>
                 <div className="numbers">1,504</div>
                 <div className="cardName">Daily Views</div>
             </div>
             <div className="iconBox">
                 <AiFillEye/>
             </div>

             <div>
                 <div className="numbers">84</div>
                 <div className="cardName">Sales</div>
             </div>
             <div className="iconBox">
                 <BsFillCartDashFill/>
             </div>

             <div>
                 <div className="numbers">284</div>
                 <div className="cardName">Comments</div>
             </div>
             <div className="iconBox">
                 <AiFillWechat/>
             </div>

             <div>
                 <div className="numbers">$7,432</div>
                 <div className="cardName">Earning</div>
             </div>
             <div className="iconBox">
                 <AiFillDollarCircle/>
             </div>
         </div>
    </div>
}
export default CardBox