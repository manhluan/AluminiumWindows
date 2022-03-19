import React from 'react';
import { Row, Col } from 'antd';
import './colabBrands.style.scss';
import Carousel from "react-elastic-carousel";

const colabBrandsList = [
    {
        id: 1,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
    {
        id: 2,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
    {
        id: 3,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
    {
        id: 4,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
    {
        id: 5,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
    {
        id: 6,
        name: "Top fashion",
        url: "https://www.conceptaluminium.com.au/themes/frontend/images/menu-icon2.svg"
    },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 }
];

const ColabBrands = () => {
    return (
        <>
            <Row className="brands_list">
                {/* {
                    colabBrandsList.map((brand, i) => (
                        <Col md={{ span: 2 }} xs={{ span: 24 }} key={i} className="brand_item">
                            <img src={brand.url} alt="" />
                        </Col>
                    ))
                } */}
                <Carousel
                    isRTL={false}
                    enableAutoPlay={true}
                    autoPlaySpeed={3000}
                    showArrows={true}
                    breakPoints={breakPoints}
                    pagination={false}
                >
                    {colabBrandsList.map((item) => (
                        <div className="brand_item">
                            <img className="banner-background" src={item.url} alt="aliminium" />
                        </div>
                    ))}
                </Carousel>
            </Row>
        </>
    );
}

export default ColabBrands;