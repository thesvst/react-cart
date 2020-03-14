import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ProductList from "./components/shared-utilities/ProductList/ProductList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            sliderProducts: []
        }
    }
    //
    // Access
    // M6TPtd-bRqquqqU2LK88oI7cphYg-kTSQ7ZG79ivshc
    // Secret
    // Ojh5KHzeFHTA1ru_0xcInXxR19qLtDyn4-oRMgr9sc8
    //
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
    componentDidMount() {
        /* Fetches the API */
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.reasonapps.pl/data.json')}`)
            .then((response) => response.json())
            .then((data) => {
                let { contents } = data;
                let parsedProducts = JSON.parse(contents);
                /* API does not include images so... let's add them! */
                let images = [];
                for(let i = 0; i <= 5; i++){
                    // console.log('a')
                    async function getImages(){
                        fetch('https://pixabay.com/api/?key=15600885-ededef8c94654366119e37af4&q=food&image_type=photo&per_page=100')
                            .then((response) => {
                                response.json();
                            })
                            .then( (data) => {
                                 // images.push(data.hits);
                                console.log(data.hits)
                            })
                                // parsedProducts.map((parsedProd, data) => {
                                //     parsedProd['image'] = images[data.id];
                                // })
                            // .then((data) => {
                            // });
                    }

                }
                // setInterval(() => {
                //     console.log(images)
                //
                // }, 500)

                this.setState({products: parsedProducts});
                this.setSliderProducts(parsedProducts);
            })
    }
    render(){
    const { sliderProducts } = this.state;
      return (
          <div className="shopping_cart_wrapper">
            <Header/>
            <div className="main_content">
                <ProductList data={sliderProducts}/>
            </div>
          </div>
      );
  }
}

export default App;
