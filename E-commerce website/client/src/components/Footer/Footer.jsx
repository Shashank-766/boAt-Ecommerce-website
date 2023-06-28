import "./Footer.scss";
import { FaLocationArrow ,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate=useNavigate();
    return <footer className="footer">
        <div className="footer-content">

            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    boAt Set Sail In 2014.
                    During One Of Their Many Explorations, We Discovered That The Dopest People Of Our Land Were In Search Of Affordable, Durable And Ultra Fashionable Audio Products To Groove To.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="text">
                        H-1365, Satyam Vihar, Awas Vikas,
                        Kalyanpur, Kanpur , Uttar Pradesh 208017 
                    </div>
                    </div>
                    <div className="c-items">
                    <FaMobileAlt/>
                    <div className="text">
                        Phone: 91+ 7355085029
                    </div>
                    </div>
                    <div className="c-items">
                    <FaEnvelope/>
                    <div className="text">
                        Email: onlinestore@gmail.com
                    </div>
                    </div>        
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text" onClick={()=>navigate("/category/Headphones")}>Headphones</span>
                <span className="text"onClick={()=>navigate("/category/Smart%20Watches")}>Smart Watch</span>
                <span className="text"onClick={()=>navigate("/category/Bluetooth%20Speakers")}>Bluetooth Speakers</span>
                <span className="text"onClick={()=>navigate("/category/Wireless%20Earbuds")}>Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text" onClick={()=>navigate("/")}>Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    boAt AUDIBLE STORE 2023 CREATED BY SHASHANK DEV. E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt=" " />
            </div>
        </div>
    </footer>;
};

export default Footer;
