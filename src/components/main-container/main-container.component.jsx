import React from 'react';

import InsightDashboard from '../insights-dashboard/insights-dashboard.component';
import SideContainer from '../side-container/side-container.component';

import Col from 'react-bootstrap/Col';

import './main-container.styles.scss';

class MainContainer extends React.Component {
    render() {
        return ( 
            <>
            <Col xl={8} lg={6} md={6}>
                <InsightDashboard />
            </Col>
            </>
        )
    }
}

export default MainContainer;
