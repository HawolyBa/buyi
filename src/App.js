import React, { Component, Fragment } from 'react';
import './scss/main.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/HomePage'
import SingleProduct from './components/singleProduct/SingleProduct'
import Cart from './components/cart/Cart'
import Category from './components/category/Category'
import Account from './components/account/Account'
import AddProduct from './components/admin/AddProduct'

import Header from './components/shared/Layout/Header'
import Footer from './components/shared/Layout/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/product/:id' component={SingleProduct}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/catgory/:id' component={Category}/>
            <Route exact path='/account' component={Account}/>
            <Route exact path='/add-product' component={AddProduct}/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
