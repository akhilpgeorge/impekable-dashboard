import React from 'react';
import { Row } from 'react-bootstrap';

import StatisticsDahboard from "../insights-dashboard/statistics-dashboard/statistics-dashboard.component";

import './insights-dashboard.styles.scss';

export default class InsightsDashboard extends React.Component {
    render(){
        return(
            <Row>
                <StatisticsDahboard />
            </Row>
        )
    }
}
