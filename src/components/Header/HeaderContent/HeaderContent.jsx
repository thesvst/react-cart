import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0.00,
            currency: 'zł',
            products: this.props.cart
        }
    }
    logoSrc = require('../../../assets/images/logo.png');
    render(){
        const { price, currency, products } = this.state;
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
                        <span className="price">
                            {price.toString().replace('.', ',')}
                        </span>
                        <span className="currency">{currency}</span>
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </div>
            </div>
        )
    }
}
export default HeaderContent;
