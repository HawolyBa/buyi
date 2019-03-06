import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <figure className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name}/>
        <figcaption>
          <h4>{product.name}</h4>
          <h5>{product.price}</h5>
        </figcaption>
      </Link>
    </figure>
  )
}

export default Product
