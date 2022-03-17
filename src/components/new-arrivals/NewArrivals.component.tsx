import React from 'react';
import { Row, Col } from 'antd';
import "./newArrivals.style.scss";
import SubArrivals from './sub-arrivals/SubArrivals.component';

const newArrivals = [
    {
        id: 1,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/16-300x300.jpg"
    },
    {
        id: 2,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/16-300x300.jpg"
    },
    {
        id: 3,
        name: "Ut Enim Ad Minima Veniam",
        price: "200,00",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/16-300x300.jpg"
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