import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItem, handleAddToCart,handleRemoveFromCart}=useContext(Context);
    return <div className="cart-products" >
        {cartItem.map((item) => (
            <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item.attributes.title} </span>
                    <MdClose className="close-btn" onClick={()=>{handleRemoveFromCart(item);}}/>
                    <div className="quantity-buttons">
                        <span onClick={()=>{
                            item.attributes.quantity>1? handleAddToCart(item,-1) :handleRemoveFromCart(item);
                            }}>-</span>
                        <span>{item.attributes.quantity} </span>
                        <span onClick={()=>handleAddToCart(item,1)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>X</span>
                        <span className="highlight">&#8377;{item.attributes.price}</span>
                        <span>=</span>
                        <span className="highlight">{"  "}&#8377;{item.attributes.quantity*item.attributes.price}</span>
                    </div>

                </div>
            </div>

        ) )}
    </div>;
};

export default CartItem;
