import React, { Component } from 'react'
import Product from './Product';
import consoleImage from '../../img/consoleImage.png'
import image2 from '../../img/image2.jpeg'
import image3 from '../../img/image3.jpeg'

class ProductList extends Component {

  state = {
    products: [
      {
        id: 1,
        name: 'Console',
        image: consoleImage,
        price: '$149.99'
      },
      {
        id: 2,
        name: 'Wooden desk',
        image: image2,
        price: '$49.99'
      },
      {
        id: 3,
        name: 'Macbook',
        image: image3,
        price: '$849.99'
      },
      {
        id: 4,
        name: 'Console',
        image: consoleImage,
        price: '$149.99'
      },
      {
        id: 5,
        name: 'Wooden desk',
        image: image2,
        price: '$49.99'
      },
      {
        id: 6,
        name: 'Macbook',
        image: image3,
        price: '$849.99'
      },
      {
        id: 7,
        name: 'Console',
        image: consoleImage,
        price: '$149.99'
      },
      {
        id: 8,
        name: 'Wooden desk',
        image: image2,
        price: '$49.99'
      },
      {
        id: 9,
        name: 'Macbook',
        image: image3,
        price: '$849.99'
      }
    ]
  }

  render() {
    return (
      <section className="product-list layout">
        { this.state.products.map(product => (
          <Product key={product.id} product={product}/>
        )) }
      </section>
    )
  }
}

export default ProductList
