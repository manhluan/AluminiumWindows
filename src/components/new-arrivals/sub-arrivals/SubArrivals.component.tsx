import React from 'react';
import { Row, Col } from 'antd';

interface PropsI {
    prodList: FeaturedProdItem[];
    colName: string;
}
function SubArrivals({prodList, colName}: PropsI) {
    return (
        <>
            <Col span={4} className="prodList_container">
                    <div>
                        <h1>{colName}</h1>
                    </div>
                    {
                        prodList.map(prod => (
                            <div className="prod_item">
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