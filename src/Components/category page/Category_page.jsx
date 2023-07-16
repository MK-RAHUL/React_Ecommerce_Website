import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './Category_page.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import img1 from '../images/Rectangle 5.png'
import img2 from '../images/🦆 icon _edit_.png'
import img3 from '../images/trash-2.png'


function Category_page() {
  return (
    <div className='homepage'>
        <Navbar/>
        <div className='categories'>
        <h2>All Categories</h2>
        <div className='input_box'>
        <input className='input' type="text" placeholder='Search Something...'/>
        <button className='search'>Search</button>
        </div>
        <button className='addnew'>Add New Category</button>
        <div className='table'>
            <table style={{textAlign:'center'}}>
                <tr>
                    <th style={{paddingLeft:'10px',paddingRight:'10px'}}></th>
                    <th style={{paddingLeft:'10px',paddingRight:'10px'}}>Category Name<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px'}}>Description<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px'}}>Image<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px'}}></th>
                    <th style={{paddingLeft:'60px',paddingRight:'50px'}}></th>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                  <td></td>
                    <td>Laptops</td>
                    <td>intel core i5, 6GB RAM</td>
                    <td style={{display:'flex'}}><img className='image' src={img1} /></td>
                    <td><img src={img2} alt="" /></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                 
                    <th><button className='product_btn'>PREVIOUS</button></th>
                    <th></th>
                    <th style={{paddingLeft:'70px'}}>Page 1 Of 10</th>
                    <th></th>
                    <th></th>
                    <th><button className='product_btn'>NEXT</button></th>
                </tr>
            </table>
            
        </div>
    </div>

    </div>
  )
}

export default Category_page