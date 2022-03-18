import React from 'react';
import "./bannerGrid.style.scss";
import { Row, Col } from 'antd';

const bannerItems = [
    {
        id: 1,
        url: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
    {
        id: 2,
        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/featured-photo-types-of-doors.jpeg.jpg"
    },
    {
        id: 3,
        url: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
    {
        id: 4,
        url: "https://www.glenviewdoors.com/images/OWL/Entry.jpg"
    },
    {
        id: 5,
        url: "https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
    },
    {
        id: 6,
        url: "https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/fiberglass.jpg"
    },
]
const BannerGrid = () => {
    return (
        <>
                <Row className="bannerGrid_container">
                    {
                        bannerItems.map((item, i) => (
                            <Col md={{span:6}} xs={{span:24}} key={i} className="banner_col">
                                <img src={item.url} alt="" />
                            </Col>
                        ))
                    }
                </Row>
        </>
    );
}

export default BannerGrid;