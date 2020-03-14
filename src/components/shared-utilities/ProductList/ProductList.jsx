import React, { Component } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProductList extends Component {
    render(){
        return (
            <React.Fragment>
                <ul className="product_list">
                    {this.props.data.map((prod) => {
                        return (
                            <li
                                key={`product_no_${prod.id}`}
                                className="product_list_item">
                                <div
                                    style={{backgroundImage: `url(${prod.image})`}}
                                    className="product_list_item_image"
                                ></div>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
export default ProductList
