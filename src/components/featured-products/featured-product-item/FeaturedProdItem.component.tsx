import React from 'react';
import { Card, Col } from 'antd';
import { FaRegEye } from 'react-icons/fa';
import "./featuredProdItem.style.scss";

const { Meta } = Card;

interface PropsI {
    product: FeaturedProdItem;
}
const FeaturedProdItem = ({ product }: PropsI) => {
    return (
        <>
            <Col md={{span:4}} xs={{span:24}} className="prod_image_container">
                <div className="prod_image">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="view_prod">
                        <FaRegEye className="view_icon" />
                    </div>
                </div>
                <div className="prod_description">
                    <h4 className="prod_image_title">{product.name}</h4>
                    <div className="prod_price">
                        <span>${product.price}</span>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default FeaturedProdItem;