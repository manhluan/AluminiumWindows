import React from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import Layout from 'components/layout';
import Categories from 'components/categories/Categories.component';
import { featuredProdList } from 'components/featured-products/FeaturedProd.component';
import FeaturedProdItem from 'components/featured-products/featured-product-item/FeaturedProdItem.component';
import "./productItem.style.scss";

const ProductItem = () => {
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
                <Categories />
                <Col md={{ span: 20 }} xs={{ span: 24 }} className="prod_details">
                    <Row>
                        <Col md={{ span: 12 }} xs={{ span: 24 }} className="prod_details_col">
                            <div>
                                <img src={featuredProdList[0].imageUrl} alt="" />
                            </div>
                            <div className="thumbnail_image">
                                <img src={featuredProdList[0].imageUrl} alt="" />
                                <img src={featuredProdList[0].imageUrl} alt="" />
                                <img src={featuredProdList[0].imageUrl} alt="" />
                                <img src={featuredProdList[0].imageUrl} alt="" />

                            </div>
                        </Col>
                        <Col md={{ span: 20 }} xs={{ span: 24 }} className="details_prod_content prod_details_col">
                            <h1>Product name</h1>
                            <p className="price">$72.00</p>
                            <p className="short_description">Style Code Live is a daily, live show where style enthusiasts can connect, chat, shop, and get the inside scoop on the latest fashion and beauty trends.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="prod_details_col description">
                            <h2>DESCRIPTION</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus necessitatibus repudiandae doloribus odio laborum maiores facilis autem facere dolorem aliquid tenetur ratione earum quia aperiam, at explicabo modi illum.
                            </p>
                        </Col>
                    </Row>
                    <Row className="related_prods">
                        <h2>RELATED</h2>
                    </Row>
                    <Row>
                        {
                            featuredProdList.map(prod => (
                                <FeaturedProdItem
                                    key={prod.id}
                                    product={prod}
                                    span={5}
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>

        </Layout>
    );
}

export default ProductItem;