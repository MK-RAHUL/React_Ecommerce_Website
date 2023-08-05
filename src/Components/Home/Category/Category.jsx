import React, { useEffect, useState } from 'react';
import './Category.css';
import { Card } from 'react-bootstrap';
// import img1 from '../../images/image 12-1.png' 
import axios from '../../../Axios'
import { useNavigate } from 'react-router-dom';
function Category() {
  const [category,setcategory] =useState([])
  const [imgs,setimgs] =useState()
  


  useEffect(() => {
    axios.get('/api/category/allcategory').then(response =>{
     setcategory(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[])


  return (
    <div className='category_name'>
      <button>Product Category</button>
      <div className="product_cards">

      {
        category.map((obj,id)=>
        <div className='posters'>         
          <Card key={id} className='cards' style={{ width: '200px', height: '150px' }}>
          <Card.Img variant="top" src={`data:image/png;base64,${obj.image}`} style={{ width: '120px', height: '120px' }} />
          <Card.Title className='card_title'>{obj.name}</Card.Title>
        </Card>
        </div>
 
        )
          }

      </div>
    </div>
  );
}

export default Category;
