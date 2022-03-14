import "./Banner.style.scss";
import slider from "./images/slider3.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-background" src={slider} alt="aliminium" />
      <div className="banner-flex-contents">
        <div className="banner-content">
          <h4 className="sub-title">Welcome to our</h4>
          <h3 className="title">The history gift shop</h3>
          <p className="description">browser or inspring ideas for the home</p>
          <button className="shop-now">shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
