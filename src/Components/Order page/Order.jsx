import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './Order.css'
import img3 from '../images/trash-2.png'
import img4 from '../images/user_318-804790.avif'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'
import {BiDownArrow} from 'react-icons/bi'
import instance from '../../Axios'
import { useNavigate } from 'react-router-dom'


function Order() {
    const navigate =useNavigate()
    const [orders,setorders]=useState([])
    useEffect(() => {
        instance.get("/api/Order/allOrder").then(response=>{
            // console.log(response.data)
            setorders(response.data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, [])

    const handledelete =(id)=>{
        const confirm = window.confirm("Would You Like To Delete ?")
        if(confirm){
          instance.delete(`/api/Order/Delete?id=${id}`)
          .then(res =>{
            console.log(res)
            navigate('/order')
          })
          .catch(err => console.log(err))
        }
      }
    
  return (
    <div className='homepage'>
        <Navbar/>
        <div className='orders'>
        <h2>All Orders</h2>
        <div className='table'>
            <table style={{textAlign:'center'}}>
                <thead>
                    <tr>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>Product<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>No Of Items<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>Total Price<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>User<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>Order Status<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>Accept</th>
                    <th style={{paddingLeft:'25px',paddingRight:'25px',paddingTop:'20px'}}>Cancel</th>
                </tr>
                </thead>

                {
                    orders.map((obj)=>
                    <tbody  key={obj.id}>
                    <tr>
                        <td style={{display:'flex',paddingTop:'20px'}}><img className='product_image' src={`data:image/png;base64,${obj.productImage}`} />{obj.productName}</td>
                        <td>{obj.quantity}</td>
                        <td>{obj.total_price}</td>
                        <td style={{paddingTop:'10px',display:'flex',paddingBottom:'35px'}}><img className='product_image2' src={img4}  /> <span>{obj.username}  <br /> {obj.mail}</span></td>
                        <td><button className='pending'>Pending <span className='arrow'><BiDownArrow/></span></button></td>
                        <td><BsCheckCircleFill style={{fontSize:'25px'}}/></td>
                        <td> <img src={img3} alt="" onClick={e=>handledelete(obj.id)}/></td>
                    </tr>
                    </tbody>
                    )
                }
              
                <tfoot>
                <tr>
                    <th style={{paddingTop:'20px'}}><button className='product_btn'>PREVIOUS</button></th>
                    <th></th>
                    <th style={{paddingLeft:'70px',paddingTop:'20px'}}>Page 1 Of 10</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th style={{paddingTop:'20px'}}><button className='product_btn'>NEXT</button></th>
                </tr>
                </tfoot>
            </table>
            
        </div>
    </div>
    </div>
  )
}

export default Order