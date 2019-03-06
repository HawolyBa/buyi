import React, { Component, Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main className="main-content">
          {this.props.children}
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

export default Layout
