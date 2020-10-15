import React from 'react';

import UserDashboard from './users-dashboard/users-dashboard.component';
import ProductVideo from './product-video/product-video.component';

import Col from 'react-bootstrap/Col';

import './side-container.styles.scss';

export default class SideContainer extends React.Component {
    render(){
        return(
            <>
                <Col xl={4} lg={6} md={6}>
                    <UserDashboard />
                    <ProductVideo />
                </Col>
            </>
        )
    }
}