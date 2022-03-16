import "./Banner.style.scss";
import slider from "./images/slider3.jpg";
import Carousel from "react-elastic-carousel";

const items = [
  { id: 1, title: "item #1" },
  { id: 2, title: "item #2" },
  { id: 3, title: "item #3" },
  { id: 4, title: "item #4" },
  { id: 5, title: "item #5" },
];

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 1, itemsToScroll: 1 },
];
const Banner = () => {
  return (
    <Carousel breakPoints={breakPoints} isRTL={true} pagination={false}>
      {items.map((item) => (
        <div className="banner">
          <img className="banner-background" src={slider} alt="aliminium" />
          <div className="banner-flex-contents">
            <div className="banner-content">
              <h4 className="sub-title">Welcome to our</h4>
              <h3 className="title">The history gift shop</h3>
              <p className="description">
                browser or inspring ideas for the home
              </p>
              <button className="shop-now">shop now</button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
