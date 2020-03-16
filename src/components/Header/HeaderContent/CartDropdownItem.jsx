import {store} from "../../../index";
import {decrementProduct, deleteProduct, incrementProduct} from "../../../duck/actions";
import React from "react";

const CartDropdownItem = function ({data}) {
    const {prod, index} = data;
    const {id, name, imageUrl, amount, price} = prod;
    return (
        <div
            key={`cart_item_no_${index}`}
            className="header_content_cart_dropdown_item">
            <div
                onClick={() => {store.dispatch(deleteProduct(id))}}
                className="header_content_cart_dropdown_item_remove"
            >X</div>
            <div className="header_content_cart_dropdown_item_image">
                <img src={imageUrl} alt={name}/>
            </div>
            <div className="header_content_cart_dropdown_item_content">
                <div className="header_content_cart_dropdown_item_title">
                    {name}
                </div>
                <div className="header_content_cart_dropdown_item_price">
                    <div className="cart_amount">
                        <div
                            onClick={() => store.dispatch(decrementProduct(id))}
                            className="handleAmount">-</div>
                        <span className="priceAmount">{`${amount}`}</span>
                        <div
                            onClick={() => store.dispatch(incrementProduct(id))}
                            className="handleAmount">+</div>
                    </div>
                    x
                    <span className={"red"}>{price}zł</span>
                </div>
            </div>
        </div>
    )
}
export default CartDropdownItem;
