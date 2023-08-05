import React, { useEffect } from 'react'
import Category from '../Category/Category'
import Products from '../products/Products'
import Navbar from '../Navbar/Navbar'
import './Parent_product.css'
import { useNavigate } from 'react-router-dom'


function Parent_product() {
  const navigate =useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('Token')){
      navigate('/')
    }
  }, [])
  
  return (
    <div className='homepage'>
         <Navbar/>
        <Category/>
        <Products/>
    </div>
  )
}

export default Parent_product