import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";

import CartDropdownItem from "./CartDropdownItem";
import SearchbarComponent from "./SearchbarComponent";
import LogoComponent from "./LogoComponent";

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            openCart: false,
            price: 0.00
        }
    }

    logoSrc = require('../../../assets/images/logo.png');
    // Methods
    inputHandler = (e) => {
        let val = e.target.value.toUpperCase();
        if(val.length > 3) {
            let results = this.props.products.filter(v => v.name.toUpperCase().includes(val));
            this.setState({search: results})
        }else{
            this.setState({search: []})
        }
    }
    static getDerivedStateFromProps(props) {
        const cart = props.cartProducts;
        let price = 0;
        cart.map(item => price += item.price * item.amount)
        return {price: price.toFixed(2)};
    }
    cartHandler = (bool) => {
        this.setState({openCart: bool})
    }
    render(){
        const { search, openCart, price } = this.state;
        const { logoSrc, cartHandler } = this;
        const { cartProducts } = this.props;
        return (
            <div className="header_content">
                {/*     Logo   */ }
                <LogoComponent logoSrc={logoSrc}/>
                {/*     Searchbar   */}
                <SearchbarComponent handler={(e) => this.inputHandler(e)} search={search}/>
                {/*     Cart     */}
                <div
                    onMouseLeave={() => cartHandler(false)}
                    onMouseEnter={() => cartHandler(true)}
                    className="header_content_cart">
                    <div className="header_content_cart_price">
                        <span className="price">{price}</span>
                        <span className="currency">zł</span>
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <div className={"header_content_cart_dropdown " + (openCart ? 'active' : '')}>
                        {cartProducts.map((prod, index) => {
                            return (
                                <CartDropdownItem data={{prod, index}}/>
                            )
                        })}
                        <div className="header_content_cart_dropdown_summary">
                            <div>Razem:</div>
                            <div>{`${price}zł`}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartProducts: state.productsInCart,
        products: state.productsList,
    }
}
export default connect(mapStateToProps)(HeaderContent);
