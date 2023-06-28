import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate=useNavigate();
    return <div className="hero-banner" >

        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                        <p> 
                            Always on Client Calls? The Wireless Headphones That Would Make Your Office Life Comfortable!
                            </p>
                    
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={()=>navigate("/category/Headphones")}>Shop Now</div>
                    </div>
            </div>
            <img src={BannerImg} alt="banner-img" className="banner-img"/>
        </div>
    </div>;
};

export default Banner;
