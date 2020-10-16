import React from 'react';

import { Row } from 'react-bootstrap';

import './referrer.styles.scss';

export default class Referrer extends React.Component {
    constructor(){
        super();

        this. state = {
            referrers : [
                {
                    location: 'google.com',
                    views: 3746,
                    sales:752,
                    conversion: 43,
                    total: 19291
                },
                {
                    location: 'facebook.com',
                    views: 8121,
                    sales: 456,
                    conversion: 55,
                    total: 34556
                },
                {
                    location: 'twitter.com',
                    views: 3434,
                    sales: 343,
                    conversion: 67,
                    total: 34343
                },
                {
                    location: 'Direct, emial, IM',
                    views: 1881,
                    sales: 345,
                    conversion: 45,
                    total: 56564
                },
                {
                    location: 'linkedin.com',
                    views: 2345,
                    sales: 234,
                    conversion: 89,
                    total: 67890
                },
            ]
        }
    }

    render(){
        let tableHeadings = ['location', 'views', 'sales', 'conversion', 'total']
        return(
            <Row className="desktop">
                <div className="col-12 mt-4 mb-5">
                    <div className="bg-white p-3">
                        <h6 className="pt-3 pb-3">Referrer</h6>

                        <table className="table">
                            <thead>
                                <tr>
                                    {tableHeadings.map((head, index) => {
                                        return(
                                            <th key={index}> {head.toUpperCase()} </th>
                                        )
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.referrers.map((referer, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{referer.location}</td>
                                            <td>{referer.views}</td>
                                            <td>{referer.sales}</td>
                                            <td>{referer.conversion}</td>
                                            <td>{referer.total}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        <a href="#">Show more</a>
                    </div>
                </div>
            </Row>
        )
    }
}