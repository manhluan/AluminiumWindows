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
]
const ColabBrands = () => {
    return (
        <>
            <Row className="brands_list">
                {
                    colabBrandsList.map((brand, i) => (
                        <Col md={{ span: 2 }} xs={{ span: 24 }} key={i} className="brand_item">
                            <img src={brand.url} alt="" />
                        </Col>
                    ))
                }
            </Row>

        </>
    );
}

export default ColabBrands;