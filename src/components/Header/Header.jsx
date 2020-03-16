import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import HeaderContent from './HeaderContent/HeaderContent';

function Header() {
    return (
        <div className="header">
            <TopBar/>
            <HeaderContent/>
        </div>
    )
}
export default Header;
