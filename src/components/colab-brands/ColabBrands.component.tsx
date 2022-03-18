import React from 'react';
import { Row, Col } from 'antd';
import './colabBrands.style.scss';

const colabBrandsList = [
    {
        id: 1,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
    {
        id: 2,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
    {
        id: 3,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
    {
        id: 4,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
    {
        id: 5,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
    {
        id: 6,
        name: "Top fashion",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bran1.jpg"
    },
]
const ColabBrands = () => {
    return (
        <>
            <Row className="brands_list">
                {
                    colabBrandsList.map((brand, i) => (
                        <Col span={2} key={i} className="brand_item">
                            <img src={brand.url} alt="" />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default ColabBrands;