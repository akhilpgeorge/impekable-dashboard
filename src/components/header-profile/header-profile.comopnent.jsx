import React from 'react';

import './header-profile.styles.scss';

class HeaderProfile extends React.Component {
    render() {
        return (
            <div className="user">
                <span className="user-name">John Doe</span>

                <div className="user-dropdown">
                    <div className="user-arrow">
                        <span className="stripe user-name-down-arrow"></span>
                    </div>

                    <div className="user-pic">
                        <img src="images/avatar.png" alt="avatar" className="user-pic-img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderProfile;
