import React from 'react';
import { Row, Col } from 'antd';

interface PropsI {
    prodList: FeaturedProdItem[];
    colName: string;
}
function SubArrivals({prodList, colName}: PropsI) {
    return (
        <>
            <Col md={{span:6}} xs={{span:24}} className="prodList_container">
                    <div>
                        <h1>{colName}</h1>
                    </div>
                    {
                        prodList.map((prod, i) => (
                            <div className="prod_item" key={i}>
                                <div className="image_left">
                                    <img src={prod.imageUrl} alt="" />
                                </div>
                                <div>
                                    <h4>
                                        {prod.name}
                                    </h4>
                                    <p>${prod.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </Col>
        </>
    );
}

export default SubArrivals;