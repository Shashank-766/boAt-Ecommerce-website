import useFetch  from "../../hooks/useFetch";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn,
    FaPinterest, FaCartPlus,
} from "react-icons/fa";
import { useState ,useContext } from "react";
import { Context } from "../../utils/context";



const SingleProduct = () => {

    const {handleAddToCart}=useContext(Context);

    const [quantity,setQuantity]=useState(1);
    const increment=()=>{
        setQuantity(prev=>prev+1)
    }
    const decrement=()=>{
        setQuantity(prev=>prev>1?prev-1:1)
    }
    const navigate=useNavigate();
    const { id } = useParams();
    const data = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    // console.log(id);
    return < div className="single-product-main-content" >
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL + data?.data[0].attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="right">
                    <span className="name">{data?.data[0].attributes.title}</span>
                    <span className="price">&#8377;{data?.data[0].attributes.price}</span>
                    <span className="desc">{data?.data[0].attributes.desc}</span>
                    <div className="cart-button">
                        <div className="quantity-buttons">
                            <button onClick={decrement}>-</button>
                            <button>{quantity}</button>
                            <button onClick={increment}>+</button>
                        </div>
                        <button className="add-to-cart-button" onClick={()=>{
                            handleAddToCart(data?.data[0],quantity)
                            setQuantity(1)
                            }}>
                            <FaCartPlus size={20} />
                            &nbsp;&nbsp;ADD TO CART
                        </button>
                    </div>

                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold">
                            Category : {" "}
                            <span onClick={()=>navigate("/category/"+data?.data[0].attributes.categories.data[0].attributes.title)}>{data?.data[0].attributes.categories.data[0].attributes.title}</span>
                        </span>
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebook size={16} />
                                <FaTwitter size={16} />
                                <FaInstagram size={16} />
                                <FaLinkedinIn size={16} />
                                <FaPinterest size={16} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts productId={id} categoryId={data?.data[0]?.attributes?.categories?.data[0]?.id} />
        </div>
    </div >


};

export default SingleProduct;
