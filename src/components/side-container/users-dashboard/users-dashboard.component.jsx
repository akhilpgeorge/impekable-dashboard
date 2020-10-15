import React from 'react';

import StripeIcon from '../../stripe-icon/stripe-icon.component';
import UserCard from './user-card/user-card.component';

import JanaNavakova from '../../../assets/images/JanaNavakova.jpg';
import DrewJames from '../../../assets/images/Drew-James.png';
import BavidKames from '../../../assets/images/Bavid-Kames.png';
import LavidEmes from '../../../assets/images/Lavid-Emes.png';

import {Card} from 'react-bootstrap';

import './users-dashboard.styles.scss';

export default class UsersDashboard extends React.Component {
    constructor(){
        super();

        this.state = {
            firstUser: {
                image: JanaNavakova,
                userName: 'Nick Herasimenka',
                country: 'United States'
            },
            ourUsers : [
                {
                    image: DrewJames,
                    userName: 'Drew James',
                    country: 'United States',
                    mobile: '9858658974'
                },
                {
                    image: BavidKames,
                    userName: 'Bavid Kames',
                    country: 'United States',
                    mobile: '9858658974'
                },
                {
                    image: LavidEmes,
                    userName: 'Lavid Emes',
                    country: 'United States',
                    mobile: '9858658974'
                }
            ]
        }
    }
    render(){
        return(
            <Card className="user-card">
                <div className="img-circle m-3">
                    <img src={this.state.firstUser.image} />
                    <b>{this.state.firstUser.userName}</b>
                    <p>{this.state.firstUser.country}</p>
                </div>
                <ul className="social-icons">
                    <StripeIcon iconClass="insta" />
                    <StripeIcon iconClass="twitter" />
                    <StripeIcon iconClass="facebook" />
                    <StripeIcon iconClass="message" />
                </ul>

                <div className="col-12 mt-4">
                    <h5 className="heading">
                        Our Users
                    <span className="stripe point-stripe"></span>
                    </h5>
                    <div className="user-list">
                        {this.state.ourUsers.map((user,index) => {
                            return(
                                <UserCard key={index} {...user}/>
                            )
                        })}
                    </div>
                </div>
            </Card>
        )
    }
}
