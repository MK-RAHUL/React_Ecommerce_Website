import React from 'react'
import Category from '../../Home/category&products/Category/Category'
import Products from '../../Home/category&products/products/Products'
import Navbar from '../Navbar/Navbar'
import './Parent_product.css'


function Parent_product() {
  return (
    <div className='homepage'>
         <Navbar/>
        <Category/>
        <Products/>
    </div>
  )
}

export default Parent_product