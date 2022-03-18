import React from 'react';
import { Row, Col } from 'antd';
import { FaBitcoin, FaHeadphones, FaRocket } from 'react-icons/fa';
import "./delivery.style.scss";

const Delivery = () => {
    return (
        <>
            <Row className="delivery_section">
                <Col className="delivery_col" md={{span:4}} xs={{span:24}}>
                <div>
                    <FaRocket className="delivery_icon" />
                </div>
                <div className="description">
                    <h3>Free Delivery</h3>
                    <p>From $99.00</p>
                </div>
                </Col>
                <Col className="delivery_col" md={{span:4}} xs={{span:24}}>
                <div>
                    <FaBitcoin className="delivery_icon" />
                </div>
                <div className="description">
                    <h3>Free Delivery</h3>
                    <p>From $99.00</p>
                </div>
                </Col>
                <Col className="delivery_col" md={{span:4}} xs={{span:24}}>
                <div>
                    <FaHeadphones className="delivery_icon" />
                </div>
                <div className="description">
                    <h3>Free Delivery</h3>
                    <p>From $99.00</p>
                </div>
                </Col>
            </Row>
        </>
    );
}

export default Delivery;