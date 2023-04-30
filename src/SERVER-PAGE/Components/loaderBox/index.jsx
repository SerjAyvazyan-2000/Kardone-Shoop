import "./style.scss"

const LoaderBox  = ({loading}) => {

     return  <div className="loading-block">{loading ? "Loading...." :"Empty List" }</div>
}
export default LoaderBox