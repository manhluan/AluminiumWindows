import React from 'react';
import { Row, Col } from 'antd';
import "./popularProd.style.scss";
import FeaturedProdItem from 'components/featured-products/featured-product-item/FeaturedProdItem.component';

const popularProdList = [
    {
        id: 1,
        name: "CỬA NHÔM",
        price: "300,000",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYs6mzUyWbHJ91KZ9pkMMYixgqVkF90KWCQ&usqp=CAU"
    },
    {
        id: 2,
        name: "CỬA SẮT",
        price: "300,000",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYs6mzUyWbHJ91KZ9pkMMYixgqVkF90KWCQ&usqp=CAU"
    },
    {
        id: 3,
        name: "CỬA ĐỒNG",
        price: "300,000",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYs6mzUyWbHJ91KZ9pkMMYixgqVkF90KWCQ&usqp=CAU"
    },
    {
        id: 4,
        name: "CỬA VÀNG",
        price: "300,000",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYs6mzUyWbHJ91KZ9pkMMYixgqVkF90KWCQ&usqp=CAU"
    }
]
const PopularProd = () => {
    return (
        <>
            <Row className="popularProd_title">
                <Col md={{span:8}} xs={{span:24}}>
                    <h3>Popular products</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</p>
                </Col>
            </Row>
            <Row className="popularProd_list">
                {
                    popularProdList.map((prod, i) => (
                        <FeaturedProdItem
                            key={i}
                            product={prod}
                        />
                    ))
                }
            </Row>
        </>
    );
}

export default PopularProd;