import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import {store} from '../../../index';
import { deleteProduct, incrementProduct, decrementProduct } from "../../../duck/actions";

const LogoComponent = function({logoSrc}){
    console.log(logoSrc)
    return (
        <div className="header_content_logo">
            <a href={window.location.origin}>
                <img src={logoSrc} alt="Kamil Bartusik Shop"/>
            </a>
        </div>
    )
}
class SearchbarComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    dropdownHandler(bool){
        this.setState({isActive: bool})
    }
    render(){
    const { handler, search } = this.props;
    return (
        <div className="header_content_searchbar">
            <label htmlFor="search">
                <input
                    onBlur={() => this.dropdownHandler(false)}
                    onFocus={() => this.dropdownHandler(true)}
                    className="search_input"
                    placeholder="Wpisz minimum 4 znaki..."
                    onChange={(e) => handler(e)}
                    type="text"
                    name="search"/>
            </label>
{                console.log(search.length)}
            <button>Jem!</button>
            {search && (
                <div className={"header_content_searchbar_dropdown " + (this.state.isActive ? 'active' : '')}>
                    {search.map(item => {
                        return <div className="header_content_searchbar_dropdown_item">
                            <img src={item.imageUrl} alt={item.name}/>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.price} zł
                            </div>
                        </div>
                    })}
                </div>
                )}
        </div>
        )
    }
}

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            openCart: false
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
    cartHandler = (bool) => {
        this.setState({openCart: bool})
    }
    render(){
        const { search, openCart } = this.state;
        const { logoSrc, cartHandler } = this;
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
                        <span className="price">0,00</span>
                        <span className="currency">zł</span>
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <div className={"header_content_cart_dropdown " + (openCart ? 'active' : '')}>
                        {this.props.cartProducts.map((prod, index) => {
                            return (
                                <div
                                    key={`cart_item_no_${index}`}
                                    className="header_content_cart_dropdown_item">
                                    <div
                                        onClick={() => {store.dispatch(deleteProduct(prod.id))}}
                                        className="header_content_cart_dropdown_item_remove"
                                    >X</div>
                                    <div className="header_content_cart_dropdown_item_image">
                                        <img src={prod.imageUrl} alt={prod.name}/>
                                    </div>
                                    <div className="header_content_cart_dropdown_item_content">
                                        <div className="header_content_cart_dropdown_item_title">
                                            {prod.name}
                                        </div>
                                        <div className="header_content_cart_dropdown_item_price">
                                            <div className="cart_amount">
                                                <div
                                                    // onClick={store.dispatch(incrementProduct(prod.id))}
                                                    className="handleAmount">+</div>
                                                <span className="priceAmount">{`${prod.amount}`}</span>
                                                <div
                                                    onClick={() => {store.dispatch(decrementProduct(prod.id))}}
                                                    className="handleAmount">-</div>
                                            </div>
                                            x
                                            <span className={"red"}>{prod.price}zł</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="header_content_cart_dropdown_summary">

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
        products: state.productsList
    }
}

export default connect(mapStateToProps)(HeaderContent);
