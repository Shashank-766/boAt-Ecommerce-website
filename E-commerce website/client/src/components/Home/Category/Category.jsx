import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
    const navigate=useNavigate();
    const element = props.categories?.data.map((item) => (
        <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.attributes.title}`)}>
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
        </div>
    ))
    return (
        <div className="shop-by-category">
            <div className="title">Category</div>
            <div className="categories">
                {element}
            </div>
        </div>
    );
};

export default Category;
