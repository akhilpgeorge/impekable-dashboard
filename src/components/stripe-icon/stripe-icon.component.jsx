import React from 'react';

import './stripe-icon.styles.scss';

export default class StripeIcon extends React.Component {
    render() {
        const { iconClass } = this.props;
        let myClass = 'stripe '
        if(iconClass){
            myClass +=  iconClass;
        }
        return(
            <li className={myClass}></li>
        )
    }
}
