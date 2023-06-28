import { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import logo  from "../../assets/boatlogo.png"
// import { Context } from "../../utils/context";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import "./Header.scss";
import App from "./Drop";
import { Context } from "../../utils/context";




const Header = () => {
    const {cartCount}=useContext(Context);
    const navigate=useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [navigate])
    const [scrolled,setScrolled]= useState(false);
    const [showcart,setShowcart]= useState(false);
    const [showsearch,setSearch]= useState(false);
    const handleScroll =()=>
    {
        const offset=window.scrollY;
        if(offset>150){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

    },[]);

    const handleCart =()=>{
        setShowcart(prev => {return !prev});
    }; 
    const handleSearch =()=>{
        setSearch(prev => {return !prev});
    }; 

    return <> <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>

        <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate("/")}>Home</li>
                <li ><App/></li>
                <li>About</li>
            </ul>
        <div className="center" onClick={()=>navigate("/")}>
            <img src={logo} alt="logo"  className="logo"/>
            boAt AUDIBLE STORE.</div>  
        <div className="right">
            <TbSearch onClick={handleSearch}/>
            <AiOutlineHeart/>
            <span className="cart-icon" onClick={handleCart}> 
                <CgShoppingCart />
                {cartCount>0 && <span>{cartCount}</span>}
            </span>
            </div>  

        </div>
    </header> 
    {showcart && <Cart setShowcart={handleCart}/>}
    {showsearch && <Search setSearch={handleSearch}/>}
    </>
};

export default Header;
