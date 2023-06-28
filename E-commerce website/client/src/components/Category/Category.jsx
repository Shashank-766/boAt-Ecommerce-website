import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const {id}=useParams();
    const data=useFetch(`/api/products?populate=*&[filters][categories][title]=${id}`);
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">{id}</div>
            <div className="products-container">

            <Products innerPage={true} products={data}/>
            </div>
        </div>
    </div>;
};

export default Category;
