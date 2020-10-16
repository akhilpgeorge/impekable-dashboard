import React from 'react';

import InsightDashboard from '../insights-dashboard/insights-dashboard.component';
import Referrer from '../main-container/referrer/referrer.component';

import Col from 'react-bootstrap/Col';

import './main-container.styles.scss';

class MainContainer extends React.Component {
    render() {
        return ( 
            <>
            <Col xl={8} lg={6} md={6}>
                <InsightDashboard />
                <Referrer />
            </Col>
            </>
        )
    }
}

export default MainContainer;
