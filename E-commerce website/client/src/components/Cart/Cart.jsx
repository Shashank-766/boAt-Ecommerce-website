import "./Cart.scss";
import CartItem from "./CartItem/CartItem"
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api";


const Cart = (props) => {
    const {cartCount,cartSubTotal,cartItem}=useContext(Context);
    const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_P_KEY);
    const handlePayment= async ()=> {
        try {
            const stripe = await stripePromise; 
        const res = await makePaymentRequest.post("/api/orders",{products:cartItem,});
        await stripe.redirectToCheckout({sessionId:res.data.stripeSession.id,})
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={props.setShowcart}>
                    <MdClose/>
                    <span className="text">Close</span>
                </span>
            </div>

            {
                cartCount ===0 && <div className="empty-cart">
                    <BsCartX/>
                    <span>No Product in the Cart</span>
                    <button className="return-cta" onClick={props.setShowcart} >RETURN TO SHOP</button>
                </div> 
            }
            {
                cartCount !==0 &&<>
                    <CartItem/>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>
                            <span className="text total">&#8377;{cartSubTotal}</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                        </div>
                    </div>
                
                </>
            }
        </div>
    </div>;
};

export default Cart;
