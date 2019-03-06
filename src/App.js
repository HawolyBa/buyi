import React, { Component } from 'react';
import './scss/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/HomePage'
import Products from './components/products/Products'
import SingleProduct from './components/singleProduct/SingleProduct'
import Cart from './components/cart/Cart'
import Category from './components/category/Category'
import Account from './components/account/Account'
import AddProduct from './components/admin/AddProduct'

import Layout from './components/shared/Layout/Layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route path='/product/:id' component={SingleProduct}/>
            <Route exact path='/cart' component={Cart}/>
            <Route path='/catgory/:id' component={Category}/>
            <Route exact path='/account' component={Account}/>
            <Route exact path='/add-product' component={AddProduct}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
