import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ProductList from "./components/shared-utilities/ProductList/ProductList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            sliderProducts: [],
            cart: []
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
        const { products, cart } = this.state;
        const isInArray = this.state.cart.find(x => x.id === id);
        // If product exists in cart increase its amount
        if(isInArray) {
            // zwiekszac amount istniejacego
        }else{
            this.setState(prevState => ({cart: [...prevState.cart, products[id - 1]]}))
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
            const arrayWithImages = JSON.parse(data[0].contents).map((prod, index) => prod = {...prod, imageUrl: images[index].largeImageURL, amount:0});
            this.setState({products: arrayWithImages});
            this.setSliderProducts(arrayWithImages);
        })
    }
    render(){
    const { sliderProducts, cart } = this.state;
    const { addToCart } = this;
      return (
          <div className="shopping_cart_wrapper">
            <Header cart={cart}/>
            <div className="main_content">
                <ProductList data={{sliderProducts, addToCart}}/>
            </div>
          </div>
      );
  }
}

export default App;

// TO DO
// 1. Dodawanie do koszyka (jesli istnieje, to zwiekszac liczbe)
// 2. Mozliwosc dodawania/usuwania z koszyka + zmiana ilosci
// 3. Wyszukiwarka (5prod) + pokaz wiecej
// 4. Podstrona do szukajki
// 5. Podstrona produktu
// 6. Podstrona koszyka
