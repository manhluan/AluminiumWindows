import React from 'react';
import "./shopDeal.style.scss";
import { Row, Col } from 'antd';

const shopDealList = [
    {
        title: "Lock kit",
        promotion: "30% OFF",
        url: "https://www.conceptaluminium.com.au/media/images/6d1a385979ad46317530a352fc79c850.jpg"
    },
    {
        title: "Lock kit",
        promotion: "30% OFF",
        url: "https://www.conceptaluminium.com.au/media/images/6d1a385979ad46317530a352fc79c850.jpg"
    },
    {
        title: "Lock kit",
        promotion: "40% OFF",
        url: "https://www.conceptaluminium.com.au/media/images/6d1a385979ad46317530a352fc79c850.jpg"
    },
]
const ShopDeal = () => {
    return (
        <>
            <Row className="shopDeal_title">
                <Col md={{span:8}} xs={{span:24}}>
                    <h1>SHOP DEALS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsam rem perspiciatis magnam vero unde, quam blanditiis tenetur quae adipisci!</p>
                </Col>
            </Row>
            <Row className="shopDeal_list">
                {
                    shopDealList.map((image, i) => (
                        <Col md={{span:4}} xs={{span:24}} key={i}>
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