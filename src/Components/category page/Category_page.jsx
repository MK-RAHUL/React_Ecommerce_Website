import React, { useRef } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import './Category_page.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import img2 from '../images/🦆 icon _edit_.png'
import img3 from '../images/trash-2.png'
import { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../Axios'




function Category_page() {

  const [currentPage, setCurrentPage] = useState(1);
  const categoryPerPage = 5; 


  const [categories,setcategories]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    instance.get("/api/category/allcategory").then(response =>{
      setcategories(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])
  const indexOfLastcategory = currentPage * categoryPerPage;
const indexOfFirstcategory = indexOfLastcategory - categoryPerPage;
const currentcategory = categories.slice(indexOfFirstcategory, indexOfLastcategory);

  const handledelete =(id)=>{
    const confirm = window.confirm("Would You Like To Delete ?")
    if(confirm){
      instance.delete(`/api/category/CategoryDelete?id=${id}`)
      .then(res =>{
        console.log(res)
        navigate('/category')
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='homepage'>
        <Navbar/>
        <div className='categories'>
        <h2>All Categories</h2>
        <div className='input_box'>
        <input className='input' type="text" placeholder='Search Something...'/>
        <button className='search'>Search</button>
        </div>
        <Link to='/category/add-category'><button className='addnew'>Add New Category</button></Link>
        <div className='table'>
            <table style={{textAlign:'center'}}>
              <thead>
                <tr>
                    <th style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'20px'}}></th>
                    <th style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'20px'}}>Category Name<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px'}}>Description<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px'}}>Image<AiOutlineArrowDown/></th>
                    <th style={{paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px'}}></th>
                    <th style={{paddingLeft:'60px',paddingRight:'50px',paddingTop:'20px'}}></th>
                </tr>
                </thead>

                {
  currentcategory.map((obj) => {
    return (
      <tbody key={obj.id}>
        <tr>
          <td></td>
          <td style={{ paddingTop: '20px' }}>{obj.name}</td>
          <td style={{ maxWidth: '10px', paddingTop: '20px' }}>{obj.description}</td>
          <td style={{  paddingTop: '20px' }}>
            <img className='image' src={`data:image/png;base64,${obj.image}`} />
          </td>
          <td><Link to={`/category/edit-category/${obj.id}`}><img src={img2} alt="" /></Link></td>
          <td><img src={img3} onClick={e=>handledelete(obj.id)} /></td>
        </tr>
      </tbody>
    );
  })
}

              
                <tfoot>
                <tr>
                    <th style={{paddingTop:'20px'}}><button className='product_btn' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>PREVIOUS</button></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th style={{paddingTop:'20px'}}><button className='product_btn'onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(categories.length / categoryPerPage)}>NEXT</button></th>
                </tr>
                </tfoot>
            </table>
            
        </div>
    </div>

    </div>
  )
}

export default Category_page