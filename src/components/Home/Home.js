import React from 'react'
import ProductContainer from './ProductContainer'
import AddProduct from './AddProduct'

const Home = () => {
  return ( 
    <div className="py-16">
      <div className="productWrapper">
        <ProductContainer/>
        <AddProduct/>
      </div>
    </div>
  )
}

export default Home