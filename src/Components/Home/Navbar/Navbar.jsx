import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'
import {BsBag} from 'react-icons/bs'

function Navbar() {
  return (
    <div className='homemain'>
        <div className='navbar'>
            <nav>
                <h4>
                    ZUDIO
                </h4>
                <ul>
                    <li> <NavLink to='/products'>Products</NavLink></li>
                    <li> <NavLink to='/category'>category</NavLink></li>
                    <li> <NavLink to='/order'>order</NavLink></li>
                </ul>
                <button>Logout</button>
                <BsBag className='carticon'/>
            </nav>
        </div>
        </div>
  )
}

export default Navbar