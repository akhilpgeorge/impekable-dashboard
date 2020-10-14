import React from 'react';

import HeaderSearch from '../header-search/header-search.component';
import HeaderInfo from '../header-info/header-info.component';

import './header.styles.scss';

class Header extends React.Component {
    render(){
        return (
            <div className="header-wrapper">
                <div className="header">
                    <HeaderSearch />
                    <HeaderInfo />
                </div>
            </div>
        )
    }
}

export default Header;