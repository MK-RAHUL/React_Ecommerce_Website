import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'
import {BsBag} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate()
    const addtoproduct=()=>{
     navigate('/')
     localStorage.removeItem('Token')
     localStorage.removeItem('user_id')
     localStorage.removeItem('role')
    }
  return (
    <div className='homemain'>
        <div className='navbar'>
            <nav>
                <h4>
                    ZUDIO
                </h4>   
                <ul>
                    <li> <NavLink to='/products'>Products</NavLink></li>
                    <li> <NavLink to='/category'>Category</NavLink></li>
                    <li> <NavLink to='/order'>Order</NavLink></li>
                </ul>
                <button onClick={addtoproduct}>Logout</button>
                <BsBag className='carticon'/>
            </nav>
        </div>
        </div>
  )
}

export default Navbar