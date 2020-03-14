import React, { Component } from 'react';

import TopBar from './TopBar/TopBar';
import HeaderContent from './HeaderContent/HeaderContent';
import NavigationMenu from './NavigationMenu/NavigationMenu';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <TopBar/>
                <HeaderContent/>
                <NavigationMenu/>
            </div>
        )
    }
}
export default Header;
