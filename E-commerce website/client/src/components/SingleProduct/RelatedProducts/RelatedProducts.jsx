import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = (props) => {
    const data = useFetch(`/api/products?populate=*&filters[id][$ne]=${props.productId}&filters[categories][id]=${props.categoryId}&pagination[start]=0&pagination[limit]=4`);

    return <div className="related-products">
        <Products products={data} HeadingText="Related Products" />
    </div>
};

export default RelatedProducts;
