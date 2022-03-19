import "./Banner.style.scss";
import slider from "./images/newSlider_3.jpg";
import slider_2 from "./images/newSlider_4.jpg";
import slider_3 from "./images/slider3.png";
import slider_4 from "./images/slider4.jpg";
import Carousel from "react-elastic-carousel";

const items = [
  { id: 1, title: "item #1", bgUrl: slider_3 },
  { id: 2, title: "item #2", bgUrl: slider_4 },
  { id: 3, title: "item #3", bgUrl: slider_3 },
  { id: 4, title: "item #4", bgUrl: slider_4 },
  { id: 5, title: "item #5", bgUrl: slider_3 },
  { id: 6, title: "item #1", bgUrl: slider_4 },
  { id: 7, title: "item #2", bgUrl: slider_3 },
  { id: 8, title: "item #3", bgUrl: slider_4 },
  { id: 9, title: "item #4", bgUrl: slider_3 },
  { id: 10, title: "item #5", bgUrl: slider_4 },
];

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 1, itemsToScroll: 1 },
];
const Banner = () => {

  return (
    <>
      <Carousel
        breakPoints={breakPoints}
        isRTL={true} pagination={false}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        showArrows={false}
        >
        {items.map((item) => (
          <div className="banner">
            <img className="banner-background" src={item.bgUrl} alt="aliminium" />
            <div className="banner-flex-contents">
              <div className="banner-content">
                <h4 className="sub-title bouncing-text">
                  <span className="b">E</span>
                  <span className="b">M</span>
                  <span className="o">O</span>
                  <span className="u">C</span>
                  <span className="n">L</span>
                  <span className="c">E</span>
                  <span className="e">W</span>
                </h4>
                <h3 className="title">XN Aluminium Windows</h3>
                <p className="description">
                  browser or inspring ideas for the home
                </p>
                <button className="shop-now">shop now</button>

              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
