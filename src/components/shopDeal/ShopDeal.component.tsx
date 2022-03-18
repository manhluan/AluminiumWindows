import React from 'react';
import "./shopDeal.style.scss";
import { Row, Col } from 'antd';

const shopDealList = [
    {
        title: "Cook ware Set",
        promotion: "30% OFF",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bn-cat2.jpg"
    },
    {
        title: "Decor & Gifts",
        promotion: "30% OFF",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bn-cat2.jpg"
    },
    {
        title: "Home Office",
        promotion: "40% OFF",
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/bn-cat2.jpg"
    },
]
const ShopDeal = () => {
    return (
        <>
            <Row className="shopDeal_title">
                <Col span={8}>
                    <h1>SHOP DEALS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsam rem perspiciatis magnam vero unde, quam blanditiis tenetur quae adipisci!</p>
                </Col>
            </Row>
            <Row className="shopDeal_list">
                {
                    shopDealList.map((image, i) => (
                        <Col span={4} key={i}>
                            <div className="shopDeal_image">
                                <img src={image.url} alt={image.title}  />
                                <div className="shopDeal_content">
                                    <div className="shopDeal_name">{image.title}</div>
                                    <div className="shopDeal_promotion">{image.promotion}</div>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default ShopDeal;