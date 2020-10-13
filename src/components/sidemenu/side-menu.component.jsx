import React from 'react';

import MenuItem from '../menuitem/menu-item.component';
import SideMenuLogo from '../sidemenu-logo/sidemenu-logo.component'

import { faHome, faChartBar, faEnvelope, faFlag } from "@fortawesome/free-solid-svg-icons";

import './side-menu.styles.scss';

const listItems = [
    {
        name: 'Home',
        icon: faHome
    },
    {
        name: 'Dashboard',
        icon: faChartBar
    },
    {
        name: 'Inbox',
        icon: faEnvelope
    },
    {
        name: 'Products',
        icon: faFlag
    },
]

class SideMenu extends React.Component {
    constructor(){
        super();
    }

    
    render(){

        const {activeItem} = this.props;

        return (
            <div className='sidemenu'>
                <SideMenuLogo>
                    IMPEKABLE
                </SideMenuLogo>

                <ul className="sidemenu-list">
                    {listItems.map((item, index) => {
                        return <MenuItem key={index} name={item.name} activeItem={activeItem} icon={item.icon}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default SideMenu;