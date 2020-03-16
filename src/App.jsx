import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ProductList from "./components/shared-utilities/ProductList/ProductList";

import { store } from "./index";
import {addProduct, addProducts, incrementProduct} from "./duck/actions";

class App extends Component {
    constructor() {
        super();
        this.state = {
            sliderProducts: [],
        }
    }
    /* Randomly push products to array for sliders/product list  */
    setSliderProducts(products) {
        let productsArray = [];
        while(productsArray.length < 12){
            const product = products[Math.floor(Math.random() * 500)];
            const isInArray = productsArray.filter((prod, index) => prod.id === index + 1);
            if(isInArray) productsArray.push(product);
        }
        this.setState({sliderProducts: productsArray})
    }
    addToCart = (id) => {
        const storeProds = store.getState().productsList;
        const cartProds = store.getState().productsInCart;
        const isInArray = cartProds.find(x => x.id === id);
        if(isInArray) { // If product exists in cart increase its amount.
            // store.dispatch(incrementProduct(id - 1, storeProds))
            store.dispatch(incrementProduct(id, cartProds));
        }else{ // Else just add it.
            // this.setState(prevState => ({cart: [...prevState.cart, products[id - 1]]}))
            store.dispatch(addProduct(id - 1, storeProds));
        }

    }
    componentDidMount() {
        /* Fetch for the products API */
        const prom1 = fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.reasonapps.pl/data.json')}`).then(res => res.json())
        /* Products have no images... so let's add them! */
        const prom2 = fetch('https://pixabay.com/api/?key=15600885-ededef8c94654366119e37af4&q=dinner&image_type=photo&per_page=200&page=1').then(res => res.json())
        const prom3 = fetch('https://pixabay.com/api/?key=15600885-ededef8c94654366119e37af4&q=dinner&image_type=photo&per_page=200&page=2').then(res => res.json())
        const prom4 = fetch('https://pixabay.com/api/?key=15600885-ededef8c94654366119e37af4&q=dinner&image_type=photo&per_page=100&page=3').then(res => res.json())
        /* Concat arrays and add images to products depending on its indexes */
        Promise.all([prom1,prom2,prom3,prom4]).then(data => {
            const images = [...data[1].hits, ...data[2].hits, ...data[3].hits];
            const arrayWithImages = JSON.parse(data[0].contents).map((prod, index) => prod = {...prod, imageUrl: images[index].largeImageURL, amount:1});
            store.dispatch(addProducts(arrayWithImages));
            this.setSliderProducts(arrayWithImages);
        })
    }
    render(){
    const { sliderProducts, cart } = this.state;
    const { addToCart } = this;
      return (
          <div className="shopping_cart_wrapper">
            <Header/>
            <div className="main_content">
                <ProductList data={{sliderProducts, addToCart}}/>
            </div>
          </div>
      );
  }
}

export default App;

// TO DO
// 1. Koszyk zwiekszanie ilosci
// 3. Cena
// 4. RWD
