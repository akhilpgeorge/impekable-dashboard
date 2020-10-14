import React from 'react';

import './header-search.styles.scss';

class HeaderSearch extends React.Component {
    render(){
        return(
            <div className="header-search">
                <span className="stripe stripe-collapse"></span>
                <label className="header-search-label">
                    <div className="header-search-pic">
                        <span className="stripe header-search-img"></span>
                    </div>

                    <input type="text" className="header-input" 
                        placeholder="Search transactions, invoices or help"/>
                </label>
            </div>
        )
    }
}

export default HeaderSearch;
