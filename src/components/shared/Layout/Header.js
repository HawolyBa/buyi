import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <h1 id="logo">Buy<span>i</span></h1>
        <nav className="main-navigation">
          <ul>
            <li>
              <NavLink to='/'>home</NavLink>
            </li>
            <li>
              <NavLink to='/products'>furnitures</NavLink>
            </li>
            <li>
              <NavLink to='/categories'>categories</NavLink>
            </li>
            <li>
              Login/Register
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
