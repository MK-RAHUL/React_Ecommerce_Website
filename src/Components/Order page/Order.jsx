import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './Order.css'
import img1 from '../images/Rectangle 5.png'
import img2 from '../images/🦆 icon _edit_.png'
import img3 from '../images/trash-2.png'
import img4 from '../images/Ellipse 1.png'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
import {BiDownArrow} from 'react-icons/bi'


function Order() {
  return (
    <div className='homepage'>
        <Navbar/>
        <div className='orders'>
        <h2>All Orders</h2>
        <div className='table'>
            <table style={{textAlign:'center'}}>
                <tr>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Product<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>No Of Items<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Total Price<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>User<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Order Status<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Accept</th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px'}}>Cancel</th>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                    <td> <img src={img3} alt="" /></td>
                </tr>
                <tr>
                    <td style={{display:'flex',paddingTop:'20px',paddingBottom:'40px'}}><img className='product_image' src={img1} />Asus Laptop</td>
                    <td>1</td>
                    <td>700000</td>
                    <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4} alt="" /> <span>Vimal  <br /> john.doe@gmail.com</span></td>
                    <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                    <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
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
    </div>
  )
}

export default Order