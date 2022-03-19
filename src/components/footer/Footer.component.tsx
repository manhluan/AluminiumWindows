import "./Footer.style.scss";
import { Row, Col } from 'antd';
import { FaFacebookF, FaGooglePlusG, FaHome, FaInstagramSquare, FaPaperPlane, FaPhoneAlt, FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const aboutUsData = [
	{
		address: "No 40 Baria Street 133/2 Newsyork City, NY, USA",
		email: "Contact@Example.Com",
		phone: "(888) 1234 56789"
	}
];
const galleryData = [
	"https://www.conceptaluminium.com.au/media/images/large/27418985a1f998f564ab05b74dd462c7.jpg",
	"https://www.conceptaluminium.com.au/media/images/large/fac2bd9062918e6a77d6fda612694165.jpg",
	"https://www.conceptaluminium.com.au/media/images/large/5155750cf170a1200e45f5731536fff0.jpg",
	"https://www.conceptaluminium.com.au/media/images/large/b75341c8e18c74c135c01ede1b900190.jpg",
	"https://www.conceptaluminium.com.au/media/images/large/157f5c1bb8192b5468a6fea7e52d3c86.jpg",
	"https://www.conceptaluminium.com.au/media/images/large/8aeee8225d453547aeaa388fb358e645.png"
]
const Footer = () => {
	return (
		<>
		<div className="footer_container">
			<Row className="shop_info">
				<Col md={{span:6}} xs={{span:24}} className="shop_info_col">
					<h3>ABOUT US</h3>
					<div className="aboutUs_row">
						<FaHome className="aboutUs_homeIcon" />
						<span className="aboutUs_details">{aboutUsData[0].address}</span>
					</div>
					<div className="aboutUs_row">
						<FaPaperPlane className="aboutUs_homeIcon" />
						<span className="aboutUs_details">{aboutUsData[0].email}</span>
					</div>
					<div className="aboutUs_row">
						<FaPhoneAlt className="aboutUs_homeIcon" />
						<span className="aboutUs_details">{aboutUsData[0].phone}</span>
					</div>
					<div className="social_media">
						<Link to="/" className="social_media_item">
							<FaFacebookF />
						</Link>
						<Link to="/" className="social_media_item">
							<FaPinterestSquare />
						</Link>
						<Link to="/" className="social_media_item">
							<FaInstagramSquare />
						</Link>
						<Link to="/" className="social_media_item">
							<FaGooglePlusG />
						</Link>
					</div>
				</Col>
				<Col md={{span:4}} xs={{span:24}} className="shop_info_col">
					<h3>OUR SERVICES</h3>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">About Store</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">New Collection</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Contact Us</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Latest News</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Our Sitemap</Link>
					</div>
				</Col>
				<Col md={{span:4}} xs={{span:24}} className="shop_info_col">
					<h3>INFOMATION</h3>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">About Store</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">New Collection</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Contact Us</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Latest News</Link>
					</div>
					<div className="aboutUs_row">
						<Link to="#" className="aboutUs_details">Our Sitemap</Link>
					</div>
				</Col>
				<Col md={{span:6}} xs={{span:24}} className="shop_info_col">
					<h3>GALLERY</h3>
					<Row className="gallery_grid">
						{
							galleryData.map((url, i) => (
								<Col key={i} span={8} className="gallery_col">
									<img src={url} alt="" />
								</Col>
							))
						}
					</Row>

				</Col>
			</Row>
			<Row className="footer_middle">
				<Col md={{span:12}} xs={{span:24}}>
					<h3>Need help? call our award-winning</h3>
					<p>Support team 24/7 AT (844) 555-8386</p>
				</Col>
				<Col md={{span:12}} xs={{span:24}} style={{ textAlign: 'center' }}>
					<input type="text" placeholder="Enter your email" />
					<button>SUBSCRIBE</button>
				</Col>
			</Row>
			<Row className="footer_bottom">
				<Col md={{span:8}} xs={{span:24}}>
					<p className="copyright_text">©2022 WordPress Theme SW Shop4u. All Rights Reserved</p>
				</Col>
				<Col md={{span:4}} xs={{span:24}} className="footer_subscribe">
					<p className="phone_number">Call us now: 0123-345-688</p>
					<p>Email: <span className="footer_email">contact@gmail.com</span></p>
				</Col>
			</Row>
		</div>
		</>
	);
};

export default Footer;

