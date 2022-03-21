import React from 'react';
import { Col } from 'antd';
import { categories } from 'router/productsPage/Products.component';

const Categories = () => {
    return (
        <Col md={{ span: 4 }} xs={{ span: 24 }} className="categories_col">
            <h2>CATEGORIES</h2>
            <ul className="product_categories">
                {
                    categories.map(cate => (
                        <li key={cate.id}>{cate.name}</li>
                    ))
                }
            </ul>
        </Col>
    );
}

export default Categories;