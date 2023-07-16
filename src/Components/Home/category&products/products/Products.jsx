import React from 'react'
import './Products.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import img1 from '../../../images/Rectangle 5.png'
import img2 from '../../../images/🦆 icon _edit_.png'
import img3 from '../../../images/trash-2.png'

function Products() {
  return (
    <div className='products'>
        <h2>All Products</h2>
        <div className='input_box'>
        <input className='input' type="text" placeholder='Search Something...'/>
        <button className='search'>Search</button>
        </div>
        <button className='addnew'>Add New Product</button>
        <div className='table'>
            <table style={{textAlign:'center'}}>
                <tr>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Product <AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Category <AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Stock Quantity <AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Unit Price <AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Description <AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}></th>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>Laptops</td>
                    <td>100</td>
                    <td>700000</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <th><button className='product_btn'>PREVIOUS</button></th>
                    <th></th>
                    <th style={{paddingLeft:'70px'}}>Page 1 Of 10</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><button className='product_btn'>NEXT</button></th>
                </tr>
            </table>
            
        </div>
    </div>
  )
}

export default Products