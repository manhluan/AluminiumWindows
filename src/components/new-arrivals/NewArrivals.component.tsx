import React from 'react';
import { Row, Col } from 'antd';
import "./newArrivals.style.scss";
import SubArrivals from './sub-arrivals/SubArrivals.component';

const newArrivals = [
    {
        id: 1,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://www.conceptaluminium.com.au/media/images/cac9ab0e71dd2de21b259bdfce869b1a.jpg"
    },
    {
        id: 2,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://www.conceptaluminium.com.au/media/images/cac9ab0e71dd2de21b259bdfce869b1a.jpg"
    },
    {
        id: 3,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://www.conceptaluminium.com.au/media/images/cac9ab0e71dd2de21b259bdfce869b1a.jpg"
    },
];
const NewArrivals = () => {
    return (
        <>
            <Row className="middle_prodList">
                <SubArrivals prodList={newArrivals} colName={"New ARRIVALS"} />
                <SubArrivals prodList={newArrivals} colName={"FEATURED PRODUCTS"} />
                <SubArrivals prodList={newArrivals} colName={"ON SALE PRODUCTS"} />
            </Row>
        </>
    );
}

export default NewArrivals;