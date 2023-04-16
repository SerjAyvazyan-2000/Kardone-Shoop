import "./style.scss"
import {Link} from "react-router-dom";


const FeaturedProducts = ({item}) => {
    return <Link to={`/product/${item.id}`}
                 // state={{name: item.name, categories: item.categories}}
                 className="product ">
        <div className="product-image G-image" style={{backgroundImage: `url(${item.img})`}}></div>
        <p>{item.name}</p>
        <h3>${item.prise}</h3>
        <div className="add-cart-tools">
            <i className="icon-cart"></i>
            <button>ADD TO CART</button>
        </div>

    </Link>
}
export default FeaturedProducts