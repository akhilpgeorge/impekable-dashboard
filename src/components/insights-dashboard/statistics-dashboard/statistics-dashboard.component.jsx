import React from 'react';

import {Col} from 'react-bootstrap'

import './statistics-dashboard.styles.scss';

export default class StatisticsDahboard extends React.Component {
    render(){
        return(
            <Col xl={6} lg={12} md={12}>
                <div className="card chart-card">
                    <h6 className="p-3">Statistics</h6>
                </div>
            </Col>
        )
    }
}
