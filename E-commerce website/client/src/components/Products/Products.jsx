import "./Products.scss";
import Product from "./Product/Product"
const Products = (props) => {
    
    return <div className="products-container">
        {!props.innerPage &&<div className="sec-heading">
            {props.HeadingText}
        </div>}
        <div className="products">
            {props.products?.data.map(item=>(
                <Product key={item.id} id={item.id} data={item.attributes} />

            ))}
            
        </div>
    </div>;
};

export default Products;
