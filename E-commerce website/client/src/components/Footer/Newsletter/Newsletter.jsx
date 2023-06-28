import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">

            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offers</span>
            <div className="form">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text"><a target="blank" href="https://www.boat-lifestyle.com/pages/security"> Will be used in accordance with our Private policy </a></div>
            <div className="social-icon">
                <a href="https://www.facebook.com/" target="blank"><div className="icon"><FaFacebookF   /></div></a>
                <a href="https://www.instagram.com/" target="blank"><div className="icon"><FaInstagram /></div></a>
                <a href="https://www.twitter.com/" target="blank"><div className="icon"><FaTwitter  /></div></a>
                <a href="https://www.linkedin.com/" target="blank"><div className="icon"><FaLinkedinIn  /></div></a>
            </div>

        </div>

    </div>;
};

export default Newsletter;
