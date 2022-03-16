import "./Footer.style.scss";
import slider1 from "./images/galerry1.jpg";
import { FaHome,FaPaperPlane,FaPhoneAlt,FaFacebookF,FaTwitter,FaPinterestSquare,FaInstagramSquare,FaGooglePlusG} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-contanter-area">
        <h3 className="footer-title">About Us</h3>
        <ul className="info-footer-adress">
          <li className="adres">
            <div className="detail-dt"><FaHome className="Icons"></FaHome><div className="detail-dcsp">No 40 Baria street 133/2 newsyork city, NY, USA</div></div>
          </li>
          <li className="adres">
            <span  className="detail-dt">
            <FaPaperPlane/>
              <a href="#" className="detail-dcsp">contact@example.com</a>
            </span>
          </li>
          <li className="adres">
            <span className="detail-dt"><FaPhoneAlt/><span className="detail-dcsp"></span>(888) 1234 56789</span>
          </li>
        </ul>
        <div className="socials-footer">
          <ul className="socials-footer-ul">
            <li className="socials-footer-li">
              <a className="faIcons" href="#" title="Face Book">
              <FaFacebookF/>
              </a>
            </li>
            <li className="socials-footer-li">
              <a className="faIcons" href="#" title="Twitter">
                <span className="fa fa-twitter"><FaTwitter/></span>
              </a>
            </li>
            <li className="socials-footer-li">
              <a className="faIcons" href="#" title="pinterest">
                <span className="fa fa-pinterest"><FaPinterestSquare/></span>
              </a>
            </li>
            <li className="socials-footer-li">
              <a className="faIcons" href="#" title="Instagram">
                <span className="fa fa-instagram"><FaInstagramSquare/></span>
              </a>
            </li>
            <li className="socials-footer-li">
              <a className="faIcons" href="#" title="Google Plus">
                <span className="fa fa-google-plus"><FaGooglePlusG/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-Our-services">
        <h3>Our services</h3>
        <ul className="footer-menu">
          <li className="menu-about-store">
            <a className="item-link" href="#">
              <span className="menu-title">About Store</span>
            </a>
          </li>
          <li className="menu-new-collection">
            <a className="item-link" href="#">
              <span className="menu-title">New Collection</span>
            </a>
          </li>
          <li className="menu-contact-us">
            <a className="item-link" href="#">
              <span className="menu-title">Contact Us</span>
            </a>
          </li>
          <li className="menu-latest-news">
            <a className="item-link" href="#">
              <span className="menu-title">Latest News</span>
            </a>
          </li>
          <li className="menu-our-sitemap">
            <a className="item-link" href="#">
              <span className="menu-title">Our Sitemap</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-Infomation">
        <h3>Infomation</h3>
        <ul id="menu-menu-footer-1" className="menu">
          <li className="menu-about-store">
            <a className="item-link" href="#"><span className="menu-title">About Store</span></a></li>
<li className="menu-new-collection"><a className="item-link" href="#"><span className="menu-title">New Collection</span></a></li>
<li className="menu-contact-us"><a className="item-link" href="#"><span className="menu-title">Contact Us</span></a></li>
<li className="menu-latest-news"><a className="item-link" href="#"><span className="menu-title">Latest News</span></a></li>
<li className="menu-our-sitemap"><a className="item-link" href="#"><span className="menu-title">Our Sitemap</span></a></li>
</ul>
      </div>
      <div className="footer-Gallery"><h3>Gallery</h3>
      <ul className="wpb_image_grid_ul" >
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
        <li className="isotope-item" >
        <img width="120" height="80" src={slider1} className="attachment-full" alt="Image"/>
        </li>
       </ul>
      </div>
    </div>
  );
};

export default Footer;
