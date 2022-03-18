import React from 'react';
import { Row, Col } from 'antd';
import "./bathroom.style.scss";

const mockImages = [
    {
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/cat1.jpg",
        title: "BATHROOMS"
    },
    {
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/cat1.jpg",
        title: "BEDROOMS"
    },
    {
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/cat1.jpg",
        title: "FURNITURE & DECOR"
    },
    {
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/cat1.jpg",
        title: "LAMP & LIGHTING"
    },
    {
        url: "https://demo.wpthemego.com/themes/sw_shop4u_free/wp-content/uploads/2017/12/cat1.jpg",
        title: "SOFA & CHAIRS"
    },
]
const Bathroom = () => {
    return (
        <>
            <Row className="bathroom_section">
                {
                    mockImages.map((image, i) =>
                        <Col span={4} key={i} className="bathroom_image_container">
                            <div className="bathroom_image">
                                <img src={image.url} alt={image.title}  />
                            </div>
                            <h2 className="bathroom_image_title">{image.title}</h2>
                        </Col>
                    )
                }

            </Row>
        </>
    );
}

export default Bathroom;