import "./HeaderBottom.style.scss";
import { dataNav } from "./HeaderBottom.config";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { Row, Col } from 'antd';

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="content-container">
        <ul>
          {dataNav.map((item) => {
            if (item.expand.length > 0 || item.expandMenu.length > 0)
              return (
                <li className="item-1" key={item.title}>
                  <Link to="#">
                    {item.title} <FaAngleDown />
                  </Link>

                  {item.expand.length > 0 && (
                    <ul className="menu-2">
                      {item.expand.map((item1) => (
                        <>
                          <li className="item-1" key={item1}>
                            <Link to="#">{item1}</Link>
                          </li>
                        </>
                      ))}
                    </ul>
                  )}

                  {item.expandMenu.length > 0 && (
                    <div className="menu-dropdown">
                      <Carousel
                        isRTL={true} pagination={false}
                        enableAutoPlay={true}
                        autoPlaySpeed={3000}
                        itemsToScroll={1} itemsToShow={4}
                        showArrows={false}
                      >
                        {

                          item.shopMenuImages && item.shopMenuImages.map((image, i) => (
                            <div className="shop-menu-carousel">
                              <img src={image} key={i} />
                            </div>
                          ))
                        }
                      </Carousel>
                      <Row className="shop-memu-item">
                        {item.expandMenu.map((column) => (
                          <>
                            <Col span={6} className="column" key={column.title}>
                              <h6>{column.title}</h6>
                              <ul>
                                {column.expand.map((row) => (
                                  <li key={row}>{row}</li>
                                ))}
                              </ul>
                            </Col>
                          </>
                        ))}
                      </Row>
                    </div>
                  )}
                </li>
              );

            return (
              <li className="item-1" key={item.title}>
                <Link to="#">{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
