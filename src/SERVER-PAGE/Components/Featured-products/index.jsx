import "./style.scss"


const FeaturedProducts = ({item}) => {

    return <div className="product ">
        <div className="product-image G-image" style={{backgroundImage: `url(${item.img})`}}></div>
        <p>{item.name}</p>
        <h3>${item.prise}</h3>
        <div className="add-cart-tools">
            <i className="icon-cart"></i>
            <button>ADD TO CART</button>
        </div>

    </div>
}
export default FeaturedProducts