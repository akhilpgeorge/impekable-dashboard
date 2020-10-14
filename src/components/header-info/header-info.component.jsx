import React from 'react';

import HeaderProfile from '../header-profile/header-profile.comopnent';

import './header-info.styles.scss';

class HeaderInfo extends React.Component {
    render(){
        return(
            <div className="header-right">
                {/* header nav starts */}
                <div className="header-nav">
                    <div className="header-nav-item">
                        <div className="header-nav-pic">
                            <span className="stripe header-nav-notification"></span>
                        </div>
                    </div>
                </div>
                {/* header nav ends */}
                <div className="header-info-divider"></div>
                <HeaderProfile />
            </div>
        )
    }
}

export default HeaderInfo;
