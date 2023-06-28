import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();
const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();
    useEffect(()=>{window.scrollTo(0,0)},[location]);

    useEffect(() => {
        if (cartItem.length > 0) {
            setCartCount(() => {
                let sum = 0;
                cartItem.map((item) => 
                    sum += item.attributes.quantity
                )
                return sum;
            });
            setCartSubTotal(() => {
                let sum = 0;
                cartItem.map((item) => 
                    sum += item.attributes.quantity * item.attributes.price
                )
                return sum;
            });
        }else{
            setCartCount(0);
            setCartSubTotal(0);
        }
    }, [cartItem,cartCount]);

    const handleAddToCart = (proudct, quantity) => {
        let items = [...cartItem];
        let index = items.findIndex((p) => p.id === proudct.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            proudct.attributes.quantity = quantity;
            items = [...items, proudct];
        }
        setCartItem(items);
    };
    const handleRemoveFromCart = (proudct) => {
        let items = [...cartItem];
        items = items.filter((p) => p.id !== proudct.id)
        setCartItem(items);
    };


    return <Context.Provider
        value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItem,
            setCartItem,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
        }
        }>{children}</Context.Provider>;
};
export default AppContext;