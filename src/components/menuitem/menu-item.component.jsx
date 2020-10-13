import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './menu-item.styles.scss';

class MenuItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { id, name, activeItem, icon } = this.props;
        let myClassName = 'sidebar_item';
        console.log("activeItem",activeItem);
        console.log("name",name);
        console.log("check", activeItem === name);
        if (activeItem === name) {
            myClassName+= ' sidebar_item_active';
        }

        return (
            <li key={id} className={myClassName} data-name={name}>
                <a href="#" className='sidebar_link'>
                    <FontAwesomeIcon icon={icon} />
                    <span className="sidebar_item-name">{name}</span>
                </a>
            </li>
        )
    }
}

export default MenuItem;