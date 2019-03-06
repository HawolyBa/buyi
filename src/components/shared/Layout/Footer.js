import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>News</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="column">
            <h4>Furnitures</h4>
            <ul>
              <li>Sofas</li>
              <li>Chairs</li>
              <li>Tables</li>
              <li>Bedrooms</li>
              <li>Bathrooms</li>
              <li>Living rooms</li>
            </ul>
          </div>
          <div className="column">
            <h4>Our Shop</h4>
            <address>
              22 Main Street<br/>
              0900 - San Francisco
            </address>
            <span>Tel: 0900 555 74 54</span><br/>
            <span>Email: contact@buyi.com</span>
          </div>
          <div className="column newsletter">
            <h4>Subscribe to our newsletter</h4>
            <div className="newletter-form">
              <input type="email" placeholder="Enter your email address"/>
              <button>Enter</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>@2019 PIXIKRAFT</p>
        </div>
      </footer>
    )
  }
}

export default Footer
