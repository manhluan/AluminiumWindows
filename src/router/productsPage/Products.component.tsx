import Layout from 'components/layout';
import React from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import "./products.style.scss";
import FeaturedProdItem from 'components/featured-products/featured-product-item/FeaturedProdItem.component';
import { featuredProdList } from '../../components/featured-products/FeaturedProd.component';

const categories = [
    {
        id: 1,
        name: "Accesories 1"
    },
    {
        id: 2,
        name: "Accesories 2"
    },
    {
        id: 3,
        name: "Accesories 3"
    },
    {
        id: 4,
        name: "Accesories 4"
    },
    {
        id: 5,
        name: "Accesories 5"
    },
    {
        id: 6,
        name: "Accesories 6"
    },
    {
        id: 7,
        name: "Accesories 7"
    },
    {
        id: 8,
        name: "Accesories 8"
    },
]
const Products = () => {
    return (
        <Layout>
            <Row className="products_row">
                <Col>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>HOME</Breadcrumb.Item>
                        <Breadcrumb.Item>PRODUCTS</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className="products_row">
                <Col md={{ span: 4 }} xs={{span:24}} className="categories_col">
                    <h2>CATEGORIES</h2>
                    <ul className="product_categories">
                        {
                            categories.map(cate => (
                                <li key={cate.id}>{cate.name}</li>
                            ))
                        }

                    </ul>
                </Col>
                <Col md={{ span: 20 }} xs={{span:24}}>
                    <Row>
                        {
                            featuredProdList.map(prod => (
                                <FeaturedProdItem
                                    key={prod.id}
                                    product={prod}
                                    span={7}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default Products;