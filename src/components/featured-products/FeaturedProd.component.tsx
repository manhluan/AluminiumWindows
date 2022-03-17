import React from 'react';
import "./featuredProd.style.scss";
import { Row, Col, Tabs } from 'antd';
import FeaturedProdItem from './featured-product-item/FeaturedProdItem.component';

const prodCategories = [
    {
        key: 1,
        name: "ALNUMINUM DOORS"
    },
    {
        key: 2,
        name: "TITAN DOORS"
    },
    {
        key: 3,
        name: "DIAMONDS DOORS"
    },
];

const featuredProdList = [
    {
        id: 1,
        name: "CỬA NHÔM",
        price: "300,000",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/11-300x300.jpg"
    },
    {
        id: 2,
        name: "CỬA SẮT",
        price: "300,000",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/11-300x300.jpg"
    },
    {
        id: 3,
        name: "CỬA ĐỒNG",
        price: "300,000",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/11-300x300.jpg"
    },
    {
        id: 4,
        name: "CỬA VÀNG",
        price: "300,000",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/11-300x300.jpg"
    },
    {
        id: 5,
        name: "CỬA NHỰA",
        price: "300,000",
        imageUrl: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/09/11-300x300.jpg"
    },
];
const { TabPane } = Tabs;

const FeaturedProd = () => {

    const callback = (key: any) => {
        console.log(key)
    }
    return (
        <>
            <h3 className="featuredProd_title">
                FEATURED PRODUCTS
            </h3>
            <Row className="featuredProd_list">
                <Col span={20}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        {
                            prodCategories.map(cate => (
                                <TabPane tab={cate.name} key={cate.key}>
                                    <Row className="featured_row">
                                        {
                                            featuredProdList.map(prod => (
                                                <FeaturedProdItem
                                                    key={prod.id}
                                                    product={prod}
                                                />
                                            ))
                                        }
                                    </Row>

                                </TabPane>
                            ))
                        }
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default FeaturedProd;