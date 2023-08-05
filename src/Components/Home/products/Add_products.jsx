import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../../Axios'

function Add_products() {
  const navigate =useNavigate()
  const [selects,setselects]= useState([])
  const [value, setvalue] = useState({
    name: '',
    category: { id: '', name: '' },
    stock: 0,
    price: 0,
    description: '',
    image:''
  });
  useEffect(() => {
    instance.get("/api/category/allcategory").then(response =>{
      // console.log(response.data)
      setselects(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault();    
    const body={ "name": value.name,
    "description": value.description,
    "stock":value.stock,
    "category":value.category.name,
    "price":value.price,
    "image":''}

    console.log(body)
    instance.post('/api/Product/ProductInsert', body)
      .then((response) => {
        console.log(response);
        alert('Product Added Successfully')
        navigate('/products');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
    
  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 rounded'>
        <h3>Add Products</h3>
        <form onSubmit={handlesubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Product Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={value.name}
              onChange={e=>setvalue({...value,name:e.target.value})}
              required
            />
          </div>
          <div className='mb-2'>
  <label htmlFor='email'>Product Category</label>
  <select
    name="category"
    id="category"
    value={value.category.id}
    onChange={(e) =>
      setvalue({
        ...value,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }
  >
    <option value="">Select a category</option>
    {selects.map((obj) => (
      <option key={obj.id} value={obj.id}>
        {obj.name}
      </option>
    ))}
  </select>
</div>

          <div className='mb-2'>
            <label htmlFor='email'>Price</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={value.price}
              onChange={e=>setvalue({...value,price:e.target.value})}

              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Available Stock</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={value.stock}
              onChange={e=>setvalue({...value,stock:e.target.value})}

              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Description</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={value.description}
              onChange={e=>setvalue({...value,description:e.target.value})}


            />
          </div>
          <Button type='submit' className='btn btn-success'>
            Submit
          </Button>
          <Link to='/products' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Add_products