import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'

class HeaderContent extends Component {
    constructor() {
        super();
        this.state = {}
    }
    logoSrc = require('../../../assets/images/logo.png');
    render(){
        return (
            <div className="header_content">
                <div className="header_content_logo">
                    <a href={window.location.origin}>
                        <img src={this.logoSrc} alt="Kamil Bartusik Shop"/>
                    </a>
                </div>
                <div className="header_content_searchbar">
                    <label htmlFor="search">
                        <input type="text" name="search"/>
                    </label>
                    <button>Jem!</button>
                </div>
                <div className="header_content_cart">
                    <div className="header_content_cart_price">
                        <span className="price">20,00</span>
                        <span className="currency">zł</span>
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </div>
            </div>
        )
    }
}
export default HeaderContent;
