import React from 'react'

function ProductList({data}) {
    const { sliderProducts, addToCart } = data;
    return (
        <React.Fragment>
            <ul className="product_list">
                {sliderProducts.map((prod) => {
                    return (
                        <li
                            key={`product_no_${prod.id}`}
                            className="product_list_item">
                                <div
                                    style={{backgroundImage: `url(${prod.imageUrl})`}}
                                    className="product_list_item_image"
                                />
                                <div className="product_list_item_name">
                                    {prod.name}
                                </div>
                                <div className="product_list_item_price">
                                    {prod.price} zł
                                </div>
                                <button
                                    className="product_list_item_add_to_cart"
                                    onClick={() => addToCart(prod.id)}>
                                    Dodaj do koszyka!
                                </button>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}
export default ProductList;
