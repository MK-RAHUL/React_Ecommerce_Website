import React, { useEffect, useState } from 'react';
import './Category.css';
import { Card } from 'react-bootstrap';
import instance from '../../../Axios';
function Category() {
  const [category,setcategory] =useState([])
  useEffect(() => {
    instance.get('/api/category/allcategory').then(response =>{
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
  {category.map((obj, id) => (
    <div className='posters' key={id}>
      <Card className='cards' style={{ width: '200px', height: '150px' }}>
        <Card.Img
          className='card_img'
          variant="top"
          src={`data:image/png;base64,${obj.image}`}
          style={{
            width: '120px',
            height: '120px',
            margin: 'auto', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Card.Title className='card_title'>{obj.name}</Card.Title>
      </Card>
    </div>
  ))}
</div>

    </div>
  );
}

export default Category;
