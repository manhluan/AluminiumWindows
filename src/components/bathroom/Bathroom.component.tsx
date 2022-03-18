import React from 'react';
import { Row, Col } from 'antd';
import "./bathroom.style.scss";

const mockImages = [
    {
        url: "https://www.conceptaluminium.com.au/media/images/449bf7db45be64ef5806a36800153393.jpg",
        title: "SECURITY ACCESORIES"
    },
    {
        url: "https://www.conceptaluminium.com.au/media/images/449bf7db45be64ef5806a36800153393.jpg",
        title: "SECURITY ACCESORIES"
    },
    {
        url: "https://www.conceptaluminium.com.au/media/images/449bf7db45be64ef5806a36800153393.jpg",
        title: "SECURITY ACCESORIES"
    },
    {
        url: "https://www.conceptaluminium.com.au/media/images/449bf7db45be64ef5806a36800153393.jpg",
        title: "SECURITY ACCESORIES"
    },
    {
        url: "https://www.conceptaluminium.com.au/media/images/449bf7db45be64ef5806a36800153393.jpg",
        title: "SECURITY ACCESORIES"
    },
]
const Bathroom = () => {
    return (
        <>
            <Row className="bathroom_section">
                {
                    mockImages.map((image, i) =>
                        <Col md={{span:4}} xs={{span:24}} key={i} className="bathroom_image_container">
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