import "./style.scss"

const LoaderBox  = ({loading}) => {

     return  <div className="loading-block">{loading ? "Empty List" :"Loading..." }</div>
}
export default LoaderBox