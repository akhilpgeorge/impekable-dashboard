import React from 'react';

import './user-card.styles.scss';

export default class UserCard extends React.Component {
    render() {
        const { userName, country, mobile, image } = this.props;

        return(
            <div className="user-container mb-3">
                <img src={image} alt=""/>
                <div>
                    <b>{userName}</b>
                    <p className="color-shide">
                        {country}- Mobile: {mobile}
                    </p>
                </div>
            </div>
        )
    }
}
