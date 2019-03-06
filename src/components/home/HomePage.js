import React, { Component } from 'react'
import Hero from './Hero'
import ProductList from '../shared/ProductList';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Hero/>
        <ProductList/>
      </div>
    )
  }
}

export default HomePage
