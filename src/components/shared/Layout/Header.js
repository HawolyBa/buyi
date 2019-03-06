import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {

  state = {
    windowHeight: window.scrollY
  }

  updateDimensions = e => {
    this.setState({
      windowHeight: window.scrollY
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateDimensions)
  }

  render() {
    console.log(window.innerHeight)
    return (
      <header className="main-header" style={{background: window.location.pathname === '/' && this.state.windowHeight < window.innerHeight / 2 ? 'transparent': '#424242', marginBottom: window.location.pathname === '/' ? 0: '86px'}}>
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
