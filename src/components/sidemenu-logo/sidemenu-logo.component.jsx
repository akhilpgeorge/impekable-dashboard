import React from 'react';

import './sidemenu-logo.styles.scss';

class SideMenuLogo extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="sidemenu-head">
                <h2 className="sidemenu-title">
                    {children}
                </h2>
            </div>
        )
    }
}

export default SideMenuLogo;
